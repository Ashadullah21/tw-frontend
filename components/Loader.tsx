'use client';

/**
 * Loader — High-Fidelity Pulsing Skeleton Loading state.
 * Renders a placeholder structure matching the exact proportions of VideoResult
 * to make the wait feel near-instant and visually smooth.
 */
export default function Loader() {
  return (
    <div className="w-100 d-flex flex-column align-items-center mt-3 animate-fade-in">
      {/* ── High-Fidelity Skeleton Card ─────────────────────────────────── */}
      <div className="video-result-card card shadow-lg" style={{ opacity: 0.85 }} aria-hidden="true">
        <div className="row g-0">
          {/* Thumbnail Column Skeleton */}
          <div className="col-md-4 col-lg-3 thumbnail-col">
            <div className="thumbnail-wrapper skeleton-pulse skeleton-thumbnail-box">
              <div className="play-badge" style={{ border: '2px solid rgba(255,255,255,0.08)', background: 'rgba(255,255,255,0.04)' }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16" style={{ opacity: 0.1 }}>
                  <path d="M11.596 8.697l-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z" />
                </svg>
              </div>
            </div>
          </div>

          {/* Info Column Skeleton */}
          <div className="col-md-8 col-lg-9">
            <div className="card-body result-body">
              {/* Badges Skeleton */}
              <div className="d-flex align-items-center gap-2 mb-3">
                <div className="skeleton-pulse skeleton-badge-item" />
                <div className="skeleton-pulse skeleton-badge-item" style={{ width: '60px' }} />
              </div>

              {/* Title Skeleton Lines */}
              <div className="skeleton-pulse skeleton-text skeleton-title-1" />
              <div className="skeleton-pulse skeleton-text skeleton-title-2" />

              {/* Qualities Section Skeleton */}
              <div className="qualities-section mt-4">
                <div className="skeleton-pulse skeleton-text" style={{ width: '180px', height: '0.8rem', marginBottom: '1rem' }} />
                
                {/* Simulated download buttons */}
                <div className="d-flex flex-wrap gap-2">
                  <div className="skeleton-pulse skeleton-btn-item" />
                  <div className="skeleton-pulse skeleton-btn-item" />
                  <div className="skeleton-pulse skeleton-btn-item" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Progress status below card */}
      <div
        className="loader-container mt-2"
        role="status"
        aria-live="polite"
        aria-label="Extracting video information, please wait"
      >
        <p className="loader-text mb-1">Extracting video details…</p>
        <p className="loader-subtext mb-2">
          Contacting Twitter/X server to parse media quality links.
        </p>

        {/* Micro slider */}
        <div className="loader-progress mt-2" aria-hidden="true" style={{ width: '140px' }}>
          <div className="loader-progress-bar" />
        </div>
      </div>
    </div>
  );
}

