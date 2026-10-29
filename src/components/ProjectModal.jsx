import React, { useEffect } from 'react';
import { X, ExternalLink, CheckCircle2 } from 'lucide-react';
import { GithubIcon } from './Icons';
import { HyperStreamPreview, CloudGatePreview, NexusPreview } from './ProjectPreviews';
import './ProjectModal.css';

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [onClose]);

  if (!project) return null;

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
    <div className="project-modal-overlay" onClick={onClose}>
      <div className="crafted-card project-modal-card" onClick={(e) => e.stopPropagation()}>
        {/* Close Button */}
        <button
          onClick={onClose}
          className="project-modal-close-btn"
          aria-label="Close modal"
        >
          <X size={17} />
        </button>

        {/* Handcrafted Real UI Preview */}
        <div className="project-modal-preview">
          {renderPreview(project.id)}
        </div>

        {/* Header */}
        <h2 className="project-modal-title">
          {project.title}
        </h2>
        <p className="project-modal-tagline">
          {project.tagline}
        </p>

        {/* Description */}
        <p className="project-modal-desc">
          {project.description}
        </p>

        {/* Key Metrics / Highlights */}
        {project.metrics && (
          <div className="project-modal-metrics">
            {project.metrics.map((metric, idx) => (
              <div key={idx} className="project-modal-metric-item">
                <CheckCircle2 size={15} className="project-modal-metric-icon" />
                <span>{metric}</span>
              </div>
            ))}
          </div>
        )}

        {/* Tags */}
        <div className="project-modal-tags">
          {project.tags.map((tag) => (
            <span key={tag} className="badge">
              {tag}
            </span>
          ))}
        </div>

        {/* Actions */}
        <div className="project-modal-actions">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-coral project-modal-action-btn"
          >
            <ExternalLink size={15} />
            <span>Launch Live Endpoint</span>
          </a>
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline project-modal-action-btn"
          >
            <GithubIcon size={15} />
            <span>Source Code</span>
          </a>
        </div>
      </div>
    </div>
  );
}
