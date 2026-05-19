// ─── TypeScript types shared across the application ─────────────────────────

/**
 * A single downloadable quality option returned by the backend.
 */
export interface Quality {
  /** Human-readable label, e.g. "720p" */
  label: string;
  /** Direct CDN URL for the video file */
  url: string;
  /** File extension, typically "mp4" */
  ext: string;
}

/**
 * The successful video info response from POST /api/extract.
 */
export interface VideoInfo {
  title: string;
  thumbnail: string;
  qualities: Quality[];
}

/**
 * Error response body returned by the Laravel backend.
 */
export interface ApiError {
  error: string;
  message: string;
}

/**
 * Union type for all possible API responses.
 */
export type ApiResponse = VideoInfo | ApiError;

/**
 * Possible UI states for the main page.
 */
export type AppState = 'idle' | 'loading' | 'success' | 'error';
