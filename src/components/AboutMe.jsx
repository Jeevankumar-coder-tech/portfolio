import React from 'react';
import { Sparkles, ShoppingBag, Mail, MapPin } from 'lucide-react';
import { personalInfo, aboutMeData } from '../data/portfolioData';
import PolygonAvatar from './PolygonAvatar';
import './AboutMe.css';

export default function AboutMe() {
  // Fresher Projects Showcase
  const services = [
    {
      title: 'AI Resume & Interview Assistant',
      desc: 'Engineered a smart web application integrating modern AI APIs to evaluate resumes, provide ATS scoring, and generate custom interview prep questions.',
      icon: <Sparkles size={20} style={{ color: 'var(--color-coral)' }} />,
    },
    {
      title: 'Full-Stack E-Commerce Platform',
      desc: 'Developed a responsive full-stack shopping app with user authentication, product catalog search/filters, cart state management, and Stripe checkout.',
      icon: <ShoppingBag size={20} style={{ color: 'var(--color-coral)' }} />,
    },
  ];

  return (
    <section id="about" className="section about-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header reveal-on-scroll">
          <h2 className="section-title about-title">
            About Me
          </h2>
        </div>

        {/* 3-Column Layout Matching Reference Image */}
        <div className="about-grid">
          {/* Left Column: Biography & Contact */}
          <div className="reveal-on-scroll about-left-col">
            {/* Biography */}
            <div className="about-bio-block">
              <h4 className="about-block-heading">
                Biography
              </h4>
              <p className="about-bio-text">
                {aboutMeData.narrative[0]}
              </p>
              {aboutMeData.narrative[1] && (
                <p className="about-bio-text">
                  {aboutMeData.narrative[1]}
                </p>
              )}
            </div>

            {/* Contact */}
            <div>
              <h4 className="about-block-heading">
                Location & Details
              </h4>
              <div className="about-contact-list">
                <div className="about-contact-item">
                  <MapPin size={15} className="about-contact-icon" />
                  <span>Remote Worldwide • Global Availability</span>
                </div>
                <div className="about-contact-item">
                  <Mail size={15} className="about-contact-icon" />
                  <span>{personalInfo.socials.email}</span>
                </div>
              </div>
            </div>

            {/* Quick Stats Box */}
            <div className="about-stats-box">
              <div className="about-stat-item">
                <div className="about-stat-val">
                2+
                </div>
                <div className="about-stat-label">
                  Experience Level
                </div>
              </div>

              <div className="about-stat-item">
                <div className="about-stat-val">
                  {personalInfo.completedProjects}
                </div>
                <div className="about-stat-label">
                  Featured Projects
                </div>
              </div>
            </div>
          </div>

          {/* Center Column: Framed Developer Portrait */}
          <div className="reveal-on-scroll delay-1 about-center-col">
            <PolygonAvatar size={320} />
          </div>

          {/* Right Column: 3 Competency Items & Tech Stack */}
          <div className="reveal-on-scroll delay-2 about-right-col">
            {services.map((item) => (
              <div key={item.title} className="about-service-item">
                <div className="about-service-icon-box">
                  {item.icon}
                </div>
                <div>
                  <h4 className="about-service-title">
                    {item.title}
                  </h4>
                  <p className="about-service-desc">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}

            {/* Core Tech Stack */}
            <div className="about-tech-stack">
              <h4 className="about-block-heading">
                Core Tech Stack
              </h4>
              <div className="about-tech-chips">
                {aboutMeData.techStack.map((tech) => (
                  <span key={tech} className="about-tech-chip">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
