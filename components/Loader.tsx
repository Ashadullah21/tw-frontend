'use client';

/**
 * Loader — Animated loading state while yt-dlp extracts video info.
 * Shown between form submission and API response.
 */
export default function Loader() {
  return (
    <div
      className="loader-container animate-fade-in"
      role="status"
      aria-live="polite"
      aria-label="Extracting video information, please wait"
    >
      {/* Pulsing rings animation */}
      <div className="loader-rings" aria-hidden="true">
        <div className="loader-ring loader-ring-1" />
        <div className="loader-ring loader-ring-2" />
        <div className="loader-ring loader-ring-3" />

        {/* X / Twitter icon in center */}
        <div className="loader-icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.741l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
          </svg>
        </div>
      </div>

      <p className="loader-text mt-4 mb-1">Extracting video information…</p>
      <p className="loader-subtext">
        This may take a few seconds while we fetch the available qualities.
      </p>

      {/* Progress bar */}
      <div className="loader-progress mt-3" aria-hidden="true">
        <div className="loader-progress-bar" />
      </div>
    </div>
  );
}
