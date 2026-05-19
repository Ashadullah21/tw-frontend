/**
 * Utility functions for the TW Downloader frontend.
 */

/**
 * Accepted Twitter/X URL patterns.
 * Matches:
 *   https://twitter.com/user/status/123456789
 *   https://x.com/user/status/123456789
 *   http://www.twitter.com/...
 */
const TWITTER_URL_PATTERN =
  /^https?:\/\/(www\.)?(twitter\.com|x\.com)\/.+/i;

/**
 * Validates that a string is a recognisable Twitter or X video URL.
 *
 * @param url  Raw string pasted by the user.
 * @returns    `true` when the URL is acceptable; `false` otherwise.
 */
export function isValidTwitterUrl(url: string): boolean {
  if (!url || typeof url !== 'string') return false;
  return TWITTER_URL_PATTERN.test(url.trim());
}

/**
 * Truncates a string to `maxLength` characters, appending "…" if cut.
 *
 * @param text       The source string.
 * @param maxLength  Maximum number of characters (default 120).
 */
export function truncate(text: string, maxLength = 120): string {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength).trimEnd() + '…';
}

/**
 * Derives a safe filename from the video title and quality label.
 *
 * @param title    Video title string from the API.
 * @param quality  Quality label, e.g. "720p".
 * @param ext      File extension, e.g. "mp4".
 */
export function buildFilename(title: string, quality: string, ext: string): string {
  const safeName = title
    .replace(/[^\w\s-]/g, '')   // strip special chars
    .replace(/\s+/g, '_')       // spaces → underscores
    .toLowerCase()
    .slice(0, 60);

  return `${safeName}_${quality}.${ext}`;
}
