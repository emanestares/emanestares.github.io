import React, { useState } from 'react';
import { workExperiences } from '../constants';

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
              <span className="work-exp-tab-icon">{job.icon}</span>
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
          {/* Accent line */}
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
              <div className="work-exp-icon-large">{active.icon}</div>
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
