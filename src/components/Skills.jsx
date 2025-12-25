import React from 'react';
import './Skills.css';

const Skills = () => {
    const skillCategories = [
        {
            title: "Research Field",
            skills: ["Deep learning", "Computer vision", "Robotics"]
        },
        {
            title: "Language / Framework",
            skills: ["C/C++", "Python", "C#"]
        },
        {
            title: "Development Tools",
            skills: ["Tensorflow", "PyTorch", "Caffe", "ROS"]
        }
    ];

    return (
        <section id="skills" className="skills section-padding">
            <div className="container">
                <h2 className="section-title">Skills</h2>
                <div className="skills-grid">
                    {skillCategories.map((category, index) => (
                        <div key={index} className="skill-card">
                            <h3 className="skill-category-title">{category.title}</h3>
                            <div className="skill-tags">
                                {category.skills.map((skill, i) => (
                                    <span key={i} className="skill-tag">{skill}</span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
