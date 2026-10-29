import React from 'react';
import { ArrowRight } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import PolygonAvatar from './PolygonAvatar';
import './Hero.css';

export default function Hero() {
  return (
    <section id="hero" className="hero-section">
      <div className="container">
        <div className="hero-grid">
          {/* Left: Headline & Copy */}
          <div className="hero-content">
            {/* Top Label */}
            <div className="hero-greeting">
              Say Hello To <span className="hero-greeting-name">{personalInfo.name}</span>
            </div>

            {/* Giant Bold Headline */}
            <h1 className="hero-headline">
              Your Software Developer
            </h1>

            {/* Description */}
            <p className="hero-description">
              Motivated Fresher Software Developer eager to build modern web applications and AI-driven solutions with clean code.
            </p>

            {/* Primary Action Button */}
            <div className="hero-cta-group">
              <a
                href="#contact"
                className="btn btn-dark hero-btn-hire"
              >
                Hire Me
              </a>

              <a
                href="#about"
                className="hero-link-portfolio"
              >
                <span>View Portfolio</span>
                <ArrowRight size={15} />
              </a>
            </div>

            {/* Bottom Stats Row */}
            <div className="hero-stats-row">
              <div className="hero-stat-item">
                <div className="hero-stat-number">
                  {personalInfo.yearsExperience}
                </div>
                <div className="hero-stat-label">
                  Experience Level
                </div>
              </div>

              <div className="hero-stat-item">
                <div className="hero-stat-number">
                  {personalInfo.completedProjects}
                </div>
                <div className="hero-stat-label">
                  Projects Built
                </div>
              </div>

              <div className="hero-stat-item">
                <div className="hero-stat-number">
                  {personalInfo.uptime}
                </div>
                <div className="hero-stat-label">
                  Dedication & Quality
                </div>
              </div>
            </div>
          </div>

          {/* Right: Signature Portrait Frame */}
          <div className="hero-avatar-col">
            <PolygonAvatar size={380} />
          </div>
        </div>
      </div>
    </section>
  );
}
