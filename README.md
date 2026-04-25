# Currency Converter

A small React + Vite app for converting between currencies using live exchange rates.

## Features

- Convert an amount from one currency to another
- Swap the source and target currencies with one click
- Fetch current rates from the public currency API used by the app
- Responsive layout with a full-screen background image

## Tech Stack

- React 19
- Vite
- Tailwind CSS 4
- ESLint

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

Run lint checks:

```bash
npm run lint
```

## How It Works

The app loads exchange-rate data from the CDN endpoint used in `src/hooks/useCurrencyInfo.js`, then uses those rates to calculate the converted value in the UI.

## Project Structure

- `src/App.jsx` - main converter UI and swap logic
- `src/components/InputBox.jsx` - reusable currency input field
- `src/hooks/useCurrencyInfo.js` - fetches exchange rates for a selected currency
- `src/index.css` - global styles

## Notes

- The app expects internet access to fetch live rates.
- Currency codes are returned in lowercase from the API, so the interface uses lowercase values internally.
