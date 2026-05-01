# Text Translator

A React + Vite web app for translating text into multiple languages and generating random strings.

## Features

- Translate English text into many target languages using the RapidAPI Google Translator endpoint
- Live translation requests with a loading indicator
- Built with React, Vite, Tailwind CSS, and Axios
- Includes a second tool: a configurable string generator with optional numbers and symbols
- Client-side routing using `react-router-dom`

## Project Structure

- `src/App.jsx` — main router and layout
- `src/components/Translator.jsx` — translation interface and API integration
- `src/components/StringGenerator.jsx` — random string generator tool
- `src/index.css` — app styling

## Getting Started

### Prerequisites

- Node.js 18+ recommended
- npm (or a compatible package manager)

### Install dependencies

```bash
cd text_translator
npm install
```

### Run the development server

```bash
npm run dev
```

Then open the local Vite URL shown in the terminal.

## Usage

### Translator

1. Enter the text to translate in the first textarea.
2. Select the target language from the dropdown.
3. Click `Translate`.
4. The translated text appears in the second textarea.

### String Generator

1. Navigate to the `String Generator` page.
2. Adjust the string length slider.
3. Toggle `Numbers` and `Symbols` to include them.
4. The generator updates automatically.

## Scripts

- `npm run dev` — start the development server
- `npm run build` — create a production build
- `npm run preview` — preview the production build locally
- `npm run lint` — run ESLint checks

## Dependencies

- `react`
- `react-dom`
- `react-router-dom`
- `axios`
- `tailwindcss`
- `lucide-react`

## Dev Dependencies

- `vite`
- `@vitejs/plugin-react`
- `eslint`
- `@eslint/js`
- `eslint-plugin-react-hooks`
- `eslint-plugin-react-refresh`
- `tsx`

## Notes

- If API translation fails, the app shows an error message in the output textarea.
- The app is styled with Tailwind CSS utility classes and ships as a client-side React SPA.
