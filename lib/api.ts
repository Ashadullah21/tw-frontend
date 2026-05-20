import axios, { AxiosError } from 'axios';
import { VideoInfo, ApiError } from '@/types';

/**
 * Axios instance pre-configured to call the Laravel backend.
 * The base URL is injected at build time via NEXT_PUBLIC_API_URL.
 */
let apiBaseUrl = process.env.NEXT_PUBLIC_API_URL || '';
if (typeof window !== 'undefined' && window.location.protocol === 'https:') {
  apiBaseUrl = apiBaseUrl.replace(/^http:/i, 'https:');
}

const apiClient = axios.create({
  baseURL: apiBaseUrl,
  timeout: 60_000, // yt-dlp can be slow on first run — allow 60 s
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});

/**
 * POST /api/extract
 *
 * Sends the Twitter/X URL to the Laravel backend, which runs yt-dlp
 * and returns structured video metadata.
 *
 * @param url  A validated twitter.com or x.com URL.
 * @returns    VideoInfo on success.
 * @throws     Error with a user-friendly message on failure.
 */
export async function extractVideo(url: string): Promise<VideoInfo> {
  try {
    const response = await apiClient.post<VideoInfo>('/api/extract', { url });
    return response.data;
  } catch (err) {
    const axiosErr = err as AxiosError<ApiError>;

    // Extract the backend error message when available
    const backendMessage =
      axiosErr.response?.data?.message ??
      axiosErr.response?.data?.error;

    if (backendMessage) {
      throw new Error(backendMessage);
    }

    // Network-level error (no response received)
    if (axiosErr.request) {
      throw new Error(
        'Could not reach the server. Please check your connection and try again.'
      );
    }

    throw new Error('An unexpected error occurred. Please try again.');
  }
}

/**
 * Sends a lightweight GET request to the backend health endpoint
 * to trigger container startup/warming on Render.
 */
export async function warmupBackend(): Promise<void> {
  try {
    await apiClient.get('/api/health');
  } catch (err) {
    // Silently ignore warmup errors (does not affect UX)
  }
}

