'use client';

import React from 'react';

export default function ContactForm() {
  const [name, setName]         = React.useState('');
  const [email, setEmail]       = React.useState('');
  const [message, setMessage]   = React.useState('');
  const [isLoading, setIsLoading] = React.useState(false);
  const [success, setSuccess]   = React.useState(false);
  const [errorMsg, setErrorMsg] = React.useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setSuccess(false);
    setErrorMsg('');

    // Construct backend API URL
    let baseUrl = process.env.NEXT_PUBLIC_API_URL || 'http://127.0.0.1:8000';
    if (typeof window !== 'undefined' && window.location.protocol === 'https:') {
      baseUrl = baseUrl.replace(/^http:/i, 'https:');
    }
    const apiUrl = `${baseUrl}/api/contact`;

    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({ name, email, message }),
      });

      const data = await response.json();

      if (!response.ok) {
        // Validation error or server exception
        const errorMessage = data.message || data.error || 'Failed to send message. Please check inputs.';
        throw new Error(errorMessage);
      }

      setSuccess(true);
      setName('');
      setEmail('');
      setMessage('');
    } catch (err: any) {
      setErrorMsg(err.message || 'An unexpected error occurred.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="contact-form-card p-4 rounded bg-slate-900 border border-slate-800 shadow-lg text-white">
      <h3 className="fs-5 fw-bold mb-3">Contact Support / Feedback</h3>
      
      {success && (
        <div className="alert alert-success border-0 bg-success bg-opacity-10 text-success p-3 rounded mb-3 small" role="alert">
          Thank you! Your message has been sent.
        </div>
      )}

      {errorMsg && (
        <div className="alert alert-danger border-0 bg-danger bg-opacity-10 text-danger p-3 rounded mb-3 small" role="alert">
          {errorMsg}
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="contact-name" className="form-label small text-slate-400">Full Name</label>
          <input
            id="contact-name"
            type="text"
            className="form-control bg-slate-950 border-slate-800 text-white rounded p-2"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            placeholder="John Doe"
            disabled={isLoading}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="contact-email" className="form-label small text-slate-400">Email Address</label>
          <input
            id="contact-email"
            type="email"
            className="form-control bg-slate-950 border-slate-800 text-white rounded p-2"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="john@example.com"
            disabled={isLoading}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="contact-message" className="form-label small text-slate-400">Message</label>
          <textarea
            id="contact-message"
            rows={3}
            className="form-control bg-slate-950 border-slate-800 text-white rounded p-2"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            minLength={10}
            placeholder="Write your message here (min 10 characters)..."
            disabled={isLoading}
          />
        </div>

        <button
          type="submit"
          className="btn btn-primary w-100 d-flex align-items-center justify-content-center gap-2 py-2"
          disabled={isLoading}
        >
          {isLoading ? (
            <>
              <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true" />
              Sending...
            </>
          ) : (
            'Send Message'
          )}
        </button>
      </form>
    </div>
  );
}
