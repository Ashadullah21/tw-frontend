'use client';

import React from 'react';
import UrlInput from '@/components/UrlInput';
import VideoResult from '@/components/VideoResult';
import Loader from '@/components/Loader';
import ErrorMessage from '@/components/ErrorMessage';
import Footer from '@/components/Footer';
import { extractVideo, warmupBackend } from '@/lib/api';
import { VideoInfo, AppState } from '@/types';

/**
 * Main page — single-page Twitter/X video downloader with integrated rich Footer and Contact support.
 *
 * State machine:
 *   idle    → user is on the input screen
 *   loading → API call in progress (yt-dlp running on server)
 *   success → video info received, show result card
 *   error   → API returned an error or network failed
 */
export default function HomePage() {
  const [appState, setAppState]     = React.useState<AppState>('idle');
  const [videoInfo, setVideoInfo]   = React.useState<VideoInfo | null>(null);
  const [errorMsg, setErrorMsg]     = React.useState<string>('');

  React.useEffect(() => {
    warmupBackend();
  }, []);

  /**
   * Called by UrlInput after local URL validation passes.
   */
  const handleExtract = async (url: string) => {
    setAppState('loading');
    setVideoInfo(null);
    setErrorMsg('');

    try {
      const data = await extractVideo(url);
      setVideoInfo(data);
      setAppState('success');
    } catch (err) {
      const message =
        err instanceof Error
          ? err.message
          : 'An unexpected error occurred. Please try again.';

      setErrorMsg(message);
      setAppState('error');
    }
  };

  /**
   * Reset back to the idle / input state.
   */
  const handleReset = () => {
    setAppState('idle');
    setVideoInfo(null);
    setErrorMsg('');
  };

  return (
    <div className="page-wrapper d-flex flex-column min-vh-100">
      {/* Decorative background */}
      <div className="page-bg" aria-hidden="true" />

      {/* ── Navigation ─────────────────────────────────────────────── */}
      <nav className="site-nav" aria-label="Site navigation">
        <a href="/" className="nav-brand" aria-label="TW Downloader home">
          <div className="nav-brand-icon" aria-hidden="true">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.741l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </div>
          TW Downloader
        </a>
      </nav>

      {/* ── Main Content ────────────────────────────────────────────── */}
      <main className="main-content flex-grow-1" id="main">

        {/* Hero — always visible */}
        <header className="hero-section animate-fade-in">
          <div className="hero-badge">
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.741l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
            Free · No Sign-in · Direct Download
          </div>

          <h1 className="hero-title">
            Download <span className="gradient-text">Twitter & X</span><br />
            Videos Instantly
          </h1>

          <p className="hero-subtitle">
            Paste any Twitter or X video link and get direct download links
            in 720p, 480p, and 360p — no watermarks, no registration.
          </p>
        </header>

        {/* ── State-driven content area ───────────────────────────── */}

        {/* IDLE — show input form */}
        {appState === 'idle' && (
          <section className="input-section animate-fade-in" aria-label="Video URL input">
            <UrlInput onSubmit={handleExtract} isLoading={false} />

            {/* How it works steps */}
            <div className="steps-section" aria-label="How it works">
              <p className="steps-title">How it works</p>
              <div className="row g-3">
                {[
                  {
                    num: '1',
                    text: <><strong>Paste the URL</strong> of any tweet that contains a video.</>,
                  },
                  {
                    num: '2',
                    text: <><strong>Click "Get Download Links"</strong> — we extract all available qualities.</>,
                  },
                  {
                    num: '3',
                    text: <><strong>Choose your quality</strong> (720p / 480p / 360p) and download directly.</>,
                  },
                ].map((step) => (
                  <div key={step.num} className="col-12 col-md-4">
                    <div className="step-item h-100">
                      <div className="step-number" aria-hidden="true">{step.num}</div>
                      <p className="step-text mb-0">{step.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* LOADING — show spinner while API responds */}
        {appState === 'loading' && (
          <section aria-label="Loading">
            <UrlInput onSubmit={handleExtract} isLoading={true} />
            <Loader />
          </section>
        )}

        {/* SUCCESS — show video result card */}
        {appState === 'success' && videoInfo && (
          <section className="input-section" aria-label="Download options">
            <VideoResult video={videoInfo} onReset={handleReset} />
          </section>
        )}

        {/* ERROR — show error message with retry */}
        {appState === 'error' && (
          <section aria-label="Error">
            <UrlInput onSubmit={handleExtract} isLoading={false} />
            <div className="mt-4 d-flex justify-content-center">
              <ErrorMessage message={errorMsg} onRetry={handleReset} />
            </div>
          </section>
        )}
      </main>

      {/* ── Integrated Rich Footer Component with Inbound Support ── */}
      <Footer />
    </div>
  );
}
