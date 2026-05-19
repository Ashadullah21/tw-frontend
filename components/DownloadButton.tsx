'use client';

import React from 'react';
import { Quality } from '@/types';
import { buildFilename } from '@/lib/utils';

interface DownloadButtonProps {
  quality: Quality;
  videoTitle: string;
}

/**
 * DownloadButton — Triggers a direct browser download via the CDN URL.
 *
 * The video file is NOT proxied through our server — the browser fetches
 * it directly from Twitter's CDN using a hidden <a> anchor with the
 * `download` attribute.
 */
export default function DownloadButton({ quality, videoTitle }: DownloadButtonProps) {
  const [status, setStatus] = React.useState<'idle' | 'downloading'>('idle');

  const handleDownload = () => {
    setStatus('downloading');

    // Build a clean filename from the title and quality
    const filename = buildFilename(videoTitle, quality.label, quality.ext);

    // Construct the backend download proxy URL to bypass CORS and force a download popup
    const baseUrl = process.env.NEXT_PUBLIC_API_URL || 'http://127.0.0.1:8000';
    const proxyUrl = `${baseUrl}/api/download?url=${encodeURIComponent(quality.url)}&title=${encodeURIComponent(filename)}`;

    // Create a temporary anchor and programmatically click it
    const anchor = document.createElement('a');
    anchor.href = proxyUrl;
    anchor.download = filename;
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);

    // Reset status after a short delay
    setTimeout(() => setStatus('idle'), 2000);
  };

  const isDownloading = status === 'downloading';

  return (
    <button
      id={`download-btn-${quality.label}`}
      type="button"
      className={`btn download-btn ${isDownloading ? 'btn-success' : 'btn-outline-primary'}`}
      onClick={handleDownload}
      disabled={isDownloading}
      aria-label={`Download ${quality.label} video`}
    >
      {isDownloading ? (
        <>
          <span
            className="spinner-border spinner-border-sm me-1"
            role="status"
            aria-hidden="true"
          />
          Starting…
        </>
      ) : (
        <>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            fill="currentColor"
            className="bi bi-download me-1"
            viewBox="0 0 16 16"
            aria-hidden="true"
          >
            <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z" />
            <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z" />
          </svg>
          {quality.label} · {quality.ext.toUpperCase()}
        </>
      )}
    </button>
  );
}
