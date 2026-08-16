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

This project is configured for GitHub Pages with the repository path `/vibes`.

### 1) Install dependencies

```bash
npm install
```

### 2) Build for GitHub Pages

```bash
npm run build:gh-pages
```

This creates the production output in `dist/vibes/browser` and sets the base path to `/vibes/`.

### 3) Push the project to GitHub

```bash
git add .
git commit -m "Prepare GitHub Pages deployment"
git push origin dev
```

### 4) Enable GitHub Pages in the repository

In GitHub:

1. Open the repository
2. Go to Settings
3. Open Pages
4. Set Source to GitHub Actions
5. Save the settings

### 5) Workflow automation

The repository already includes the Pages workflow file at:

```bash
.github/workflows/deploy-pages.yml
```

This workflow does the following automatically on push to the `dev` branch:

- installs Node.js
- runs `npm ci`
- runs `npm run build:gh-pages`
- uploads the build artifact
- deploys it to GitHub Pages

### 6) Live URL

After deployment finishes, the app is available at:

```text
https://monishbairagi.github.io/vibes
```

This app does not require a backend; all visuals and audio are served as static assets from the `assets` folder.
