'use client';

import React from 'react';
import Image from 'next/image';
import { VideoInfo } from '@/types';
import DownloadButton from './DownloadButton';
import { truncate } from '@/lib/utils';

interface VideoResultProps {
  video: VideoInfo;
  /** Called when user wants to search for another URL */
  onReset: () => void;
}

/**
 * VideoResult — Displays the extracted video card with thumbnail,
 * title, and per-quality download buttons.
 */
export default function VideoResult({ video, onReset }: VideoResultProps) {
  const [imgError, setImgError] = React.useState(false);

  return (
    <div className="video-result-card card shadow-lg animate-slide-up" role="region" aria-label="Video result">
      <div className="row g-0">
        {/* ── Thumbnail Column ─────────────────────────────────────── */}
        <div className="col-md-4 col-lg-3 thumbnail-col">
          <div className="thumbnail-wrapper">
            {video.thumbnail && !imgError ? (
              <Image
                src={video.thumbnail}
                alt={`Thumbnail for: ${video.title}`}
                fill
                style={{ objectFit: 'cover' }}
                className="thumbnail-img"
                onError={() => setImgError(true)}
                unoptimized // thumbnails are served from Twitter's CDN, skip Next.js image optimization
              />
            ) : (
              /* Fallback placeholder */
              <div className="thumbnail-fallback" aria-label="No thumbnail available">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="48"
                  height="48"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                  aria-hidden="true"
                >
                  <path d="M6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5z" />
                  <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm15 0a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4z" />
                </svg>
                <span className="mt-2 small">No preview</span>
              </div>
            )}

            {/* Play overlay badge */}
            <div className="play-overlay" aria-hidden="true">
              <div className="play-badge">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M11.596 8.697l-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* ── Info Column ──────────────────────────────────────────── */}
        <div className="col-md-8 col-lg-9">
          <div className="card-body result-body">
            {/* Badge + title */}
            <div className="d-flex align-items-center gap-2 mb-2">
              <span className="badge result-badge">Twitter / X</span>
              <span className="badge bg-secondary">{video.qualities.length} qualities</span>
            </div>

            <h2 className="result-title" title={video.title}>
              {truncate(video.title, 140)}
            </h2>

            {/* Quality download buttons */}
            <div className="qualities-section mt-4">
              <p className="qualities-label mb-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" className="me-1" viewBox="0 0 16 16" aria-hidden="true">
                  <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z" />
                  <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z" />
                </svg>
                Select quality to download
              </p>

              <div className="d-flex flex-wrap gap-2" role="group" aria-label="Download quality options">
                {video.qualities.map((quality) => (
                  <DownloadButton
                    key={quality.label}
                    quality={quality}
                    videoTitle={video.title}
                  />
                ))}
              </div>
            </div>

            {/* Reset / search again */}
            <div className="mt-4 pt-3 border-top border-subtle">
              <button
                id="search-again-btn"
                type="button"
                className="btn btn-sm btn-ghost"
                onClick={onReset}
                aria-label="Download another video"
              >
                ← Download another video
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
