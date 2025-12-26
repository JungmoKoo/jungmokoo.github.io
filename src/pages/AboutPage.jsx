import React from 'react';
import { FaGithub, FaEnvelope, FaPhone, FaDownload, FaLinkedin, FaHome } from 'react-icons/fa';
import profileImg from '../assets/jungmokoo.jpg';
import './AboutPage.css';

const AboutPage = () => {
    return (
        <div className="about-page">
            <div className="cv-controls container" style={{ maxWidth: '1000px', margin: '0 auto 20px', display: 'flex', justifyContent: 'flex-end' }}>
                <button className="download-cv-btn" onClick={() => window.print()}>
                    <FaDownload style={{ marginRight: '8px' }} /> Download CV
                </button>
            </div>

            <div className="cv-container">
                {/* Left Sidebar */}
                <aside className="cv-sidebar">
                    <img src={profileImg} alt="Profile" className="cv-profile-img" />
                    <h1 className="cv-name">
                        Jungmo Koo<br />
                        <span style={{ fontSize: '0.6em', fontWeight: '400' }}>구정모</span>
                    </h1>
                    <p className="cv-role">Researcher</p>

                    <div className="cv-contact-list">
                        <a href="mailto:gooj978@gmail.com" className="cv-contact-item">
                            <FaEnvelope /> gooj978@gmail.com
                        </a>
                        <a href="https://jungmokoo.github.io" target="_blank" rel="noopener noreferrer" className="cv-contact-item">
                            <FaHome /> jungmokoo.github.io
                        </a>
                        <a href="https://www.linkedin.com/in/jungmo-koo/" target="_blank" rel="noopener noreferrer" className="cv-contact-item">
                            <FaLinkedin /> LinkedIn
                        </a>
                        {/* <div className="cv-contact-item">
              <FaPhone /> +82 10-XXXX-XXXX
            </div> */}
                    </div>

                    <div className="cv-skills-section">
                        <div className="cv-skill-category">Research Field</div>
                        <div className="cv-skill-list">
                            <span className="cv-skill-tag">Deep Learning</span>
                            <span className="cv-skill-tag">Computer Vision</span>
                            <span className="cv-skill-tag">Robotics</span>
                        </div>

                        <div className="cv-skill-category">Languages</div>
                        <div className="cv-skill-list">
                            <span className="cv-skill-tag">C/C++</span>
                            <span className="cv-skill-tag">Python</span>
                            <span className="cv-skill-tag">C#</span>
                        </div>

                        <div className="cv-skill-category">Tools</div>
                        <div className="cv-skill-list">
                            <span className="cv-skill-tag">TensorFlow</span>
                            <span className="cv-skill-tag">PyTorch</span>
                            <span className="cv-skill-tag">Caffe</span>
                            <span className="cv-skill-tag">ROS/ROS2</span>
                        </div>
                    </div>
                </aside>

                {/* Main Content */}
                <main className="cv-main">
                    {/* Profile Section */}
                    <section className="cv-section">
                        <h2 className="cv-section-title">Profile</h2>
                        <p className="cv-bio">
                            I am a engineer specializing in AI, Computer Vision, and Robotics.
                            My work focuses on pushing the boundaries of autonomous systems and intelligent perception, real-world applications.
                        </p>
                    </section>

                    {/* New Experience Section */}
                    <section className="cv-section">
                        <h2 className="cv-section-title">Work Experience</h2>

                        <div className="cv-item">
                            <div className="cv-item-header">
                                <span className="cv-item-title">NAVER LABS</span>
                                <span className="cv-item-date">2022 - Present</span>
                            </div>
                            <div className="cv-item-subtitle">Researcher / Robot Vision</div>
                        </div>

                        <div className="cv-item">
                            <div className="cv-item-header">
                                <span className="cv-item-title">Seadronix</span>
                                <span className="cv-item-date">2020 - 2021</span>
                            </div>
                            <div className="cv-item-subtitle">Leader / AI</div>
                        </div>
                    </section>

                    {/* Research Interests */}
                    <section className="cv-section">
                        <h2 className="cv-section-title">Research Interests</h2>
                        <ul style={{ listStyle: 'disc', paddingLeft: '20px', color: 'var(--text-secondary)' }}>
                            <li style={{ marginBottom: '5px' }}>Object Detection & Segmentation</li>
                            <li style={{ marginBottom: '5px' }}>Depth Estimation</li>
                            <li style={{ marginBottom: '5px' }}>Real-time Efficient Neural Network Modeling</li>
                            <li style={{ marginBottom: '5px' }}>Real-world applications</li>
                        </ul>
                    </section>

                    {/* Education Section */}
                    <section className="cv-section">
                        <h2 className="cv-section-title">Education</h2>

                        <div className="cv-item">
                            <div className="cv-item-header">
                                <span className="cv-item-title">KAIST</span>
                                <span className="cv-item-date">2017 - 2025</span>
                            </div>
                            <div className="cv-item-subtitle">Ph.D. - ABD(수료) / Adviser: Prof. Hyun Myung</div>
                            <p className="cv-item-desc">
                                Research focus on Real-time AI in Robotics.
                            </p>
                        </div>

                        <div className="cv-item">
                            <div className="cv-item-header">
                                <span className="cv-item-title">KAIST</span>
                                <span className="cv-item-date">2015 - 2017</span>
                            </div>
                            <div className="cv-item-subtitle">M.S. - Adviser: Prof. Hyun Myung</div>
                            <p className="cv-item-desc">
                                Specialized AI Perception in Ocean Environment.
                            </p>
                        </div>

                        <div className="cv-item">
                            <div className="cv-item-header">
                                <span className="cv-item-title">Kyung Hee University</span>
                                <span className="cv-item-date">2009 - 2015</span>
                            </div>
                            <div className="cv-item-subtitle">B.S. in Electronic Engineering</div>
                        </div>
                    </section>

                </main>
            </div>
        </div>
    );
};

export default AboutPage;
