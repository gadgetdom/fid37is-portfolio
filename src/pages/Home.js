import React from 'react';
import { useState } from "react";
import "./Home.css";
import gg from '../assets/img/gg.png';
import CertificationSection from '../components/Certifications';

const Home = () => {
    const [hovered, setHovered] = useState(false);

    const skills = [
        { name: "Devops", details: "Backend experience with Express.js." },
        { name: "Scripting", details: "State management for large applications." },
        { name: "Product Mgmt", details: "Proficient in product management and leading an agile team." },
        { name: "Testing", details: "Manual and automated testing, Cypress" },
        { name: "Scrum Master", details: "Skilled in Flexbox, Grid, and animations." },
        { name: "JavaScript", details: "Proficient in ES6+, DOM manipulation, React, Vue" },
        { name: "Git", details: "Version control and collaboration." },
        { name: "Figma", details: "UI/UX design and prototyping." },
        { name: "HTML/CSS", details: "Expert in semantic HTML and accessibility. CSS -  Flexbox, Grid, and animations." },
        { name: "ICT Support", details: "Experienced in hooks, state management." },
    ];

    return (
        <div className="page-container no-select">
            <h1>Technical Specialist & UX/UI Designer</h1>
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
            <div className={`text-column ${hovered ? "shifted" : ""}`}>
            <p>
            I am a versatile professional with expertise in computer troubleshooting, UX research, UI/UX design, and frontend development (HTML, CSS, JavaScript). Skilled in software QA (manual & automated) and ensuring top-notch functionality. Experienced in graphic design, product management, and Scrum Master roles, offering a holistic product lifecycle understanding. Currently exploring DevOps to enhance full-stack capabilities. Passionate about creating innovative, user-centered tech solutions.
            </p>
            </div>
        </section>

        {/* Second Section - Skills */}
        <section className="skills-section">
    <h2>Skills</h2>
    <div className="skills-container">
        {skills.map((skill, index) => (
            <div key={index} className="skill-box">
                <span>{skill.name}</span>
                <div className="skill-banner">{skill.details}</div>
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