# 🎯 Guess My Number

> A browser-based number guessing game built with Vanilla JS — refactored for a 2026 portfolio with Glassmorphism UI, clean state management, and accessibility built in.

![Game Preview](./assets/preview.png)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

---

## 📖 Project Overview

**Guess My Number** is a lightweight, single-page interactive game where the player tries to guess a randomly generated number between 1 and 20. Each wrong guess deducts from the score; the player's goal is to guess correctly with the highest score remaining.

This project was originally built as a JavaScript learning exercise and has since been fully refactored to demonstrate modern front-end engineering practices: clean state management, DRY code architecture, Glassmorphism UI design, ARIA accessibility, and a responsive layout.

---

## ✨ Features

- **Single-source state object** — all game data lives in one `state` object, making it easy to debug and extend
- **Win streak tracker** — persists across rounds in the same session
- **Keyboard support** — press `Enter` to submit a guess
- **Input validation** — guards against empty, out-of-range, and non-numeric entries
- **Animated feedback** — shake on wrong input, pop on win, floating number bubble
- **Winner / Loser mode** — full-page ambient background shift on game outcome
- **Accessible markup** — semantic HTML, ARIA live regions, and descriptive labels
- **Fully responsive** — works on mobile, tablet, and desktop

---

## 🛠 Tech Stack

| Layer      | Technology                  |
|------------|-----------------------------|
| Markup     | HTML5 (semantic, accessible) |
| Styling    | CSS3 (custom properties, glassmorphism, grid, clamp) |
| Logic      | Vanilla JavaScript (ES6+)   |
| Fonts      | Google Fonts — Syne + DM Mono |
| Build tool | None — zero dependencies    |

---

## 📁 Project Structure

```
guess-my-number/
├── src/
│   ├── index.html      # Semantic HTML shell
│   ├── style.css       # Design system + component styles
│   └── script.js       # Game state + event logic
├── assets/
│   ├── preview.png     # Screenshot for README
│   └── favicon.svg     # Inline SVG favicon
├── .prettierrc         # Code formatting config
└── README.md
```

---

## 🚀 How to Run

No build step or package manager required.

**Option 1 — Open directly:**
```bash
# Clone the repo
git clone https://github.com/your-username/guess-my-number.git

# Open in browser
open src/index.html
```

**Option 2 — Live server (recommended for development):**
```bash
# Using VS Code Live Server extension, or:
npx serve src
# Then visit http://localhost:3000
```

---

## 🎮 How to Play

1. A secret number between **1 and 20** is generated when the page loads.
2. Type your guess into the input field and press **Check** (or `Enter`).
3. The game tells you if your guess is too high, too low, or correct.
4. Each wrong guess costs **1 point** from your starting score of 20.
5. Guess correctly before reaching 0 to win. Beat your high score!
6. Press **↺ Again** to start a new round with the score reset.

---

## 🧠 Key Engineering Decisions

### Centralized State
All mutable values (`secretNumber`, `score`, `highscore`, `streak`, `gameOver`) live inside a single `state` object. This avoids scattered `let` variables and makes future persistence (e.g., `localStorage`) trivial to add.

### DRY Utilities
Helper functions like `$()`, `setText()`, `displayMessage()`, `shakeElement()`, and `pulseElement()` eliminate repetitive DOM queries and allow consistent feedback across the game.

### Guard Clauses
Each game handler (win, wrong, loss) is isolated into its own function with a `gameOver` guard at the entry point — preventing double-submission bugs.

### CSS Custom Properties (Design Tokens)
All colors, radii, fonts, and timing values are defined in `:root` as CSS variables, making theme changes a one-line edit.

---

## 📄 License

MIT © 2026 Your Name
