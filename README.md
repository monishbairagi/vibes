# Vibes

A static Angular music-player app that lets users switch between vibe collections such as Durga Puja and Truck Driver. Each vibe loads its own background and song set, and the player remains reusable for future additions.

## Local development

Run:

```bash
npm install
npm start
```

Then open the local Angular dev server in your browser.

## Production build

```bash
npm run build
```

The build output is generated in the `dist/vibes` folder.

## GitHub Pages deployment

1. Build the app with:
   ```bash
   npm run build
   ```
2. Publish the contents of `dist/vibes/browser` to the GitHub Pages branch or GitHub Pages action.
3. Use a relative base path, which is already configured in the app shell for static hosting.

This app does not require a backend; all visuals and audio are served as static assets from the `assets` folder.
# vibes
