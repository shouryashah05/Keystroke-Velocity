import React, { useState, useEffect } from 'react';
import LoadingScreen from './components/LoadingScreen';
import HomeScreen from './components/HomeScreen';
import TypingChallenge from './components/TypingChallenge';
import StatsScreen from './components/StatsScreen';
import { GameStats } from './types/game';

type Screen = 'loading' | 'home' | 'challenge' | 'stats';

function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('loading');
  const [gameStats, setGameStats] = useState<GameStats | null>(null);

  useEffect(() => {
    // Auto transition from loading to home after 3 seconds
    if (currentScreen === 'loading') {
      const timer = setTimeout(() => {
        setCurrentScreen('home');
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [currentScreen]);

  const handleStartGame = () => {
    setCurrentScreen('challenge');
  };

  const handleGameComplete = (stats: GameStats) => {
    setGameStats(stats);
    setCurrentScreen('stats');
  };

  const handleReturnHome = () => {
    setGameStats(null);
    setCurrentScreen('home');
  };

  const renderScreen = () => {
    switch (currentScreen) {
      case 'loading':
        return <LoadingScreen />;
      case 'home':
        return <HomeScreen onStartGame={handleStartGame} />;
      case 'challenge':
        return <TypingChallenge onGameComplete={handleGameComplete} />;
      case 'stats':
        return <StatsScreen stats={gameStats!} onReturnHome={handleReturnHome} />;
      default:
        return <HomeScreen onStartGame={handleStartGame} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white font-inter">
      {renderScreen()}
    </div>
  );
}

export default App;