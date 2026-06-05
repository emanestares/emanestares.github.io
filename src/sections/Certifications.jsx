import React, { useState } from 'react';

const Certifications = () => {
  const [selected, setSelected] = useState(null);

  // Certificates are loaded from /public/certificates/
  // Name your files anything — they'll be listed here.
  // To add more, just drop images into public/certificates/ and add entries below.
  const certs = [
        {
      id: 1,
      title: "Learn Java",
      issuer: "Skillsoft",
      date: "2026",
      image: "/certificates/java.png",
    },
    {
      id: 2,
      title: "Agile For Software Develoment",
      issuer: "Skillsoft",
      date: "2026",
      image: "/certificates/agile.png",
    },
    {
      id: 3,
      title: "Spring and Spring Boot",
      issuer: "Skillsoft",
      date: "2026",
      image: "/certificates/spring.png",
    },
    {
      id: 4,
      title: "AI for Programmers",
      issuer: "Skillsoft",
      date: "2026",
      image: "/certificates/aiforprog.png",
    },
  ];

  return (
    <section className="certs-section" id="certifications">
      <div className="section-header">
        <span className="section-tag">Credentials</span>
        <h2 className="section-title">Certifications</h2>
        <p className="section-subtitle">
          Courses, trainings, and credentials I've earned along the way.
        </p>
      </div>

      <div className="certs-grid">
        {certs.map((cert) => (
          <button
            key={cert.id}
            className="cert-card"
            onClick={() => setSelected(cert)}
            aria-label={`View ${cert.title}`}
          >
            <div className="cert-img-wrap">
              <img
                src={cert.image}
                alt={cert.title}
                className="cert-img"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              {/* Fallback placeholder */}
              <div className="cert-placeholder" style={{ display: 'none' }}>
                <svg width="40" height="40" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1} className="text-neutral-600">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
                <span>Image not found</span>
              </div>
              <div className="cert-zoom-hint">Click to enlarge</div>
            </div>
            <div className="cert-info">
              <p className="cert-title">{cert.title}</p>
              <p className="cert-issuer">{cert.issuer}</p>
              <span className="cert-date">{cert.date}</span>
            </div>
          </button>
        ))}
      </div>

      {/* Lightbox */}
      {selected && (
        <div className="cert-lightbox" onClick={() => setSelected(null)}>
          <div className="cert-lightbox-inner" onClick={(e) => e.stopPropagation()}>
            <button className="cert-close" onClick={() => setSelected(null)} aria-label="Close">✕</button>
            <img src={selected.image} alt={selected.title} className="cert-lightbox-img" />
            <div className="cert-lightbox-info">
              <p className="cert-title">{selected.title}</p>
              <p className="cert-issuer">{selected.issuer} · {selected.date}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Certifications;
