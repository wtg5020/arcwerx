# ArcWerx - Air Force Research Laboratory

A retro 80s F-16 HUD-inspired website for ArcWerx, built with React, TypeScript, and Vite.

## Features

- **Retro F-16 HUD Aesthetic**: Black and phosphor green color scheme inspired by 80s Air Force heads-up displays
- **CRT Effects**: Authentic scanlines, screen flicker, and phosphor glow effects
- **HUD Elements**: Corner brackets, crosshairs, targeting reticles, and grid overlays
- **Lightning Fast**: Built with Vite for instant dev server and optimized production builds
- **Responsive**: Works on desktop and mobile devices
- **TypeScript**: Full type safety

## Tech Stack

- React 19
- TypeScript 5
- Vite 7
- CSS (no framework needed - pure retro styling)

## Development

```bash
# Install dependencies
npm install

# Start dev server (with hot reload)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint code
npm run lint
```

## Deployment

The site builds to a static `/dist` folder and can be deployed to any static hosting service:

- GitHub Pages
- Netlify
- Vercel
- AWS S3 + CloudFront
- Any DoD-approved hosting platform

## Customization

All HUD colors and effects can be customized in `src/App.css`:

```css
:root {
  --green-primary: #00ff00;  /* Main HUD color */
  --green-glow: #00ff0080;   /* Glow effect color */
  --green-dim: #00aa00;      /* Dimmed text color */
  --black: #000000;          /* Background */
  --scan-opacity: 0.15;      /* Scanline intensity */
}
```

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
