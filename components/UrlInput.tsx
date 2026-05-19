'use client';

import React from 'react';
import { isValidTwitterUrl } from '@/lib/utils';

interface UrlInputProps {
  /** Called when the form is submitted with a valid URL */
  onSubmit: (url: string) => void;
  /** Whether the app is currently fetching (disables the form) */
  isLoading: boolean;
}

/**
 * UrlInput — Large centered text input with a submit button.
 * Performs client-side URL validation before calling onSubmit.
 */
export default function UrlInput({ onSubmit, isLoading }: UrlInputProps) {
  const [url, setUrl] = React.useState('');
  const [validationError, setValidationError] = React.useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setValidationError('');

    const trimmed = url.trim();

    if (!trimmed) {
      setValidationError('Please paste a Twitter or X video URL.');
      return;
    }

    if (!isValidTwitterUrl(trimmed)) {
      setValidationError('Only twitter.com and x.com URLs are supported.');
      return;
    }

    onSubmit(trimmed);
  };

  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    // Auto-submit on paste for a snappy UX
    const pasted = e.clipboardData.getData('text').trim();
    if (isValidTwitterUrl(pasted)) {
      setValidationError('');
      setUrl(pasted);
      // Small delay so state updates propagate before submit
      setTimeout(() => onSubmit(pasted), 50);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="url-form w-100" noValidate>
      <div className="input-group input-group-lg shadow-lg url-input-group">
        {/* Twitter / X icon prefix */}
        <span className="input-group-text url-prefix" aria-hidden="true">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-label="X (Twitter) icon"
          >
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.741l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
          </svg>
        </span>

        <input
          id="twitter-url-input"
          type="url"
          className={`form-control url-input ${validationError ? 'is-invalid' : ''}`}
          placeholder="Paste Twitter or X video link here..."
          value={url}
          onChange={(e) => {
            setUrl(e.target.value);
            if (validationError) setValidationError('');
          }}
          onPaste={handlePaste}
          disabled={isLoading}
          autoComplete="off"
          spellCheck={false}
          aria-label="Twitter or X video URL"
          aria-describedby={validationError ? 'url-error' : undefined}
        />

        <button
          id="extract-btn"
          type="submit"
          className="btn btn-primary extract-btn"
          disabled={isLoading || !url.trim()}
          aria-busy={isLoading}
        >
          {isLoading ? (
            <>
              <span
                className="spinner-border spinner-border-sm me-2"
                role="status"
                aria-hidden="true"
              />
              Extracting…
            </>
          ) : (
            <>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-download me-2"
                viewBox="0 0 16 16"
                aria-hidden="true"
              >
                <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z" />
                <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z" />
              </svg>
              Get Download Links
            </>
          )}
        </button>
      </div>

      {/* Inline validation error */}
      {validationError && (
        <p id="url-error" className="text-danger mt-2 mb-0 small fw-medium" role="alert">
          ⚠ {validationError}
        </p>
      )}

      <p className="url-hint mt-3 mb-0">
        Supports twitter.com and x.com video links · No sign-in required
      </p>
    </form>
  );
}
