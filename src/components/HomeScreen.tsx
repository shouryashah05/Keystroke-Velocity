import React, { useEffect } from 'react';

interface HomeScreenProps {
  onStartGame: () => void;
}

const HomeScreen: React.FC<HomeScreenProps> = ({ onStartGame }) => {
  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.key === 'Enter') {
        onStartGame();
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [onStartGame]);

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      
      {/* Logos */}
      <div className="absolute top-0 left-0 right-0 flex justify-between items-start p-6 z-10">
        <img 
          src="/images/ACES_LOGO-.png" 
          alt="ACES Logo" 
          className="w-16 h-16 object-contain"
        />
        <img 
          src="/images/mit adt 2025 logo.png" 
          alt="MIT ADT 2025 Logo" 
          className="w-16 h-16 object-contain"
        />
      </div>

      {/* Main content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center px-4">
        <div className="text-center">
          {/* Animated gradient title */}
          <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-tight">
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-blue-600 bg-clip-text text-transparent animate-gradient-x bg-300% hover:scale-105 transition-transform duration-300">
              Blindfold
            </span>
            <br />
            <span className="bg-gradient-to-r from-purple-400 via-blue-500 to-purple-600 bg-clip-text text-transparent animate-gradient-x bg-300% hover:scale-105 transition-transform duration-300" 
                  style={{ animationDelay: '0.5s' }}>
              Typing
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-500 via-purple-400 to-blue-500 bg-clip-text text-transparent animate-gradient-x bg-300% hover:scale-105 transition-transform duration-300" 
                  style={{ animationDelay: '1s' }}>
              Challenge
            </span>
          </h1>

          {/* Enter prompt */}
          <div 
            className="mt-12 p-4 border border-gray-700 rounded-lg bg-gray-800/50 backdrop-blur-sm hover:border-blue-500 transition-colors duration-300 cursor-pointer"
            onClick={onStartGame}
          >
            <p className="text-xl text-gray-300 mb-2">Ready to test your skills?</p>
            <p className="text-blue-400 font-semibold animate-pulse">Press ENTER to start or click here</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;