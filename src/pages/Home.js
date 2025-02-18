import React from 'react';
import { useState } from "react";
import "./Home.css";

const Home = () => {
    const [hovered, setHovered] = useState(false);

    return (
        <div className="page-container no-select">
        {/* First Section */}
        <section
            className="first-section"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            {hovered && (
            <div className="image-column">
                <img src="your-image.jpg" alt="Descriptive Alt" />
            </div>
            )}
            <div className={`text-column ${hovered ? "shifted" : ""}`}>
            <h1>Welcome to My Portfolio</h1>
            <p>
            I am a versatile and detail-oriented professional with a strong foundation in computer system troubleshooting, UX research, UI/UX design, and frontend development. With hands-on experience in HTML, CSS, and JavaScript, I focus on creating intuitive user interfaces that enhance the overall user experience. My background also includes expertise in software quality assurance, both manual and automated, ensuring top-notch functionality and performance across projects.
Beyond my core technical skills, I possess proficiency in graphic design, product management, and have acted as a Scrum Master in agile environments. These roles have helped me develop a holistic understanding of the product lifecycle, from conceptualization to execution.
Currently, I am expanding my skill set by exploring DevOps practices to further enhance my ability to contribute to the full development pipeline.
I’m passionate about leveraging my diverse skill set to create innovative, user-centered solutions in technology.
            </p>
            </div>
        </section>

        {/* Second Section - Skills */}
        <section className="skills-section">
            <h2>Skills</h2>
        </section>

        {/* Third Section - Certifications */}
        <section className="certifications-section">
            <h2>Certifications</h2>
        </section>
        </div>
    );
};

export default Home;