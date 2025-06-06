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
2. Start the development server (for local testing):
   ```sh
   npm run dev
   ```
   This uses [live-server](https://www.npmjs.com/package/live-server) to serve the `public` directory.

3. Open your browser to the address shown (usually http://127.0.0.1:8080 or similar).

## Usage
- Click the **Draw a Card** button to reveal a random Tarot card.

## Deployment

- For production, deploy the `public` directory to Vercel.
- All static files (`index.html`, `styles.css`, `script.js`, and assets) should be in the `public` directory.
- No build step is required for static deployment.

## Troubleshooting
- **Card does not appear when you click the button:**
  - Make sure the image filenames in `public/assets/cards` match those listed in `public/script.js`.
  - Check the browser console for errors about missing images.
  - Ensure the server is running and you are accessing the correct URL.

## Project Structure
- `public/assets/cards/` — Tarot card images
- `public/index.html` — Main web page
- `public/script.js` — Card drawing logic
- `public/styles.css` — Styles

## License
MIT