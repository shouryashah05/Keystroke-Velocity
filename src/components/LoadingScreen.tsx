import React from 'react';

const LoadingScreen: React.FC = () => {
  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      
      {/* Background Video - Full Screen */}
      <video 
        autoPlay 
        muted 
        loop 
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="/images/aces logo animated.mp4" type="video/mp4" />
        {/* Fallback for browsers that don't support video */}
        <div className="absolute inset-0 bg-black"></div>
      </video>

      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/40 z-5"></div>
      
      {/* Content overlay */}
      <div className="relative z-10 min-h-screen flex items-center justify-center">
        <div className="text-center">
       
        
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;