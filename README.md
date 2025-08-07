# Keystroke-Velocity
# Blindfold Typing Challenge ⌨️

A minimalist and modern typing game designed for the ACES Club, with a unique "blindfold" twist. This web application provides a fun and challenging way to improve typing speed and accuracy.

## Features ✨

**Clean & Responsive UI**: A sleek, dark-themed interface with animated gradient text effects and full-screen video backgrounds.

**Blindfold Mechanics**: A classic typing challenge where typed characters are overlaid on the original text, allowing for real-time error correction.

**Timed Challenges**: Users face a 30-second timer to complete a randomly selected sentence. ⏳

**Performance Metrics**: After each round, a detailed stats page displays:
- **WPM (Words Per Minute)**: Your typing speed. 🚀
- **Accuracy**: A circular progress bar showing the percentage of correct keystrokes. 🎯
- **Unique Animal Ranks**: A fun, non-offensive animal name is awarded based on your performance. 🐾

**Seamless Navigation**: Easy transitions between a loading screen, a home page, the challenge, and the stats page. ➡️

**ACES Branding**: Features ACES and MIT ADT 2025 logos with animated backgrounds throughout the application.

## Getting Started 💻

To run this project locally:

```bash
git clone https://github.com/shouryashah05/Keystroke-Velocity.git
cd Keystroke-Velocity
npm install
npm run dev
```

Then open your browser and navigate to `http://localhost:5173`

## Technologies Used

- **React** + **TypeScript**
- **Vite** (Build tool)
- **Tailwind CSS** (Styling)
- **Lucide React** (Icons)

## How to Play

1. Click "Start" or press ENTER on the home screen
2. Start typing the displayed text as accurately as possible
3. Watch your real-time stats (correct/incorrect characters, accuracy)
4. Complete the challenge within 30 seconds
5. View your detailed performance statistics and animal ranking!

## Customization

- **Timer Duration**: Modify the timer in `TypingChallenge.tsx` (line 15)
- **Sentence Length**: Edit sentences in `src/data/sentences.ts`
- **Animal Rankings**: Customize rankings in `src/utils/rankings.ts`

## Animated Loading

The application features a beautiful animated video background loading, gradient text effects, and a clean, modern interface perfect for an engaging typing experience.

---

*Built with ❤️ for ACES Club*

# License

[MIT License](https://opensource.org/license/MIT)

Copyright (c) 2024 Shourya Shah 


Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

---
