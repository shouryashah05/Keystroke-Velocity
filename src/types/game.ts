export interface GameStats {
  wpm: number;
  accuracy: number;
  timeElapsed: number;
  correctChars: number;
  totalChars: number;
  sentenceCompleted: boolean;
}

export interface AnimalRank {
  name: string;
  emoji: string;
  description: string;
  minWpm: number;
}