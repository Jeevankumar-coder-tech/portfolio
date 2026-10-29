import React, { useState } from 'react';
import { Mail, Send, Copy, Check, MapPin } from 'lucide-react';
import { GithubIcon, LinkedinIcon, TwitterIcon } from './Icons';
import { personalInfo } from '../data/portfolioData';
import './Contact.css';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [copied, setCopied] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.socials.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setSubmitted(false), 5000);
    }, 800);
  };

  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header reveal-on-scroll">
          <h2 className="section-title">
            Contact Me
          </h2>
          <p className="section-subtitle">
            Have an engineering role, contract proposal, or want to discuss a system architecture? Let's connect.
          </p>
        </div>

        <div className="contact-grid">
          {/* Left: Contact Info */}
          <div className="reveal-on-scroll">
            <div className="crafted-card contact-info-card">
              <h3 className="contact-card-title">
                Direct Channels
              </h3>
              <p className="contact-card-desc">
                Feel free to email me directly or connect across social channels:
              </p>

              {/* Email Copy Pill */}
              <div className="contact-email-box">
                <div className="contact-email-left">
                  <Mail size={17} className="contact-coral-icon" />
                  <span className="contact-email-text">
                    {personalInfo.socials.email}
                  </span>
                </div>
                <button
                  onClick={handleCopyEmail}
                  className={`contact-copy-btn ${copied ? 'copied' : ''}`}
                  title="Copy email"
                >
                  {copied ? (
                    <>
                      <Check size={15} />
                      <span>Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy size={15} />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              {/* Location */}
              <div className="contact-location-row">
                <MapPin size={16} className="contact-coral-icon" />
                <span>{personalInfo.location}</span>
              </div>
            </div>

            {/* Social Channels */}
            <div className="contact-socials-row">
              {personalInfo.socials.github && (
                <a
                  href={personalInfo.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-social-btn"
                >
                  <GithubIcon size={17} />
                  <span>GitHub</span>
                </a>
              )}
              {personalInfo.socials.linkedin && (
                <a
                  href={personalInfo.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-social-btn"
                >
                  <LinkedinIcon size={17} />
                  <span>LinkedIn</span>
                </a>
              )}
              {personalInfo.socials.twitter && (
                <a
                  href={personalInfo.socials.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-social-btn"
                >
                  <TwitterIcon size={17} />
                  <span>Twitter</span>
                </a>
              )}
            </div>
          </div>

          {/* Right: Message Form */}
          <div className="crafted-card reveal-on-scroll delay-1 contact-form-card">
            <h3 className="contact-card-title">
              Send a Note
            </h3>

            {submitted && (
              <div className="contact-success-alert">
                <Check size={16} />
                <span>Thank you! Your message has been sent successfully.</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="contact-form">
              <div className="contact-form-group">
                <label className="contact-label">
                  Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="contact-input"
                />
              </div>

              <div className="contact-form-group">
                <label className="contact-label">
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  placeholder="name@company.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="contact-input"
                />
              </div>

              <div className="contact-form-group">
                <label className="contact-label">
                  Message *
                </label>
                <textarea
                  required
                  rows={4}
                  placeholder="Tell me about your project, timeline, or engineering opportunity..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="contact-textarea"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="btn btn-coral contact-submit-btn"
              >
                {isSubmitting ? (
                  <span>Transmitting...</span>
                ) : (
                  <>
                    <Send size={15} />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
