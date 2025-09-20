interface GeometricShapesProps {
  className?: string;
}

export function GeometricShapes({ className = "" }: GeometricShapesProps) {
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {/* Triangle */}
      <div className="absolute top-20 left-20 w-16 h-16 geometric-shape ethereum-gradient opacity-10 animate-pulse" />
      
      {/* Square */}
      <div className="absolute bottom-32 right-24 w-12 h-12 bg-blue-500 opacity-10 rotate-45 animate-pulse" style={{ animationDelay: '1s' }} />
      
      {/* Circle */}
      <div className="absolute top-1/3 right-1/3 w-8 h-8 bg-purple-500 opacity-10 rounded-full animate-pulse" style={{ animationDelay: '2s' }} />
      
      {/* Hexagon */}
      <div 
        className="absolute top-1/2 left-1/4 w-10 h-10 bg-indigo-500 opacity-10 animate-pulse" 
        style={{ 
          clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
          animationDelay: '0.5s'
        }} 
      />
      
      {/* Diamond */}
      <div 
        className="absolute bottom-1/4 left-1/2 w-6 h-6 bg-pink-500 opacity-10 animate-pulse"
        style={{ 
          clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)',
          animationDelay: '1.5s'
        }} 
      />
    </div>
  );
}
