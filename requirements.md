# Requirements

## 1. Project Overview

Create an Angular-based web application that provides a music-player experience where users can select different **vibes**. Each vibe has its own background image and collection of songs.

The application should be designed to support adding new vibes in the future without requiring major changes to the application structure.

## 2. Music Player

The application should display a music player over the selected vibe's background image.

The music player should:

* Be positioned slightly below the vertical center of the screen.
* Have rounded corners.
* Provide a **Play/Pause** control.
* Provide **Previous** and **Next** song controls.
* Provide **Mute/Unmute** functionality.
* Provide a **Volume** control.
* Display the currently playing song.
* Automatically use the songs associated with the currently selected vibe.
* Ensure that songs from one vibe are not played when another vibe is selected.

The overall player should have a clean, simple interface similar to an ordinary modern music player.

## 3. Vibe Selection

Users should be able to select different vibes from the application.

Initial vibes may include:

* **Durga Puja**
* **Truck Driver**

The application should be designed so that additional vibes can easily be added in the future.

When a user selects a vibe:

1. The corresponding background image should be displayed.
2. Only the songs belonging to that vibe should be available for playback.
3. The music player should update to use the selected vibe's songs.

## 4. Assets Structure

The project will contain an `assets` folder with the required images and songs.

Each vibe should have its own assets, including:

* Background image(s)
* Song/audio files

The application should use the asset structure to determine which images and songs belong to each vibe.

The architecture should make it straightforward to add a new vibe by adding its assets and corresponding configuration.

Example conceptual structure:

```text
assets/
├── vibes/
│   ├── durga-puja/
│   │   ├── images/
│   │   └── songs/
│   │
│   ├── truck-driver/
│   │   ├── images/
│   │   └── songs/
│   │
│   └── future-vibe/
│       ├── images/
│       └── songs/
```

## 5. Background Experience

The selected vibe's image should be used as the application's main background.

The background should provide a visually immersive experience while keeping the music-player controls clearly visible and usable.

## 6. Future Extensibility

The application should be structured so that new vibes can be added with minimal code changes.

Adding a new vibe should primarily involve:

* Adding the vibe's images.
* Adding the vibe's songs.
* Adding the vibe's configuration/metadata.

The core music-player functionality should remain reusable across all vibes.

## 7. Deployment

The application must be capable of being deployed as a static web application to **GitHub Pages** using the free GitHub Pages hosting service.

Requirements:

* No backend server should be required.
* All application assets should be served as static files.
* Angular routing/configuration should be compatible with GitHub Pages deployment.
* The project should include the necessary build/deployment configuration or documentation for GitHub Pages.

## 8. Technology

* **Frontend:** Angular
* **Application type:** Static web application
* **Hosting:** GitHub Pages
* **Audio:** Browser-supported audio playback
* **Assets:** Local files under the Angular `assets` directory
