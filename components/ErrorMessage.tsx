'use client';

interface ErrorMessageProps {
  message: string;
  onRetry: () => void;
}

/**
 * ErrorMessage — Displays a styled error alert with a retry button.
 */
export default function ErrorMessage({ message, onRetry }: ErrorMessageProps) {
  return (
    <div
      className="error-container animate-fade-in"
      role="alert"
      aria-live="assertive"
    >
      <div className="error-card card shadow-sm">
        <div className="card-body p-4">
          {/* Icon + heading */}
          <div className="d-flex align-items-center gap-3 mb-3">
            <div className="error-icon-wrapper" aria-hidden="true">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
              </svg>
            </div>
            <div>
              <h3 className="error-title mb-0">Extraction Failed</h3>
              <p className="error-message mb-0 mt-1">{message}</p>
            </div>
          </div>

          {/* Possible causes */}
          <ul className="error-hints mt-3 mb-4">
            <li>The tweet may be from a private account</li>
            <li>The video may have been deleted</li>
            <li>The URL format may not be supported</li>
            <li>The tweet may contain only images or GIFs (no video)</li>
          </ul>

          {/* Retry button */}
          <button
            id="retry-btn"
            type="button"
            className="btn btn-primary w-100"
            onClick={onRetry}
          >
            ← Try a Different URL
          </button>
        </div>
      </div>
    </div>
  );
}
