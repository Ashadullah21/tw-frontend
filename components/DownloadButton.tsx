'use client';

import React from 'react';
import { Quality } from '@/types';
import { buildFilename } from '@/lib/utils';

interface DownloadButtonProps {
  quality: Quality;
  videoTitle: string;
  format?: 'mp4' | 'mp3';
}

/**
 * DownloadButton — Triggers a direct browser download via our stream proxy.
 */
export default function DownloadButton({ quality, videoTitle, format = 'mp4' }: DownloadButtonProps) {
  const [status, setStatus] = React.useState<'idle' | 'downloading'>('idle');

  const handleDownload = () => {
    setStatus('downloading');

    // Build a clean filename from the title and quality/format
    const filename = format === 'mp3'
      ? buildFilename(videoTitle, 'audio', 'mp3')
      : buildFilename(videoTitle, quality.label, quality.ext);

    // Construct the backend download proxy URL to bypass CORS and force a download popup
    let baseUrl = process.env.NEXT_PUBLIC_API_URL || 'http://127.0.0.1:8000';
    if (typeof window !== 'undefined' && window.location.protocol === 'https:') {
      baseUrl = baseUrl.replace(/^http:/i, 'https:');
    }
    
    let proxyUrl = `${baseUrl}/api/download?url=${encodeURIComponent(quality.url)}&title=${encodeURIComponent(filename)}`;
    if (format === 'mp3') {
      proxyUrl += `&format=mp3`;
    }

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
      className={`btn download-btn ${isDownloading ? 'btn-success' : format === 'mp3' ? 'btn-mp3' : 'btn-outline-primary'}`}
      onClick={handleDownload}
      disabled={isDownloading}
      aria-label={format === 'mp3' ? 'Download MP3 audio' : `Download ${quality.label} video`}
    >
      {isDownloading ? (
        <>
          <span
            className="spinner-border spinner-border-sm me-1"
            role="status"
            aria-hidden="true"
          />
          Transcoding…
        </>
      ) : (
        <>
          {format === 'mp3' ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              fill="currentColor"
              className="bi bi-music-note-beamed me-1"
              viewBox="0 0 16 16"
              aria-hidden="true"
            >
              <path d="M6 13c0 1.105-1.12 2-2.5 2S1 14.105 1 13s1.12-2 2.5-2 2.5.895 2.5 2zm9-2c0 1.105-1.12 2-2.5 2S10 12.105 10 11s1.12-2 2.5-2 2.5.895 2.5 2z"/>
              <path fillRule="evenodd" d="M14 11V2h1v9h-1zM6 3v10H5V3h1z"/>
              <path d="M5 2.905a1 1 0 0 1 .9-.975l8-1.22A1 1 0 0 1 15 1.705V4L5 5.5V2.905z"/>
            </svg>
          ) : (
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
          )}
          {quality.label} · {quality.ext.toUpperCase()}
        </>
      )}
    </button>
  );
}
