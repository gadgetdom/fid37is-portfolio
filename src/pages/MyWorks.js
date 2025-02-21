import React, { useState } from 'react';
import './MyWorks.css';

const works = {
    uiux: [
        { title: "UI/UX Project 1", media: ["https://via.placeholder.com/400", "https://via.placeholder.com/400"] },
        { title: "UI/UX Project 1", media: ["https://via.placeholder.com/400", "https://via.placeholder.com/400"] },
        { title: "UI/UX Project 1", media: ["https://via.placeholder.com/400", "https://via.placeholder.com/400"] },
        { title: "UI/UX Project 1", media: ["https://via.placeholder.com/400", "https://via.placeholder.com/400"] },
        { title: "UI/UX Project 2", media: ["https://via.placeholder.com/400", "https://via.placeholder.com/400"] }
    ],
    frontend: [
        { title: "Frontend Project 1", media: ["https://via.placeholder.com/400", "https://via.placeholder.com/400"] },
        { title: "Frontend Project 2", media: ["https://via.placeholder.com/400", "https://via.placeholder.com/400"] }
    ]
};

function MyWorks() {
    const [category, setCategory] = useState("uiux");
    const [mediaIndex, setMediaIndex] = useState({});

    const handlePrev = (index) => {
        setMediaIndex((prev) => ({
            ...prev,
            [index]: (prev[index] || 0) - 1 < 0 ? works[category][index].media.length - 1 : (prev[index] || 0) - 1
        }));
    };

    const handleNext = (index) => {
        setMediaIndex((prev) => ({
            ...prev,
            [index]: (prev[index] || 0) + 1 >= works[category][index].media.length ? 0 : (prev[index] || 0) + 1
        }));
    };

    return (
        <div className="works-container">
            <div className="button-group">
                <button onClick={() => setCategory("uiux")} className={`toggle-button ${category === "uiux" ? "active" : ""}`}>UI/UIX</button>
                <button onClick={() => setCategory("frontend")} className={`toggle-button ${category === "frontend" ? "active" : ""}`}>Frontend</button>
            </div>
            <div className="works-section">
                {works[category].map((work, index) => (
                    <div
                        key={index}
                        className="work-item"
                    >
                        <h2>{work.title}</h2>
                        <div className="media-container">
                            <img src={work.media[mediaIndex[index] || 0]} alt={work.title} />
                            <div className="nav-buttons">
                                <button onClick={() => handlePrev(index)}>Previous</button>
                                <button onClick={() => handleNext(index)}>Next</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default MyWorks;
