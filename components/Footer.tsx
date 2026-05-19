'use client';

import React from 'react';
import ContactForm from './ContactForm';

export default function Footer() {
  return (
    <footer className="footer-section bg-slate-950 border-t border-slate-900 text-slate-300 py-5 mt-auto" role="contentinfo">
      <div className="container">
        <div className="row g-4 align-items-center">
          {/* Left Column: Branding and Tagline */}
          <div className="col-12 col-md-6 d-flex flex-column gap-2">
            <div className="d-flex align-items-center gap-2 text-white">
              <div className="nav-brand-icon" aria-hidden="true" style={{ width: '28px', height: '28px', fontSize: '0.85rem' }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.741l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </div>
              <span className="h5 mb-0 fw-bold tracking-tight">TW Downloader</span>
            </div>
            <p className="small text-slate-400 mb-2">
              The premier online tool for extracting and downloading videos from Twitter (X) with maximum speed and zero quality loss.
            </p>
            <p className="small text-slate-500 mb-0">
              © {new Date().getFullYear()} TW Downloader. Fully self-contained. All rights reserved.
            </p>
          </div>

          {/* Right Column: Contact Form */}
          <div className="col-12 col-md-6">
            <ContactForm />
          </div>
        </div>
      </div>
    </footer>
  );
}
