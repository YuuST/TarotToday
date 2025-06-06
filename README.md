# TarotToday

A simple web app to draw a random Tarot card and reveal your fortune.

## Features
- Draw a random Tarot card with a single click
- Beautiful card images and mystical UI
- Responsive and easy to use

## Setup
1. Install dependencies (requires Node.js):
   ```sh
   npm install
   ```
2. Start the development server:
   ```sh
   npm run dev
   ```
3. Open your browser to the address shown (usually http://127.0.0.1:8080 or similar).

## Usage
- Click the **Draw a Card** button to reveal a random Tarot card.

## Troubleshooting
- **Card does not appear when you click the button:**
  - Make sure the image filenames in `src/assets/cards` match those listed in `src/frontpage/script.js`.
  - Check the browser console for errors about missing images.
  - Ensure the server is running and you are accessing the correct URL.

## Project Structure
- `src/assets/cards/` — Tarot card images
- `src/frontpage/index.html` — Main web page
- `src/frontpage/script.js` — Card drawing logic
- `src/frontpage/styles.css` — Styles

## License
MIT