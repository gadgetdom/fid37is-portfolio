import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from './ui/card';
import '../App.css'

const CertificationSec = () => {
  const certifications = [
    {
      id: 1,
      title: "Product Management",
      issuer: "DevCareer X UK-Nigeria Tech Hub",
      date: "2024",
      certificateUrl: "/Promgmt-certificate.png"
    },
    {
      id: 2,
      title: "Professional Scrum Master",
      issuer: "Scrum.org",
      date: "2023",
      certificateUrl: "Page-1.png"
    },
    {
      id: 3,
      title: "National Certificate in Education (Computer Science)",
      issuer: "Federal College of Education, Obudu",
      date: "2012",
      certificateUrl: "/NCE Result.png"
    },
    {
      id: 4,
      title: "Azure Developer Associate",
      issuer: "Microsoft",
      date: "2023",
      certificateUrl: "Page-1.png"
    }
  ];

  const [flippedCard, setFlippedCard] = useState(null);

  return (
    <div className="w-full max-w-6xl mx-auto p-4">
      <h2 className="text-3xl font-bold text-center mb-8">Certifications</h2>
      <h5>Showcasing the Pinnacle of Achievement: My Badge of Expertise and Certifications</h5>
      <div className="grid-container">
        {certifications.map((cert) => (
          <div 
            key={cert.id}
            className="card-container h-64"
            onMouseEnter={() => setFlippedCard(cert.id)}
            onMouseLeave={() => setFlippedCard(null)}
          >
            <div 
              className={`card ${flippedCard === cert.id ? 'flip' : ''}`}
            >
              <Card className="card-front">
                <CardHeader>
                  <CardTitle>{cert.title}</CardTitle>
                  <CardDescription>{cert.issuer}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">Issued: {cert.date}</p>
                </CardContent>
              </Card>
              
              <Card className="card-back">
                <CardContent className="p-0">
                  <img 
                    src={cert.certificateUrl}
                    alt={`${cert.title} Certificate`}
                    className="w-full h-full object-cover"
                  />
                </CardContent>
              </Card>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CertificationSec;
