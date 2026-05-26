'use client';

import React, { useEffect } from 'react';
import Footer from '@/components/Footer';

export default function PrivacyPolicyPage() {
  useEffect(() => {
    document.title = 'Privacy Policy — TW Downloader';
  }, []);

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
        <a href="/" className="nav-github-btn text-decoration-none">
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="me-1">
            <line x1="19" y1="12" x2="5" y2="12"></line>
            <polyline points="12 19 5 12 12 5"></polyline>
          </svg>
          Back to Downloader
        </a>
      </nav>

      {/* ── Main Content ────────────────────────────────────────────── */}
      <main className="main-content flex-grow-1" id="main" style={{ padding: '3rem 1rem 5rem' }}>
        <div className="container py-2 animate-fade-in" style={{ maxWidth: '1100px' }}>
          
          {/* Header Section */}
          <header className="text-center mb-5">
            <div className="hero-badge">
              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="me-1" aria-hidden="true">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
              </svg>
              Privacy & Trust · Secure Connection
            </div>

            <h1 className="hero-title" style={{ fontSize: 'clamp(2rem, 4.5vw, 2.75rem)' }}>
              <span className="gradient-text">Privacy Policy</span>
            </h1>

            <p className="hero-subtitle mb-2" style={{ maxWidth: '600px' }}>
              We value your privacy. Read our clear, simple terms on how we handle information at fastwitterx.vercel.app.
            </p>
            <div className="text-muted small mt-2">
              Last updated: May 26, 2026
            </div>
          </header>

          {/* Core Layout - Sidebar navigation (Table of Contents) + Content */}
          <div className="row g-4 mt-2">
            
            {/* Sidebar TOC - Visible on Desktop */}
            <aside className="col-12 col-lg-3 d-none d-lg-block">
              <div className="sticky-top" style={{ top: '6.5rem', zIndex: 10 }}>
                <div 
                  className="card p-3 border-subtle" 
                  style={{ 
                    background: 'rgba(15, 22, 41, 0.65)', 
                    backdropFilter: 'blur(10px)',
                    borderRadius: 'var(--radius-md)' 
                  }}
                >
                  <p className="small text-uppercase tracking-wider fw-bold text-slate-400 mb-3" style={{ fontSize: '0.72rem', letterSpacing: '0.08em' }}>
                    Quick Navigation
                  </p>
                  <nav className="d-flex flex-column gap-2" aria-label="Privacy policy sections">
                    <a href="#introduction" className="text-decoration-none py-1.5 px-2 rounded hover-nav-item transition-all text-secondary" style={{ fontSize: '0.85rem' }}>
                      1. Introduction
                    </a>
                    <a href="#data-we-collect" className="text-decoration-none py-1.5 px-2 rounded hover-nav-item transition-all text-secondary" style={{ fontSize: '0.85rem' }}>
                      2. Data We Collect
                    </a>
                    <a href="#how-we-use-data" className="text-decoration-none py-1.5 px-2 rounded hover-nav-item transition-all text-secondary" style={{ fontSize: '0.85rem' }}>
                      3. How We Use Data
                    </a>
                    <a href="#cookies" className="text-decoration-none py-1.5 px-2 rounded hover-nav-item transition-all text-secondary" style={{ fontSize: '0.85rem' }}>
                      4. Cookies Policy
                    </a>
                    <a href="#third-party-services" className="text-decoration-none py-1.5 px-2 rounded hover-nav-item transition-all text-secondary" style={{ fontSize: '0.85rem' }}>
                      5. Third Party Services
                    </a>
                    <a href="#user-rights" className="text-decoration-none py-1.5 px-2 rounded hover-nav-item transition-all text-secondary" style={{ fontSize: '0.85rem' }}>
                      6. User Rights
                    </a>
                    <a href="#contact" className="text-decoration-none py-1.5 px-2 rounded hover-nav-item transition-all text-secondary" style={{ fontSize: '0.85rem' }}>
                      7. Contact & Support
                    </a>
                  </nav>
                </div>
              </div>
            </aside>

            {/* Document Content */}
            <div className="col-12 col-lg-9">
              <article 
                className="card border-subtle overflow-hidden" 
                style={{ 
                  background: 'rgba(20, 29, 53, 0.45)', 
                  backdropFilter: 'blur(16px)',
                  borderRadius: 'var(--radius-xl)',
                  boxShadow: 'var(--shadow-lg)'
                }}
              >
                <div className="card-body p-4 p-md-5">
                  
                  {/* Summary / Key takeaways callout */}
                  <div 
                    className="p-3 mb-5 border-l-4 rounded" 
                    style={{ 
                      background: 'rgba(29, 155, 240, 0.05)', 
                      borderLeft: '4px solid var(--brand-primary)',
                      borderRadius: 'var(--radius-sm)'
                    }}
                  >
                    <div className="d-flex gap-2 align-items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--brand-primary)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 flex-shrink-0">
                        <circle cx="12" cy="12" r="10"></circle>
                        <line x1="12" y1="16" x2="12" y2="12"></line>
                        <line x1="12" y1="8" x2="12.01" y2="8"></line>
                      </svg>
                      <div>
                        <h2 className="h6 fw-bold mb-1" style={{ color: 'var(--text-primary)' }}>Privacy Summary</h2>
                        <p className="small mb-0" style={{ color: 'var(--text-secondary)', lineHeight: '1.5' }}>
                          We do <strong>not</strong> require user registration, usernames, or passwords. We do <strong>not</strong> store logs of downloaded files or associate them with your identity. Your downloading activities are completely anonymous.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Section 1: Introduction */}
                  <section id="introduction" className="mb-5 scroll-margin-nav">
                    <div className="d-flex align-items-center gap-2.5 mb-3">
                      <div className="section-icon-container">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                          <polyline points="14 2 14 8 20 8"></polyline>
                          <line x1="16" y1="13" x2="8" y2="13"></line>
                          <line x1="16" y1="17" x2="8" y2="17"></line>
                          <polyline points="10 9 9 9 8 9"></polyline>
                        </svg>
                      </div>
                      <h2 className="h4 fw-bold mb-0" style={{ color: 'var(--text-primary)' }}>1. Introduction</h2>
                    </div>
                    <p className="policy-text">
                      Welcome to <strong>TW Downloader</strong> (accessible at <a href="https://fastwitterx.vercel.app" className="policy-link text-decoration-none">fastwitterx.vercel.app</a>). We are dedicated to providing a swift, reliable, and secure online utility to extract and download videos from Twitter and X.
                    </p>
                    <p className="policy-text">
                      We understand that privacy is paramount. This Privacy Policy is designed to clearly explain the types of information we may collect when you browse and use our downloader, how we handle that data, and your corresponding privacy rights. By accessing or using TW Downloader, you consent to the practices described in this document.
                    </p>
                  </section>

                  <hr className="border-subtle my-4" />

                  {/* Section 2: Data We Collect */}
                  <section id="data-we-collect" className="mb-5 scroll-margin-nav">
                    <div className="d-flex align-items-center gap-2.5 mb-3">
                      <div className="section-icon-container">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
                          <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
                          <path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3"></path>
                        </svg>
                      </div>
                      <h2 className="h4 fw-bold mb-0" style={{ color: 'var(--text-primary)' }}>2. Data We Collect</h2>
                    </div>
                    <p className="policy-text">
                      Because our application is a fully free public utility that functions without sign-ins, the amount of data we process is kept to an absolute minimum. We collect information in the following limited ways:
                    </p>
                    <ul className="policy-list">
                      <li>
                        <strong>Submitted Tweet URLs:</strong> When you paste a URL and click "Get Link", our server processes the provided link to search for the embedded video file. We do not link these URLs to your personal details.
                      </li>
                      <li>
                        <strong>Technical Log Data:</strong> Like most web servers, our infrastructure temporarily logs basic network metadata during requests. This include your IP address, browser user-agent, operating system, and the date and time of request. This information is processed exclusively for technical security, rate limiting to prevent DDoS attacks, and system operations.
                      </li>
                      <li>
                        <strong>Contact Information:</strong> If you voluntarily reach out to us using the contact form in the footer, we receive your name, email address, and the content of your message. This data is only used to respond directly to your inquiry.
                      </li>
                    </ul>
                  </section>

                  <hr className="border-subtle my-4" />

                  {/* Section 3: How We Use Data */}
                  <section id="how-we-use-data" className="mb-5 scroll-margin-nav">
                    <div className="d-flex align-items-center gap-2.5 mb-3">
                      <div className="section-icon-container">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
                        </svg>
                      </div>
                      <h2 className="h4 fw-bold mb-0" style={{ color: 'var(--text-primary)' }}>3. How We Use Data</h2>
                    </div>
                    <p className="policy-text">
                      Any information collected from you is used solely for standard operational and optimization purposes:
                    </p>
                    <ul className="policy-list">
                      <li>
                        <strong>Service Delivery:</strong> To parse and fetch video stream URLs from Twitter/X and construct the downloadable high, medium, and low quality files for you.
                      </li>
                      <li>
                        <strong>Abuse Protection:</strong> To rate-limit requests using IP addresses, preventing bots or scrapers from abusing our backend server capacity.
                      </li>
                      <li>
                        <strong>Customer Support:</strong> To troubleshoot issues, answer inquiries, and resolve bugs reported by users through our support channels.
                      </li>
                      <li>
                        <strong>Aggregated Performance Analytics:</strong> To evaluate traffic volume, monitor error rates, and improve server responsiveness (using strictly anonymized metrics).
                      </li>
                    </ul>
                  </section>

                  <hr className="border-subtle my-4" />

                  {/* Section 4: Cookies */}
                  <section id="cookies" className="mb-5 scroll-margin-nav">
                    <div className="d-flex align-items-center gap-2.5 mb-3">
                      <div className="section-icon-container">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <circle cx="12" cy="12" r="10"></circle>
                          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                          <path d="M2 12h20"></path>
                        </svg>
                      </div>
                      <h2 className="h4 fw-bold mb-0" style={{ color: 'var(--text-primary)' }}>4. Cookies Policy</h2>
                    </div>
                    <p className="policy-text">
                      We use minor cookies to ensure basic operations and verify site usage trends:
                    </p>
                    <ul className="policy-list">
                      <li>
                        <strong>Essential Cookies:</strong> Extremely small session tokens might be generated by our web host (Vercel) for server load balancing, caching, and security checks. These do not store personal profiles.
                      </li>
                      <li>
                        <strong>Analytical Cookies:</strong> We may utilize lightweight, privacy-respecting analytics tools to see how many users visit TW Downloader. These track generalized information (e.g., country of origin, screen resolution, browser type) without identifying individual users.
                      </li>
                    </ul>
                    <p className="policy-text">
                      You hold the total authority to disable cookies in your browser settings. Rest assured, disabling cookies will not restrict your capability to extract and download videos on TW Downloader.
                    </p>
                  </section>

                  <hr className="border-subtle my-4" />

                  {/* Section 5: Third Party Services */}
                  <section id="third-party-services" className="mb-5 scroll-margin-nav">
                    <div className="d-flex align-items-center gap-2.5 mb-3">
                      <div className="section-icon-container">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
                          <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
                        </svg>
                      </div>
                      <h2 className="h4 fw-bold mb-0" style={{ color: 'var(--text-primary)' }}>5. Third Party Services</h2>
                    </div>
                    <p className="policy-text">
                      To keep fastwitterx.vercel.app lightweight and fast, we keep third-party dependencies as minimal as possible. However, the system relies on these external systems:
                    </p>
                    <ul className="policy-list">
                      <li>
                        <strong>Twitter/X Server Queries:</strong> When fetching media streams, our server interfaces with public video servers to obtain source URLs. No personal identifiers are transferred from our service to Twitter/X.
                      </li>
                      <li>
                        <strong>Hosting Platform (Vercel):</strong> Our frontend codebase is hosted on Vercel. Their robust cloud infrastructure collects network metadata for latency routing, edge functions, and security. Vercel adheres to rigorous global compliance and security protocols.
                      </li>
                      <li>
                        <strong>External Sharing Widgets:</strong> Our site features convenient links to share our downloader on Twitter (X), Telegram, WhatsApp, and Instagram. Clicking these links will direct you to those third-party platforms, which operate under their own individual privacy policies.
                      </li>
                    </ul>
                  </section>

                  <hr className="border-subtle my-4" />

                  {/* Section 6: User Rights */}
                  <section id="user-rights" className="mb-5 scroll-margin-nav">
                    <div className="d-flex align-items-center gap-2.5 mb-3">
                      <div className="section-icon-container">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                        </svg>
                      </div>
                      <h2 className="h4 fw-bold mb-0" style={{ color: 'var(--text-primary)' }}>6. User Rights</h2>
                    </div>
                    <p className="policy-text">
                      We support global data privacy frameworks (such as the EU General Data Protection Regulation - GDPR, and California Consumer Privacy Act - CCPA). Since we do not maintain accounts, name databases, or permanent files, we lack the technical capability to link general traffic to a specific user. However, you maintain the following rights:
                    </p>
                    <ul className="policy-list">
                      <li>
                        <strong>Request Erasure:</strong> If you have submitted feedback or an error message through our contact form, you can request that we permanently delete your email and correspondence from our mail logs.
                      </li>
                      <li>
                        <strong>Request Access:</strong> You can request a summary of any contact form messages you have sent to us.
                      </li>
                      <li>
                        <strong>Opt-out:</strong> You have the absolute right to refuse cookie collection by configuring your web browser accordingly.
                      </li>
                    </ul>
                  </section>

                  <hr className="border-subtle my-4" />

                  {/* Section 7: Contact */}
                  <section id="contact" className="mb-0 scroll-margin-nav">
                    <div className="d-flex align-items-center gap-2.5 mb-3">
                      <div className="section-icon-container">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                          <polyline points="22,6 12,13 2,6"></polyline>
                        </svg>
                      </div>
                      <h2 className="h4 fw-bold mb-0" style={{ color: 'var(--text-primary)' }}>7. Contact & Support</h2>
                    </div>
                    <p className="policy-text">
                      If you have questions, feedback, or need clarification regarding this Privacy Policy or the operational protocols of fastwitterx.vercel.app, please do not hesitate to contact us.
                    </p>
                    <p className="policy-text">
                      You can use the <strong>Contact Support</strong> form located directly in the footer below, or email us directly at:
                    </p>
                    <div className="mt-3 p-3 rounded d-inline-flex align-items-center gap-2" style={{ background: 'var(--bg-input)' }}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--brand-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                        <polyline points="22,6 12,13 2,6"></polyline>
                      </svg>
                      <a href="mailto:fastwitterx.wtf@gmail.com" className="fw-bold tracking-wide text-decoration-none" style={{ color: 'var(--brand-primary)', fontSize: '0.9rem' }}>
                        fastwitterx.wtf@gmail.com
                      </a>
                    </div>
                  </section>

                </div>
              </article>
            </div>

          </div>

        </div>
      </main>

      {/* ── Footer ─────────────────────────────────────────────────── */}
      <Footer />
      
      {/* ── Component-specific Custom styles ──────────────────────── */}
      <style jsx global>{`
        .scroll-margin-nav {
          scroll-margin-top: 8rem;
        }
        .section-icon-container {
          width: 32px;
          height: 32px;
          border-radius: 8px;
          background: rgba(29, 155, 240, 0.1);
          color: var(--brand-primary);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .policy-text {
          font-size: 0.95rem;
          line-height: 1.7;
          color: var(--text-secondary);
          margin-bottom: 1.25rem;
        }
        .policy-list {
          padding-left: 1.25rem;
          margin-bottom: 1.5rem;
        }
        .policy-list li {
          font-size: 0.95rem;
          line-height: 1.65;
          color: var(--text-secondary);
          margin-bottom: 0.75rem;
        }
        .policy-list li strong {
          color: var(--text-primary);
        }
        .policy-link {
          color: var(--brand-primary);
          transition: color var(--transition-fast);
        }
        .policy-link:hover {
          color: var(--brand-primary-dark);
          text-decoration: underline !important;
        }
        .hover-nav-item {
          color: var(--text-secondary) !important;
        }
        .hover-nav-item:hover {
          color: var(--brand-primary) !important;
          background: rgba(255, 255, 255, 0.03);
          padding-left: 0.75rem !important;
        }
      `}</style>
    </div>
  );
}
