import React from 'react';
import { Link } from 'react-router-dom';
import Background3D from './Background3D';
import './Hero.css';

const Hero = () => {
    return (
        <section id="hero" className="hero">
            <Background3D />
            <div className="hero-container container">
                <div className="hero-content">
                    <p className="hero-greeting">Hello, I'm</p>
                    <h1 className="hero-name">
                        Jungmo Koo <span className="hero-name-kr">구정모</span>
                    </h1>
                    <h2 className="hero-role">
                        AI <span className="separator">+</span> Robotics <span className="separator">+</span> Computer Vision
                    </h2>
                    <div className="hero-actions">
                        <Link to="/about" className="btn btn-primary">About Me</Link>
                        <Link to="/projects" className="btn btn-secondary">View Projects</Link>
                        <a href="mailto:jungmo.koo@gmail.com" className="btn btn-secondary">Contact Me</a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
