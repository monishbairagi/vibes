import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { VIBE_CONFIGS, VibeConfig, VibeSong } from './vibe-data';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit, OnDestroy {
  vibes = VIBE_CONFIGS;
  selectedVibe: VibeConfig = this.vibes[0];
  activeSongIndex = 0;
  isPlaying = false;
  isMuted = false;
  currentVolume = 0.7;
  currentTime = 0;
  duration = 0;
  private audio: HTMLAudioElement | null = null;

  ngOnInit(): void {
    this.loadVibe(this.selectedVibe.id);
    this.ensureBackgroundVideoState();
  }

  ngOnDestroy(): void {
    this.destroyAudio();
  }

  loadVibe(vibeId: string): void {
    const vibe = this.vibes.find((item) => item.id === vibeId) ?? this.vibes[0];
    this.selectedVibe = vibe;
    this.activeSongIndex = 0;
    this.isPlaying = false;
    this.currentTime = 0;
    this.duration = 0;
    this.destroyAudio();
    setTimeout(() => this.ensureBackgroundVideoState(), 0);
  }

  selectVibe(vibeId: string): void {
    this.loadVibe(vibeId);
  }

  get currentSong(): VibeSong {
    return this.selectedVibe.songs[this.activeSongIndex] ?? this.selectedVibe.songs[0];
  }

  get currentBackground(): string {
    const backgrounds = this.selectedVibe.backgrounds;
    const index = this.activeSongIndex % backgrounds.length;
    return backgrounds[index] ?? backgrounds[0];
  }

  get backgroundStyle(): string {
    return `url("${this.assetUrl(`images/${this.currentBackground}`)}")`;
  }

  get isVideoBackground(): boolean {
    return this.currentBackground.toLowerCase().endsWith('.mp4');
  }

  get volumePercent(): number {
    return Math.round(this.currentVolume * 100);
  }

  private ensureBackgroundVideoState(): void {
    const video = document.querySelector('.background-video') as HTMLVideoElement | null;
    if (!video) {
      return;
    }

    video.muted = true;
    video.volume = 0;
    video.loop = true;
    video.autoplay = true;
    video.setAttribute('muted', 'true');
    video.setAttribute('playsinline', 'true');
    video.setAttribute('loop', 'true');
    video.play().catch(() => undefined);
  }

  assetUrl(relativePath: string): string {
    const normalized = relativePath
      .split('/')
      .map((segment) => encodeURIComponent(segment))
      .join('/');

    return `./${this.selectedVibe.assetFolder}/${normalized}`;
  }

  private createAudioElement(src: string): HTMLAudioElement {
    const audio = new Audio(src);
    audio.volume = this.currentVolume;
    audio.muted = this.isMuted;

    audio.addEventListener('loadedmetadata', () => {
      this.duration = audio.duration || 0;
    });

    audio.addEventListener('timeupdate', () => {
      this.currentTime = audio.currentTime || 0;
    });

    audio.addEventListener('ended', () => {
      this.nextTrack(true);
    });

    audio.addEventListener('play', () => {
      this.isPlaying = true;
    });

    audio.addEventListener('pause', () => {
      this.isPlaying = false;
    });

    return audio;
  }

  private destroyAudio(): void {
    this.audio?.pause();
    this.audio = null;
  }

  private songUrl(song: VibeSong): string {
    return this.assetUrl(`songs/${song.fileName}`);
  }

  togglePlay(): void {
    if (!this.audio) {
      this.audio = this.createAudioElement(this.songUrl(this.currentSong));
    }

    if (this.isPlaying) {
      this.audio.pause();
      return;
    }

    this.playCurrentSong();
  }

  private playCurrentSong(): void {
    if (!this.audio) {
      this.audio = this.createAudioElement(this.songUrl(this.currentSong));
    }

    const playPromise = this.audio.play();
    if (playPromise) {
      playPromise.catch(() => {
        this.isPlaying = false;
      });
    }
  }

  previousTrack(autoPlay = false): void {
    this.activeSongIndex = this.activeSongIndex === 0
      ? this.selectedVibe.songs.length - 1
      : this.activeSongIndex - 1;
    this.resetTrack();

    if (autoPlay || this.isPlaying) {
      this.audio = this.createAudioElement(this.songUrl(this.currentSong));
      this.playCurrentSong();
    }
  }

  nextTrack(autoPlay = false): void {
    this.activeSongIndex = this.activeSongIndex >= this.selectedVibe.songs.length - 1
      ? 0
      : this.activeSongIndex + 1;
    this.resetTrack();

    if (autoPlay || this.isPlaying) {
      this.audio = this.createAudioElement(this.songUrl(this.currentSong));
      this.playCurrentSong();
    }
  }

  private resetTrack(): void {
    this.destroyAudio();
    this.currentTime = 0;
    this.duration = 0;
    this.isPlaying = false;
  }

  toggleMute(): void {
    this.isMuted = !this.isMuted;
    if (this.audio) {
      this.audio.muted = this.isMuted;
    }
  }

  onVolumeChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.currentVolume = Number(input.value) / 100;
    if (this.audio) {
      this.audio.volume = this.currentVolume;
    }
    this.isMuted = this.currentVolume === 0;
    if (this.audio) {
      this.audio.muted = this.isMuted;
    }
  }

  seekSong(event: Event): void {
    const input = event.target as HTMLInputElement;
    const value = Number(input.value);
    if (this.audio) {
      this.audio.currentTime = value;
      this.currentTime = value;
    }
  }

  formatTime(seconds: number): string {
    if (!Number.isFinite(seconds) || seconds < 0) {
      return '0:00';
    }
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  }
}
