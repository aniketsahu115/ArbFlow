export default function BackgroundElements() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Clean gradient overlay - no floating elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-blue-500/5 to-purple-500/10"></div>
    </div>
  );
}
