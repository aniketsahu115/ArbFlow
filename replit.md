# ArbFlow - Sovereign DeFi AI Agent

## Overview

ArbFlow is a decentralized AI agent application for DeFi interactions on the Arbitrum network. The application provides users with an intelligent conversational interface to interact with decentralized finance protocols through natural language. Users can connect their wallets, chat with the AI agent to perform DeFi operations, and receive execution plans for various financial strategies with risk assessments and protocol recommendations.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React with TypeScript using Vite as the build tool
- **UI Components**: Shadcn/ui component library with Radix UI primitives for accessibility
- **Styling**: Tailwind CSS with Ethereum-inspired design system (purple-blue gradients, geometric shapes)
- **State Management**: TanStack Query for server state and React Context for wallet state
- **Routing**: Wouter for client-side routing
- **Real-time Communication**: WebSocket integration for live chat functionality

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **API Design**: RESTful API with WebSocket support for real-time chat
- **Development Setup**: Hot reloading with Vite middleware integration
- **Storage**: In-memory storage implementation with interface for future database integration

### Data Storage Architecture
- **ORM**: Drizzle ORM configured for PostgreSQL
- **Database**: PostgreSQL (configured but using in-memory storage currently)
- **Schema**: Structured tables for users, chat sessions, messages, and execution plans
- **Migration System**: Drizzle Kit for database schema management

### Authentication & Wallet Integration
- **Wallet Connection**: MetaMask and WalletConnect support through custom React context
- **User Identity**: Wallet address-based user identification
- **Session Management**: Chat sessions linked to user wallet addresses
- **Preferences**: User-configurable risk tolerance and trusted protocol settings

### Real-time Communication
- **WebSocket Server**: Custom WebSocket implementation for bidirectional chat
- **Message Types**: Structured message schema with user/AI roles
- **Execution Plans**: Rich message objects containing DeFi strategy recommendations
- **Connection Management**: Automatic reconnection and session handling

### UI/UX Design System
- **Design Inspiration**: Ethereum Foundation aesthetic with clean, minimal interface
- **Color Palette**: Ethereum gradient (purple to blue) with neutral backgrounds
- **Typography**: Inter font family for readability and modern appearance
- **Animation**: Subtle fade-in animations and geometric shape backgrounds
- **Responsive Design**: Mobile-first approach with adaptive layouts

### Component Architecture
- **Modal System**: Reusable dialog components for wallet connection and approvals
- **Chat Interface**: Scrollable message history with execution plan rendering
- **Settings Panel**: User preference configuration with protocol selection
- **Execution Plans**: Interactive DeFi strategy cards with approval/rejection actions

## External Dependencies

### Blockchain & Web3
- **Neon Database Serverless**: PostgreSQL database service for production
- **Wallet Integration**: Browser wallet APIs (MetaMask, WalletConnect)
- **Arbitrum Network**: Layer 2 Ethereum scaling solution for DeFi operations

### UI & Styling
- **Radix UI**: Comprehensive component primitives for accessibility
- **Tailwind CSS**: Utility-first CSS framework for rapid development
- **Lucide React**: Icon library for consistent iconography
- **Google Fonts**: Inter font family for typography

### Development Tools
- **Drizzle Kit**: Database schema management and migrations
- **TanStack Query**: Server state synchronization and caching
- **React Hook Form**: Form validation and management
- **Zod**: Runtime type validation for API schemas

### Build & Development
- **Vite**: Fast build tool with HMR support
- **ESBuild**: JavaScript bundler for production builds
- **TypeScript**: Static type checking and enhanced developer experience
- **Replit Plugins**: Development environment integration for runtime errors and cartography