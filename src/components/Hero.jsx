import React from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { SiGooglescholar } from 'react-icons/si';
import PerceptionField from './PerceptionField';
import './Hero.css';

const Hero = () => {
    return (
        <section id="hero" className="hero">
            <PerceptionField />
            <div className="hero-overlay" />

            <div className="hero-container container">
                <div className="hero-content">
                    <h1 className="hero-name">Jungmo&nbsp;Koo</h1>
                    <p className="hero-name-kr">구 정 모</p>

                    <p className="hero-tagline">
                        Building AI that <span className="hl">perceives</span>,{' '}
                        <span className="hl">reasons</span>, and <span className="hl">acts</span>{' '}
                        in the physical world.
                    </p>

                    <p className="hero-meta">AI · ROBOTICS · COMPUTER VISION · MARITIME AUTONOMY</p>

                    <div className="hero-actions">
                        <Link to="/about" className="btn btn-primary">About me</Link>
                        <Link to="/projects" className="btn btn-ghost">Projects</Link>
                        <Link to="/publications" className="btn btn-ghost">Publications</Link>
                    </div>

                    <div className="hero-socials">
                        <a href="https://github.com/JungmoKoo" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><FaGithub /></a>
                        <a href="https://www.linkedin.com/in/jungmo-koo/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FaLinkedin /></a>
                        <a href="https://scholar.google.com/citations?user=wtxxHUMAAAAJ" target="_blank" rel="noopener noreferrer" aria-label="Google Scholar"><SiGooglescholar /></a>
                        <a href="mailto:gooj978@gmail.com" aria-label="Email"><FaEnvelope /></a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
