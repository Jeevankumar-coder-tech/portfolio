import React, { useState } from 'react';
import { ExternalLink, ArrowUpRight } from 'lucide-react';
import { GithubIcon } from './Icons';
import { projectsData } from '../data/portfolioData';
import { HyperStreamPreview, CloudGatePreview, NexusPreview } from './ProjectPreviews';
import Card3D from './Card3D';
import './Projects.css';

export default function Projects({ onSelectProject }) {
  const [activeFilter, setActiveFilter] = useState('all');

  const filterTabs = [
    { id: 'all', label: 'All Systems' },
    { id: 'backend', label: 'Backend & Cloud' },
    { id: 'fullstack', label: 'Full Stack' },
  ];

  const filteredProjects =
    activeFilter === 'all'
      ? projectsData
      : projectsData.filter((p) => p.category === activeFilter);

  // Map project ID to its software engineering preview
  const renderPreview = (id) => {
    switch (id) {
      case 'hyperstream-telemetry':
        return <HyperStreamPreview />;
      case 'cloudgate-api':
        return <CloudGatePreview />;
      case 'nexus-workspace':
        return <NexusPreview />;
      default:
        return <HyperStreamPreview />;
    }
  };

  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header reveal-on-scroll">
          <h2 className="section-title">
            My Projects
          </h2>
          <p className="section-subtitle">
            Distributed event streaming brokers, microservices API gateways, and full-stack platforms engineered for scale and low latency.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="reveal-on-scroll projects-filter-tabs">
          {filterTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveFilter(tab.id)}
              className={`projects-filter-btn ${activeFilter === tab.id ? 'active' : ''}`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Projects Grid with 3D Tilt Cards */}
        <div className="projects-grid">
          {filteredProjects.map((project, idx) => (
            <Card3D
              key={project.id}
              className={`reveal-on-scroll delay-${(idx % 3) + 1} project-card-wrapper`}
              onClick={() => onSelectProject(project)}
            >
              {/* Handcrafted Real UI Preview */}
              <div className="project-preview-wrap">
                {renderPreview(project.id)}
              </div>

              {/* Card Body */}
              <div className="project-card-body">
                <div className="project-header-row">
                  <h3 className="project-title">
                    {project.title}
                  </h3>
                  <ArrowUpRight size={17} className="project-arrow-icon" />
                </div>

                <p className="project-tagline">
                  {project.tagline}
                </p>

                {/* Tech Chips */}
                <div className="project-tech-chips">
                  {project.tags.map((tag) => (
                    <span key={tag} className="badge">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Footer Action */}
                <div
                  className="project-footer"
                  onClick={(e) => e.stopPropagation()}
                >
                  <button
                    onClick={() => onSelectProject(project)}
                    className="project-details-btn"
                  >
                    System Architecture Details →
                  </button>

                  <div className="project-links-row">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link-btn"
                      title="GitHub Repository"
                    >
                      <GithubIcon size={14} />
                    </a>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link-btn"
                      title="Live System Endpoint"
                    >
                      <ExternalLink size={14} />
                    </a>
                  </div>
                </div>
              </div>
            </Card3D>
          ))}
        </div>
      </div>
    </section>
  );
}
