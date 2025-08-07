import React, { useState, useEffect, useRef } from 'react';
import { Clock } from 'lucide-react';
import { sentences } from '../data/sentences';
import { GameStats } from '../types/game';

interface TypingChallengeProps {
  onGameComplete: (stats: GameStats) => void;
}

const TypingChallenge: React.FC<TypingChallengeProps> = ({ onGameComplete }) => {
  const [currentSentence, setCurrentSentence] = useState('');
  const [userInput, setUserInput] = useState('');
  const [timeLeft, setTimeLeft] = useState(30);
  const [gameStarted, setGameStarted] = useState(false);
  const [gameEnded, setGameEnded] = useState(false);
  const [correctChars, setCorrectChars] = useState(0);
  const [totalChars, setTotalChars] = useState(0);
  const [wordsTyped, setWordsTyped] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    // Select random sentence on mount
    const randomSentence = sentences[Math.floor(Math.random() * sentences.length)];
    setCurrentSentence(randomSentence);
  }, []);

  useEffect(() => {
    // Focus input on mount
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  useEffect(() => {
    // Start timer when user starts typing
    if (gameStarted && !gameEnded && timeLeft > 0) {
      const timer = setTimeout(() => {
        setTimeLeft(prev => prev - 1);
      }, 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft === 0 && !gameEnded) {
      endGame();
    }
  }, [timeLeft, gameStarted, gameEnded]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    
    if (!gameStarted) {
      setGameStarted(true);
    }

    if (gameEnded) return;

    // Check if user completed the sentence
    if (value === currentSentence) {
      endGame();
      return;
    }

    // Update user input
    setUserInput(value);

    // Calculate stats
    let correct = 0;
    for (let i = 0; i < value.length; i++) {
      if (i < currentSentence.length && value[i] === currentSentence[i]) {
        correct++;
      }
    }
    
    setCorrectChars(correct);
    setTotalChars(value.length);
    
    // Calculate words (approximate)
    const words = value.trim().split(/\s+/).filter(word => word.length > 0).length;
    setWordsTyped(words);
  };

  const endGame = () => {
    setGameEnded(true);
    const timeElapsed = 30 - timeLeft;
    const wpm = timeElapsed > 0 ? Math.round((wordsTyped / timeElapsed) * 60) : 0;
    const accuracy = totalChars > 0 ? Math.round((correctChars / totalChars) * 100) : 0;

    const stats: GameStats = {
      wpm,
      accuracy,
      timeElapsed,
      correctChars,
      totalChars,
      sentenceCompleted: userInput === currentSentence
    };

    setTimeout(() => onGameComplete(stats), 1000);
  };

  const renderText = () => {
    return currentSentence.split('').map((char, index) => {
      let className = 'text-gray-400';
      
      if (index < userInput.length) {
        if (userInput[index] === char) {
          className = 'text-green-400 bg-green-400/20';
        } else {
          className = 'text-red-400 bg-red-400/20';
        }
      } else if (index === userInput.length) {
        className = 'text-gray-400 bg-blue-500/30 animate-pulse';
      }

      return (
        <span key={index} className={className}>
          {char}
        </span>
      );
    });
  };

  return (
    <div className="min-h-screen bg-black">
      {/* Header */}
      <header className="bg-black border-b border-gray-700 p-4">
        <div className="flex justify-between items-center max-w-6xl mx-auto">
          <div className="flex-1"></div>
          
          {/* Centered ACES Logo */}
          <div className="flex justify-center">
            <img 
              src="/images/ACES_LOGO-.png" 
              alt="ACES Logo" 
              className="h-10 object-contain"
            />
          </div>
          
          <div className="flex-1 flex justify-end items-center">
            <div className="flex items-center text-white">
              <Clock className="w-5 h-5 mr-2" />
              <span className={`text-2xl font-mono ${timeLeft <= 10 ? 'text-red-400 animate-pulse' : 'text-white'}`}>
                {timeLeft}s
              </span>
            </div>
          </div>
        </div>
      </header>

      {/* Main challenge area */}
      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold mb-4 leading-tight">
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-blue-600 bg-clip-text text-transparent animate-gradient-x bg-300% hover:scale-105 transition-transform duration-300">
              Type the following text:
            </span>
          </h1>
          {!gameStarted && (
            <p className="text-gray-400">Start typing to begin the 30-second challenge</p>
          )}
        </div>

        {/* Text display */}
        <div className="bg-gray-800 rounded-lg p-8 mb-8">
          <div className="text-2xl leading-relaxed font-mono text-left">
            {renderText()}
          </div>
        </div>

        {/* Input field (hidden but functional) */}
        <input
          ref={inputRef}
          type="text"
          value={userInput}
          onChange={handleInputChange}
          className="w-full p-4 text-xl bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-blue-500"
          placeholder="Start typing here..."
          disabled={gameEnded}
          autoComplete="off"
          spellCheck={false}
        />

        {/* Live stats */}
        <div className="flex justify-center space-x-8 mt-8 text-center">
          <div className="bg-gray-800 px-6 py-4 rounded-lg">
            <div className="text-2xl font-bold text-green-400">{correctChars}</div>
            <div className="text-sm text-gray-400">Correct</div>
          </div>
          <div className="bg-gray-800 px-6 py-4 rounded-lg">
            <div className="text-2xl font-bold text-red-400">{totalChars - correctChars}</div>
            <div className="text-sm text-gray-400">Incorrect</div>
          </div>
          <div className="bg-gray-800 px-6 py-4 rounded-lg">
            <div className="text-2xl font-bold text-blue-400">
              {totalChars > 0 ? Math.round((correctChars / totalChars) * 100) : 0}%
            </div>
            <div className="text-sm text-gray-400">Accuracy</div>
          </div>
        </div>

        {gameEnded && (
          <div className="text-center mt-8">
            <p className="text-xl text-green-400 font-semibold">Challenge Complete!</p>
            <p className="text-gray-400">Calculating your results...</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default TypingChallenge;