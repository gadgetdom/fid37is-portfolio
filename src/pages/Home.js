import React, { useState, useEffect, useMemo } from 'react';
import './Home.css';
import gg from '../assets/img/gg.png';
import CertificationSection from '../components/Certifications';

const Home = () => {
    const [hovered, setHovered] = useState(false);
    const [randomSkills, setRandomSkills] = useState([]);
    const [bgImage, setBgImage] = useState('');

    const skills = useMemo(() => [
        'Devops', 'Scripting', 'Product Mgmt', 'Testing', 'Scrum Master',
        'JavaScript', 'Git', 'Figma', 'HTML/CSS', 'ICT Support'
    ], []);

    const services = [
        { name: 'IT Support Consulting', description: 'Providing expert IT support and consulting services.' },
        { name: 'Web Application Design', description: 'Designing user-friendly and responsive web applications.' },
        { name: 'Mobile App Design', description: 'Creating intuitive and engaging mobile app designs.' },
        { name: 'Product Go to Market Research', description: 'Conducting comprehensive market research for product launches.' },
        { name: 'Frontend Development', description: 'Building efficient and scalable frontend applications.' },
        { name: 'Product Management', description: 'Expertise in product management and agile methodologies.' }
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setRandomSkills(skills.sort(() => Math.random() - 0.5));
        }, 2000);
        return () => clearInterval(interval);
    }, [skills]);

    const handleMouseEnter = () => {
        const bgImages = ['url(/path/to/abstract1.jpg)', 'url(/path/to/abstract2.jpg)', 'url(/path/to/abstract3.jpg)'];
        const randomImage = bgImages[Math.floor(Math.random() * bgImages.length)];
        setBgImage(randomImage);
    };

    return (
        <div className="page-container no-select">
            <h1>About Me</h1>

            {/* First Section */}
            <section
                className="first-section"
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
            >
                {hovered && (
                    <div className="image-column">
                        <img src={gg} alt="Descriptive Alt" />
                    </div>
                )}
                <div className={`text-column ${hovered ? 'shifted' : ''}`}>
                    <p>
                        I am a versatile professional with expertise in computer troubleshooting, UX research, UI/UX design, and frontend development (HTML, CSS, JavaScript). Skilled in software QA (manual & automated) and ensuring top-notch functionality. Experienced in graphic design, product management, and Scrum Master roles, offering a holistic product lifecycle understanding. Currently exploring DevOps to enhance full-stack capabilities. Passionate about creating innovative, user-centered tech solutions.
                    </p>
                </div>
            </section>

            {/* Second Section - Skills */}
            <section className="skills-section">
                <h1>Skills</h1>
                <h5>Showcasing the Pinnacle of Achievement: My Badge of Expertise and Certifications</h5>
                <div className="skills-container">
                    {randomSkills.map((skill, index) => (
                        <div key={index} className="skill-box" style={{ animation: `move ${Math.random() * 5 + 3}s infinite` }}>
                            <span>{skill}</span>
                        </div>
                    ))}
                </div>
            </section>

            {/* New Section - Services */}
            <section
                className="services-section"
                style={{ backgroundImage: bgImage }}
                onMouseEnter={handleMouseEnter}
            >
                <h1>Services</h1>
                <h5>Showcasing the Pinnacle of Achievement: My Badge of Expertise and Certifications</h5>
                <div className="services-container">
                    {services.map((service, index) => (
                        <div key={index} className="service-card">
                            <h3>{service.name}</h3>
                            <p>{service.description}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Third Section - Certifications */}
            <section className="certifications-section">
                <CertificationSection />
            </section>
        </div>
    );
};

export default Home;
