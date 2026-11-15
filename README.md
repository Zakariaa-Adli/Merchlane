# Merchlane

Merchlane is a clean, responsive React product catalog that fetches and displays products from the [Fake Store API](https://fakestoreapi.com/).

## Features

- Fetches live product data from the Fake Store API
- Displays products in a responsive, accessible table
- Shows loading and error states for a smoother user experience
- Formats pricing and rating information for readability
- Built with React and Bootstrap for a lightweight, maintainable UI

## Technologies Used

- React 19
- Create React App (`react-scripts`)
- Bootstrap 5
- JavaScript (ES6+)
- Fake Store API

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (LTS recommended)
- npm (included with Node.js)

### Installation

```bash
git clone <repository-url>
cd merchlane
npm install
```

### Run Locally

```bash
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Scripts

- `npm start` — Runs the app in development mode
- `npm test` — Launches the test runner in watch mode
- `npm run build` — Builds the app for production into the `build` folder

## Project Structure

```text
public/          Static assets and HTML template
src/
  index.js       Application entry point
  index.css      Global styles
  store/
    ProductList.jsx  Product catalog component and data fetching logic
```

## Notes

- This project uses client-side data fetching from a public API. Network access is required to load products.
- No screenshots are included in this repository.
