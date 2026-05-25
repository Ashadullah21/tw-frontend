'use client';

import React from 'react';
import { fetchFaqs, FaqItem } from '@/lib/api';

/**
 * FaqSection - Dynamically fetches FAQs from the Laravel backend API
 * and displays them in a gorgeous, interactive collapsible accordion.
 */
export default function FaqSection() {
  const [faqs, setFaqs] = React.useState<FaqItem[]>([]);
  const [activeId, setActiveId] = React.useState<number | null>(null);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    async function loadFaqs() {
      try {
        const data = await fetchFaqs();
        // Sort by order asc, then by created_at desc
        const sorted = data.sort((a, b) => {
          if (a.order !== b.order) {
            return a.order - b.order;
          }
          return b.id - a.id;
        });
        setFaqs(sorted);
      } catch (err) {
        console.error('Failed to load FAQs:', err);
      } finally {
        setIsLoading(false);
      }
    }
    loadFaqs();
  }, []);

  const toggleFaq = (id: number) => {
    setActiveId(activeId === id ? null : id);
  };

  if (isLoading) {
    return (
      <div className="faq-loading text-center py-5 text-muted small mt-4">
        <div className="spinner-border spinner-border-sm me-2 text-primary" role="status" aria-hidden="true" />
        Loading dynamic FAQs...
      </div>
    );
  }

  if (faqs.length === 0) {
    return null; // Gracefully hide the section if no FAQs exist
  }

  return (
    <section className="faq-section mt-5 w-100 px-3 animate-fade-in" style={{ maxWidth: '760px' }} aria-label="Frequently Asked Questions">
      <div className="text-center mb-4">
        <h2 className="faq-main-title fs-3 fw-bold mb-2 text-white">
          Frequently <span className="gradient-text">Asked Questions</span>
        </h2>
        <p className="faq-subtitle text-secondary small">
          Quick help and dynamic answers straight from our admin dashboard.
        </p>
      </div>

      <div className="faq-accordion d-flex flex-column gap-3">
        {faqs.map((faq) => {
          const isOpen = activeId === faq.id;
          return (
            <div
              key={faq.id}
              className="faq-item-card border rounded-4 overflow-hidden"
              style={{
                background: isOpen ? 'var(--bg-card)' : 'var(--bg-surface)',
                borderColor: isOpen ? 'rgba(29, 155, 240, 0.4)' : 'var(--border-subtle)',
                boxShadow: isOpen ? '0 10px 30px rgba(0, 0, 0, 0.3), 0 0 20px rgba(29, 155, 240, 0.05)' : 'none',
                transition: 'all 0.25s cubic-bezier(0.4, 0, 0.2, 1)'
              }}
            >
              <button
                type="button"
                className="faq-question-btn w-100 border-0 bg-transparent text-start p-4 d-flex justify-content-between align-items-center gap-3 text-white fw-bold"
                onClick={() => toggleFaq(faq.id)}
                aria-expanded={isOpen}
                style={{ cursor: 'pointer', outline: 'none', fontSize: '0.98rem' }}
              >
                <span>{faq.question}</span>
                <span
                  className="faq-chevron-icon"
                  style={{
                    transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                    transition: 'transform 0.25s cubic-bezier(0.4, 0, 0.2, 1)',
                    color: isOpen ? 'var(--brand-primary)' : 'var(--text-secondary)',
                    flexShrink: 0
                  }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
                  </svg>
                </span>
              </button>

              <div
                className="faq-answer-wrapper"
                style={{
                  maxHeight: isOpen ? '1000px' : '0px',
                  opacity: isOpen ? 1 : 0,
                  overflow: 'hidden',
                  transition: 'max-height 0.4s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.3s ease'
                }}
              >
                <div 
                  className="faq-answer-content px-4 pb-4 text-slate-300 border-top pt-3"
                  style={{ 
                    borderColor: 'rgba(255,255,255,0.03)',
                    color: 'var(--text-secondary)',
                    fontSize: '0.9rem',
                    lineHeight: '1.6'
                  }}
                >
                  {faq.answer}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
