import React from 'react';
import { ArrowUp, Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon, TwitterIcon } from './Icons';
import { personalInfo } from '../data/portfolioData';
import './Footer.css';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer-wrap">
      <div className="container">
        {/* Top Tier: Brand, Socials, Navigation */}
        <div className="footer-top-tier">
          {/* Brand Mark */}
          <div className="footer-brand-group">
            <div className="footer-brand-badge">
              J
            </div>
            <span className="footer-brand-text">
              {personalInfo.name}
            </span>
          </div>

          {/* Social Links */}
          <div className="footer-socials-group">
            <span className="footer-socials-label">
              Find Me On:
            </span>

            {personalInfo.socials.github && (
              <a
                href={personalInfo.socials.github}
                target="_blank"
                rel="noreferrer"
                className="footer-social-link"
                aria-label="GitHub"
              >
                <GithubIcon size={16} />
              </a>
            )}

            {personalInfo.socials.linkedin && (
              <a
                href={personalInfo.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                className="footer-social-link"
                aria-label="LinkedIn"
              >
                <LinkedinIcon size={16} />
              </a>
            )}

            {personalInfo.socials.twitter && (
              <a
                href={personalInfo.socials.twitter}
                target="_blank"
                rel="noreferrer"
                className="footer-social-link"
                aria-label="Twitter"
              >
                <TwitterIcon size={16} />
              </a>
            )}

            <a
              href={`mailto:${personalInfo.socials.email}`}
              className="footer-social-link"
              aria-label="Email"
            >
              <Mail size={16} />
            </a>
          </div>

          {/* Back to top button */}
          <button
            onClick={scrollToTop}
            className="footer-scroll-top-btn"
            aria-label="Back to top"
            title="Back to top"
          >
            <ArrowUp size={16} />
          </button>
        </div>

        {/* Bottom Tier: Copyright & Policies */}
        <div className="footer-bottom-tier">
          <div className="footer-copyright">
            © Copyright {new Date().getFullYear()}. All Rights Reserved {personalInfo.name}.
          </div>

          <div className="footer-legal-links">
            <span>Privacy Policy</span>
            <span className="footer-legal-divider">•</span>
            <span>Terms Of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
