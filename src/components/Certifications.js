import React, { useState } from 'react';

const CertificationSection = () => {
  const [showPdf, setShowPdf] = useState(false);
  const [selectedPdf, setSelectedPdf] = useState(null);

  const certifications = [{
    id: 1,
    title: "Fidelis Agba CV",
    date: "2024",
    description: "Curriculum Vitae",
    pdfUrl: "/Fidelis_Agba_CV.pdf",
    thumbnail: "/thumbnail.jpg" // Add a thumbnail image
  }];

  return (
    <section style={{ maxWidth: '1200px', margin: '0 auto', padding: '2rem' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '2rem', fontSize: '2rem' }}>
        Certifications
      </h2>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        {certifications.map((cert, index) => (
          <div key={cert.id} 
               style={{ 
                 display: 'flex', 
                 flexDirection: index % 2 === 0 ? 'row' : 'row-reverse',
                 gap: '2rem',
                 alignItems: 'center',
                 '@media (max-width: 768px)': {
                   flexDirection: 'column'
                 }
               }}>
            <div style={{ flex: 1 }}>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>{cert.title}</h3>
              <p style={{ color: '#666' }}>{cert.description}</p>
              <p style={{ color: '#888', marginTop: '0.5rem' }}>{cert.date}</p>
            </div>

            <div 
              onClick={() => {
                setSelectedPdf(cert.pdfUrl);
                setShowPdf(true);
              }}
              style={{ 
                cursor: 'pointer',
                transition: 'transform 0.3s',
                flex: 1,
                maxWidth: '300px'
              }}
              onMouseEnter={e => e.target.style.transform = 'scale(1.05)'}
              onMouseLeave={e => e.target.style.transform = 'scale(1)'}
            >
              <img src={cert.thumbnail} alt="Certification Thumbnail" style={{ width: '100%', height: 'auto', borderRadius: '8px' }} />
            </div>
          </div>
        ))}
      </div>

      {showPdf && selectedPdf && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.8)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 9999
        }}>
          <div style={{
            position: 'relative',
            width: '90vw',
            height: '90vh',
            backgroundColor: 'white',
            padding: '1rem'
          }}>
            <button 
              onClick={() => setShowPdf(false)}
              style={{
                position: 'absolute',
                top: '1rem',
                right: '1rem',
                background: 'none',
                border: 'none',
                fontSize: '1.5rem',
                cursor: 'pointer',
                zIndex: 10000
              }}
            >
              ✕
            </button>
            <object
              data={selectedPdf}
              type="application/pdf"
              style={{ width: '100%', height: '100%' }}
            >
              <p>PDF cannot be displayed</p>
            </object>
          </div>
        </div>
      )}
    </section>
  );
};

export default CertificationSection;