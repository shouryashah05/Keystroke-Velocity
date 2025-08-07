import { AnimalRank } from '../types/game';

const animalRanks: AnimalRank[] = [
  {
    name: "Sleepy Sloth",
    emoji: "🦥",
    description: "Taking it nice and slow, just like a peaceful sloth!",
    minWpm: 0
  },
  {
    name: "Steady Snail",
    emoji: "🐌",
    description: "Slow and steady wins the race!",
    minWpm: 5
  },
  {
    name: "Gentle Turtle",
    emoji: "🐢",
    description: "Methodical and persistent, making good progress!",
    minWpm: 10
  },
  {
    name: "Playful Panda",
    emoji: "🐼",
    description: "Finding the balance between fun and focus!",
    minWpm: 20
  },
  {
    name: "Swift Rabbit",
    emoji: "🐰",
    description: "Quick and nimble, hopping through the text!",
    minWpm: 30
  },
  {
    name: "Clever Fox",
    emoji: "🦊",
    description: "Smart and strategic with your typing approach!",
    minWpm: 40
  },
  {
    name: "Wild Wolf",
    emoji: "🐺",
    description: "Fierce and focused, hunting down each word!",
    minWpm: 50
  },
  {
    name: "Soaring Eagle",
    emoji: "🦅",
    description: "Flying high above the competition!",
    minWpm: 60
  },
  {
    name: "Lightning Cheetah",
    emoji: "🐆",
    description: "Blazing fast with incredible speed and precision!",
    minWpm: 70
  }
];

export const getAnimalRank = (wpm: number): AnimalRank => {
  // Find the highest rank that the WPM qualifies for
  let selectedRank = animalRanks[0]; // Default to lowest rank
  
  for (let i = animalRanks.length - 1; i >= 0; i--) {
    if (wpm >= animalRanks[i].minWpm) {
      selectedRank = animalRanks[i];
      break;
    }
  }
  
  return selectedRank;
};