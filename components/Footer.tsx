'use client';

import React from 'react';
import ContactForm from './ContactForm';

export default function Footer() {
  const [copied, setCopied] = React.useState(false);

  const handleInstagramClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const siteUrl = typeof window !== 'undefined' ? window.location.origin : 'https://fastwitterx.vercel.app/';
    navigator.clipboard.writeText(siteUrl);
    setCopied(true);
    alert('Website link copied to clipboard! Share it in your Instagram stories, bio, or direct messages! 📸');
    setTimeout(() => setCopied(false), 3000);
    window.open('https://instagram.com', '_blank');
  };

  const getShareLink = (platform: 'twitter' | 'whatsapp' | 'telegram') => {
    const siteUrl = typeof window !== 'undefined' ? window.location.origin : 'https://fastwitterx.vercel.app/';
    const text = 'Download Twitter and X videos instantly for free with zero quality loss! 🚀';
    
    switch (platform) {
      case 'twitter':
        return `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(siteUrl)}`;
      case 'whatsapp':
        return `https://api.whatsapp.com/send?text=${encodeURIComponent(text + ' ' + siteUrl)}`;
      case 'telegram':
        return `https://t.me/share/url?url=${encodeURIComponent(siteUrl)}&text=${encodeURIComponent(text)}`;
    }
  };

  return (
    <footer className="footer-section bg-slate-950 border-t border-slate-900 text-slate-300 py-5 mt-auto" role="contentinfo">
      <div className="container">
        <div className="row g-4 align-items-center">
          {/* Left Column: Branding, Tagline, Share Block */}
          <div className="col-12 col-md-6 d-flex flex-column align-items-center align-items-md-start gap-2 text-center text-md-start">
            <div className="d-flex align-items-center justify-content-center justify-content-md-start gap-2 text-white">
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
            <p className="small text-slate-500 mb-2">
              © {new Date().getFullYear()} TW Downloader. Fully self-contained. All rights reserved.
              <span className="mx-2">•</span>
              <a href="/privacy" className="text-slate-500 text-decoration-none hover:text-white" style={{ transition: 'color 0.2s ease' }}>
                Privacy Policy
              </a>
            </p>
 
            {/* Share Us block */}
            <div className="share-us-section mt-3 pt-3 border-t border-slate-900 w-full" style={{ borderColor: 'rgba(255,255,255,0.03)' }}>
              <span className="small text-uppercase tracking-wider fw-bold text-slate-500 d-block mb-3 text-center text-md-start" style={{ fontSize: '0.72rem', letterSpacing: '0.08em' }}>Share TW Downloader</span>
              <div className="d-flex flex-wrap justify-content-center justify-content-md-start gap-2">
                {/* Twitter */}
                <a
                  href={getShareLink('twitter')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="share-btn share-twitter d-inline-flex align-items-center justify-content-center"
                  title="Share on Twitter / X"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.6.75zm-.86 13.028h1.36L4.323 2.145H2.865l8.875 11.633z"/>
                  </svg>
                  {/* <span className="ms-2 small">Twitter</span> */}
                </a>
                
                {/* WhatsApp */}
                <a
                  href={getShareLink('whatsapp')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="share-btn share-whatsapp d-inline-flex align-items-center justify-content-center"
                  title="Share on WhatsApp"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.977h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.69-4.98c-.202-.101-1.192-.588-1.378-.654-.185-.066-.32-.1-.456.1-.136.2-.527.653-.646.786-.119.135-.239.149-.442.048-2.001-1.003-3.1-1.92-3.8-3.11-.186-.319-.045-.55.1-.69.13-.13.26-.3.39-.45.13-.16.17-.27.26-.45.09-.17.045-.32-.023-.46-.067-.137-.554-1.332-.759-1.83-.198-.485-.4-.416-.546-.421-.143-.004-.307-.005-.472-.005-.165 0-.436.061-.664.31-.228.249-.87.85-.87 2.073 0 .438.32.86.726 1.284.075.074.15.15.22.23.076.075.153.15.23.22.08.07.154.14.23.2.342.275.72.395 1.134.395.186 0 .37-.024.55-.072.18-.048.354-.117.522-.206.168-.088.32-.198.455-.328l.216-.206c.07-.066.13-.14.186-.216.05-.076.09-.156.12-.24.03-.083.045-.17.045-.26 0-.13-.038-.256-.112-.375z"/>
                  </svg>
                  {/* <span className="ms-2 small">WhatsApp</span> */}
                </a>
                
                {/* Telegram */}
                <a
                  href={getShareLink('telegram')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="share-btn share-telegram d-inline-flex align-items-center justify-content-center"
                  title="Share on Telegram"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M1.777 9.42L14.37 3.3c.554-.27.994.12.78.69l-2.43 11.43c-.18.81-.66.99-1.35.6l-3.7-2.73-1.785 1.72c-.2.2-.37.37-.76.37l.266-3.78L12.5 5.56c.3-.27-.066-.42-.46-.16L5.07 10.15l-3.66-1.15c-.8-.25-.815-.8.167-1.18z"/>
                  </svg>
                  {/* <span className="ms-2 small">Telegram</span> */}
                </a>
                
                {/* Instagram */}
                <a
                  href="#"
                  onClick={handleInstagramClick}
                  className="share-btn share-instagram d-inline-flex align-items-center justify-content-center"
                  title="Share on Instagram"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"/>
                  </svg>
                  {/* <span className="ms-2 small">Instagram</span> */}
                </a>
              </div>
            </div>
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
