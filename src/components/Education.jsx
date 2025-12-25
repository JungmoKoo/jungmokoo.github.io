import React from 'react';
import './Education.css';

const Education = () => {
    const educationData = [
        {
            school: "KAIST",
            degree: "Ph.D. (All But Dissertation)",
            period: "2017 - 2025",
            description: "(Adviser: Prof. Hyun Myung) Research in Deep Learning, Computer Vision, and Robotics."
        },
        {
            school: "KAIST",
            degree: "M.S.",
            period: "2015 - 2017",
            description: "(Adviser: Prof. Hyun Myung) specializing in Robotics and Control."
        },
        {
            school: "Kyung Hee Univ.",
            degree: "BS",
            period: "2009 - 2015",
            description: "Major in Mechanical Engineering."
        }
    ];

    return (
        <section id="education" className="education section-padding">
            <div className="container">
                <h2 className="section-title">Education</h2>
                <div className="timeline">
                    {educationData.map((item, index) => (
                        <div key={index} className="timeline-item">
                            <div className="timeline-content">
                                <span className="timeline-year">{item.period}</span>
                                <h3 className="timeline-school">{item.school}</h3>
                                <h4 className="timeline-degree">{item.degree}</h4>
                                <p className="timeline-desc">{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Education;
