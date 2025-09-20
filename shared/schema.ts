import { sql } from "drizzle-orm";
import { pgTable, text, varchar, timestamp, jsonb, boolean, integer } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  walletAddress: text("wallet_address").notNull().unique(),
  username: text("username"),
  preferences: jsonb("preferences").$type<{
    riskTolerance: number;
    trustedProtocols: string[];
    maxTransactionValue: number;
    autoApproveSmall: boolean;
  }>(),
  createdAt: timestamp("created_at").defaultNow(),
});

export const chatSessions = pgTable("chat_sessions", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  userId: varchar("user_id").references(() => users.id).notNull(),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

export const messages = pgTable("messages", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  sessionId: varchar("session_id").references(() => chatSessions.id).notNull(),
  content: text("content").notNull(),
  role: varchar("role", { enum: ["user", "ai"] }).notNull(),
  executionPlan: jsonb("execution_plan").$type<{
    title: string;
    steps: Array<{
      id: number;
      protocol: string;
      action: string;
      amount?: string;
      apy?: string;
    }>;
    summary: {
      networkCost: string;
      expectedYield?: string;
      riskLevel: "Low" | "Medium" | "High";
    };
  }>(),
  timestamp: timestamp("timestamp").defaultNow(),
});

export const executionPlans = pgTable("execution_plans", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  messageId: varchar("message_id").references(() => messages.id).notNull(),
  status: varchar("status", { enum: ["pending", "approved", "rejected", "executed"] }).notNull().default("pending"),
  transactionHashes: jsonb("transaction_hashes").$type<string[]>(),
  createdAt: timestamp("created_at").defaultNow(),
  executedAt: timestamp("executed_at"),
});

// Insert schemas
export const insertUserSchema = createInsertSchema(users).omit({
  id: true,
  createdAt: true,
});

export const insertChatSessionSchema = createInsertSchema(chatSessions).omit({
  id: true,
  createdAt: true,
  updatedAt: true,
});

export const insertMessageSchema = createInsertSchema(messages).omit({
  id: true,
  timestamp: true,
});

export const insertExecutionPlanSchema = createInsertSchema(executionPlans).omit({
  id: true,
  createdAt: true,
  executedAt: true,
});

// Types
export type User = typeof users.$inferSelect;
export type InsertUser = z.infer<typeof insertUserSchema>;
export type ChatSession = typeof chatSessions.$inferSelect;
export type InsertChatSession = z.infer<typeof insertChatSessionSchema>;
export type Message = typeof messages.$inferSelect;
export type InsertMessage = z.infer<typeof insertMessageSchema>;
export type ExecutionPlan = typeof executionPlans.$inferSelect;
export type InsertExecutionPlan = z.infer<typeof insertExecutionPlanSchema>;

// WebSocket message types
export const wsMessageSchema = z.discriminatedUnion("type", [
  z.object({
    type: z.literal("chat_message"),
    sessionId: z.string(),
    content: z.string(),
  }),
  z.object({
    type: z.literal("wallet_connected"),
    walletAddress: z.string(),
  }),
  z.object({
    type: z.literal("execution_plan_response"),
    messageId: z.string(),
    action: z.enum(["approve", "reject"]),
  }),
]);

export type WSMessage = z.infer<typeof wsMessageSchema>;
