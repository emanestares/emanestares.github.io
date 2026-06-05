import React, { useState } from 'react';
import { workExperiences } from '../constants';

// Crisp SVG icons keyed by iconKey — no emoji, fully theme-consistent
const WorkIcon = ({ iconKey, color, size = 22 }) => {
  const s = { width: size, height: size, flexShrink: 0 };
  const props = { fill: 'none', stroke: color, strokeWidth: 1.8, strokeLinecap: 'round', strokeLinejoin: 'round', viewBox: '0 0 24 24', style: s };

  switch (iconKey) {
    case 'briefcase':
      return (
        <svg {...props}>
          <rect x="2" y="7" width="20" height="14" rx="2" />
          <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
          <line x1="12" y1="12" x2="12" y2="12" strokeWidth="3" />
          <path d="M2 12h20" />
        </svg>
      );
    case 'printer':
      return (
        <svg {...props}>
          <polyline points="6 9 6 2 18 2 18 9" />
          <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" />
          <rect x="6" y="14" width="12" height="8" />
        </svg>
      );
    case 'shield':
      return (
        <svg {...props}>
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <polyline points="9 12 11 14 15 10" />
        </svg>
      );
    case 'globe':
      return (
        <svg {...props}>
          <circle cx="12" cy="12" r="10" />
          <line x1="2" y1="12" x2="22" y2="12" />
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        </svg>
      );
    case 'book':
      return (
        <svg {...props}>
          <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
          <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
          <line x1="12" y1="6" x2="16" y2="6" />
          <line x1="12" y1="10" x2="16" y2="10" />
        </svg>
      );
    default:
      return (
        <svg {...props}>
          <circle cx="12" cy="12" r="10" />
          <line x1="12" y1="8" x2="12" y2="12" />
          <line x1="12" y1="16" x2="12.01" y2="16" />
        </svg>
      );
  }
};

const WorkExperience = () => {
  const [activeId, setActiveId] = useState(workExperiences[0].id);
  const active = workExperiences.find((w) => w.id === activeId);

  return (
    <section className="work-exp-section" id="experience">
      <div className="section-header">
        <span className="section-tag">Career</span>
        <h2 className="section-title">Work Experience</h2>
        <p className="section-subtitle">
          A timeline of roles where I've built real products and grown as a developer.
        </p>
      </div>

      <div className="work-exp-layout">
        {/* Timeline sidebar */}
        <div className="work-exp-sidebar">
          {workExperiences.map((job) => (
            <button
              key={job.id}
              className={`work-exp-tab ${activeId === job.id ? 'work-exp-tab-active' : ''}`}
              onClick={() => setActiveId(job.id)}
              style={activeId === job.id ? { '--job-color': job.color } : {}}
            >
              <span className="work-exp-tab-icon-wrap" style={{
                background: activeId === job.id ? `${job.color}18` : 'rgba(255,255,255,0.04)',
                border: `1px solid ${activeId === job.id ? job.color + '55' : 'rgba(255,255,255,0.08)'}`,
                borderRadius: '10px',
                width: '2.4rem',
                height: '2.4rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
                transition: 'all 0.2s',
              }}>
                <WorkIcon iconKey={job.iconKey} color={activeId === job.id ? job.color : 'rgba(255,255,255,0.45)'} size={16} />
              </span>
              <div className="work-exp-tab-info">
                <span className="work-exp-tab-company">{job.company}</span>
                <span className="work-exp-tab-period">{job.period}</span>
              </div>
              <span
                className="work-exp-tab-indicator"
                style={{ background: activeId === job.id ? job.color : 'transparent' }}
              />
            </button>
          ))}
        </div>

        {/* Detail panel */}
        <div className="work-exp-detail" key={active.id}>
          <div className="work-exp-accent-bar" style={{ background: active.color }} />

          <div className="work-exp-detail-inner">
            <div className="work-exp-header-row">
              <div>
                <span className="work-exp-type-badge" style={{ color: active.color, borderColor: active.color, background: `${active.color}18` }}>
                  {active.type}
                </span>
                <h3 className="work-exp-role">{active.role}</h3>
                <p className="work-exp-company-name">{active.company}</p>
              </div>
              {/* SVG icon replacing the large emoji */}
              <div className="work-exp-icon-large" style={{
                background: `${active.color}14`,
                border: `1px solid ${active.color}33`,
                borderRadius: '14px',
                width: '3.5rem',
                height: '3.5rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
              }}>
                <WorkIcon iconKey={active.iconKey} color={active.color} size={24} />
              </div>
            </div>

            <p className="work-exp-description">{active.description}</p>

            <div className="work-exp-tech-row">
              <span className="work-exp-tech-label">Tech Stack</span>
              <div className="work-exp-tech-chips">
                {active.tech.map((t) => (
                  <span key={t} className="work-exp-chip" style={{ borderColor: `${active.color}55`, color: active.color }}>
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="work-exp-period-row">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                <line x1="16" y1="2" x2="16" y2="6"/>
                <line x1="8" y1="2" x2="8" y2="6"/>
                <line x1="3" y1="10" x2="21" y2="10"/>
              </svg>
              {active.period}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;
