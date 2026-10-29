import React from 'react';
import './TechRibbon.css';

export default function TechRibbon() {
  const techLogos = [
    { name: 'Python', mark: 'Python' },
    { name: 'HTML', mark: 'HTML' },
    { name: 'CSS', mark: 'CSS' },
    { name: 'JavaScript', mark: 'JavaScript' },
    { name: 'React JS', mark: 'React JS' },
    { name: 'AWS', mark: 'AWS' },
    { name: 'Gen AI', mark: 'Gen AI' },
    { name: 'MySQL', mark: 'MySQL' },
  ];

  return (
    <div className="tech-ribbon">
      <div className="container">
        <div className="tech-ribbon-track">
          {techLogos.map((item) => (
            <div key={item.name} className="tech-ribbon-item">
              {item.mark}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
