import React from 'react';
import { GraduationCap, Award, Calendar } from 'lucide-react';
import { educationData, certifications } from '../data/portfolioData';
import './Education.css';

export default function Education() {
  return (
    <section id="education" className="section education-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header reveal-on-scroll">
          <h2 className="section-title">
            Education & Certifications
          </h2>
          <p className="section-subtitle">
            Formal foundations in Computer Science paired with industry cloud and system design certifications.
          </p>
        </div>

        {/* Degree Cards */}
        <div className="education-cards-container">
          {educationData.map((edu, idx) => (
            <div
              key={idx}
              className="crafted-card reveal-on-scroll education-card"
            >
              <div className="education-card-header">
                <div className="education-card-lead">
                  <div className="education-icon-box">
                    <GraduationCap size={22} />
                  </div>
                  <div>
                    <h3 className="education-degree-title">
                      {edu.degree}
                    </h3>
                    <div className="education-institution">
                      {edu.institution}
                    </div>
                  </div>
                </div>

                <div className="education-period-badge">
                  <Calendar size={13} className="education-period-icon" />
                  <span>{edu.period}</span>
                </div>
              </div>

              <div className="education-grade-wrapper">
                <span className="education-grade-badge">
                  <Award size={16} />
                  <span>{edu.grade}</span>
                </span>
              </div>

              <p className="education-desc">
                {edu.description}
              </p>

              <div>
                <div className="education-coursework-label">
                  Core Computer Science Coursework
                </div>
                <div className="education-coursework-list">
                  {edu.coursework.map((course) => (
                    <span key={course} className="badge">
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Certifications Grid */}
        <div className="reveal-on-scroll">
          <div className="education-certs-header">
            <h3 className="education-certs-title">
              Industry Accreditations
            </h3>
          </div>

          <div className="education-certs-grid">
            {certifications.map((cert) => (
              <div
                key={cert.title}
                className="crafted-card education-cert-card"
              >
                <div className="education-cert-icon">
                  <Award size={20} />
                </div>
                <div>
                  <h4 className="education-cert-title">
                    {cert.title}
                  </h4>
                  <div className="education-cert-meta">
                    {cert.issuer} • {cert.year}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
