import React from 'react';
import { FaGithub, FaEnvelope } from 'react-icons/fa';
import './About.css';

const About = () => {
    return (
        <section id="about" className="about section-padding">
            <div className="container">
                <h2 className="section-title">About Me</h2>
                <div className="about-content">
                    <div className="about-card">
                        <p className="about-text">
                            I am a researcher specializing in AI, Computer Vision, and Robotics.
                            My work focuses on pushing the boundaries of autonomous systems and intelligent perception.
                        </p>
                        <div className="contact-links">
                            <a href="mailto:gooj978@gmail.com" className="contact-item">
                                <FaEnvelope className="contact-icon" />
                                <span>gooj978@gmail.com</span>
                            </a>
                            <a href="https://github.com/JungmoKoo" target="_blank" rel="noopener noreferrer" className="contact-item">
                                <FaGithub className="contact-icon" />
                                <span>github.com/JungmoKoo</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
