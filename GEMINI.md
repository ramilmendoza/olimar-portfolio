## Project Overview

This is a modern, responsive portfolio website built with React, Vite, and Tailwind CSS. It showcases professional experience, projects, and skills, featuring smooth animations and interactive 3D elements. The project is structured as a single-page application with multiple sections.

### Key Technologies

*   **Frontend:** React, Vite, Tailwind CSS
*   **3D Graphics:** Three.js (via `@react-three/fiber` and `@react-three/drei`)
*   **Animations:** Framer Motion
*   **Email:** EmailJS
*   **Routing:** React Router

### Architecture

The application is component-based, with a main `App.jsx` component that composes the different sections of the portfolio. The `src/components` directory contains the individual React components for each section (e.g., `About.jsx`, `Contact.jsx`, `Experience.jsx`). The `src/assets` directory holds static assets like images and icons. The `public` directory contains the 3D models and other public assets.

## Building and Running

### Prerequisites

*   Node.js and npm (or yarn)

### Development

To run the project in a development environment:

1.  **Install dependencies:**
    ```bash
    npm install
    ```
2.  **Run the development server:**
    ```bash
    npm run dev
    ```
3.  **Open in browser:**
    Visit `http://localhost:5173` (or the port specified in the output of `npm run dev`).

### Production Build

To create a production-ready build:

1.  **Install dependencies:**
    ```bash
    npm install
    ```
2.  **Build the project:**
    ```bash
    npm run build
    ```
The output will be in the `dist` directory.

### Linting

To check the code for linting errors:

```bash
npm run lint
```

## Development Conventions

*   **Styling:** The project uses Tailwind CSS for styling. Utility classes are preferred over custom CSS.
*   **Components:** Components are written in JSX (`.jsx`) and are located in the `src/components` directory.
*   **State Management:** Component-level state is managed with React hooks.
*   **Code Quality:** ESLint is used for static code analysis. The configuration can be found in `.eslintrc.cjs`.
