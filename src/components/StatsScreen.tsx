import React from 'react';
import { Home } from 'lucide-react';
import { GameStats } from '../types/game';
import { getAnimalRank } from '../utils/rankings';
import CircularProgress from './CircularProgress';

interface StatsScreenProps {
  stats: GameStats;
  onReturnHome: () => void;
}

const StatsScreen: React.FC<StatsScreenProps> = ({ stats, onReturnHome }) => {
  const animalRank = getAnimalRank(stats.wpm);

  return (
    <div className="min-h-screen bg-black py-8">
      {/* Header with ACES Logo */}
      <header className="bg-black p-4">
        <div className="flex justify-center">
          <img 
            src="/images/ACES_LOGO-.png" 
            alt="ACES Logo" 
            className="h-10 object-contain"
          />
        </div>
      </header>

      <div className="flex items-center justify-center px-4 pb-8">
        <div className="max-w-2xl w-full">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 leading-tight">
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-blue-600 bg-clip-text text-transparent animate-gradient-x bg-300% hover:scale-105 transition-transform duration-300">
              Challenge Complete!
            </span>
          </h1>
          <p className="text-gray-400 text-lg">Here are your results</p>
        </div>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Accuracy */}
          <div className="bg-gray-800 rounded-lg p-8 text-center">
            <h3 className="text-xl font-semibold text-white mb-6">Accuracy</h3>
            <CircularProgress percentage={stats.accuracy} />
            <p className="text-3xl font-bold text-green-400 mt-4">{stats.accuracy}%</p>
          </div>

          {/* WPM */}
          <div className="bg-gray-800 rounded-lg p-8 text-center">
            <h3 className="text-xl font-semibold text-white mb-6">Words Per Minute</h3>
            <div className="w-32 h-32 mx-auto bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mb-4">
              <span className="text-4xl font-bold text-white">{stats.wpm}</span>
            </div>
            <p className="text-lg text-blue-400 font-semibold">WPM</p>
          </div>
        </div>

        {/* Animal Rank */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-8 text-center mb-8">
          <h3 className="text-2xl font-bold text-white mb-4">Your Typing Spirit Animal</h3>
          <div className="text-6xl mb-4">{animalRank.emoji}</div>
          <h2 className="text-3xl font-bold text-white mb-2">{animalRank.name}</h2>
          <p className="text-blue-100 text-lg">{animalRank.description}</p>
        </div>

        {/* Additional Stats */}
        <div className="grid grid-cols-3 gap-4 mb-8">
          <div className="bg-gray-800 rounded-lg p-4 text-center">
            <p className="text-2xl font-bold text-green-400">{stats.correctChars}</p>
            <p className="text-sm text-gray-400">Correct Characters</p>
          </div>
          <div className="bg-gray-800 rounded-lg p-4 text-center">
            <p className="text-2xl font-bold text-blue-400">{stats.timeElapsed}s</p>
            <p className="text-sm text-gray-400">Time Taken</p>
          </div>
          <div className="bg-gray-800 rounded-lg p-4 text-center">
            <p className="text-2xl font-bold text-purple-400">{stats.totalChars}</p>
            <p className="text-sm text-gray-400">Total Characters</p>
          </div>
        </div>

        {/* Return Home Button */}
        <div className="text-center">
          <button
            onClick={onReturnHome}
            className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center mx-auto"
          >
            <Home className="w-5 h-5 mr-2" />
            Back to Home Page
          </button>
        </div>
        </div>
      </div>
    </div>
  );
};

export default StatsScreen;