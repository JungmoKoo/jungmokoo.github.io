import React from 'react';
import { FaExternalLinkAlt, FaPlay } from 'react-icons/fa';
import './Projects.css';
import lungoImg from '../assets/proj_lungo.jpg';
import tinyImg from '../assets/proj_tinyod.jpg';
import djiImg from '../assets/proj_dji.jpg';
import penebevImg from '../assets/proj_penebev.jpg';



// image: "https://placehold.co/600x400/050505/FFF?text=Arm+Control"

const Projects = () => {
    // Placeholder data - user can replace later
    const projects = [
        {
            title: "[NAVER LABS] LUNGO",
            type: "Robotics",
            image: lungoImg,
            // image: "https://img.youtube.com/vi/WG3WV0I0ln8/0.jpg",
            link: "https://www.youtube.com/watch?v=WG3WV0I0ln8",
            isVideo: true
        },
        {
            title: "[NAVER LABS] Rookie2",
            type: "Computer Vision / Robotics",
            image: "https://img.youtube.com/vi/yL6RieTPRG8/0.jpg",
            link: "https://www.youtube.com/watch?v=yL6RieTPRG8",
            isVideo: true
        },
        {
            title: "[NAVER LABS] Perception",
            type: "Computer Vision / Robotics",
            // image: "https://jungmokoo.github.io/penebev/assets/images/compare_1_cam2bev.png",
            image: penebevImg,
            link: "https://jungmokoo.github.io/penebev",
            isVideo: false
        },
        {
            title: "Tiny Object Detection (w.ADD)",
            type: "Computer Vision",
            // image: tinyImg,
            image: "https://img.youtube.com/vi/WfX563ndox0/0.jpg",
            link: "https://www.youtube.com/watch?v=WfX563ndox0",
            isVideo: true
        },
        {
            title: "[Seadronix] AVISS segmentation",
            type: "Computer Vision",
            image: "https://img.youtube.com/vi/eCzJrKvx6F0/0.jpg",
            link: "https://youtu.be/eCzJrKvx6F0?t=80",
            isVideo: true
        },
        {
            title: "DJI developer challenge",
            type: "Computer Vision / Robotics",
            image: djiImg,
            link: "https://www.youtube.com/watch?v=W1y--cfUjOs&t=502s",
            isVideo: true
        },
        {
            title: "Human Pose Estimation (w.KETI)",
            type: "Computer Vision",
            image: "https://img.youtube.com/vi/XoUrnQE3PcY/0.jpg",
            link: "https://www.youtube.com/watch?v=XoUrnQE3PcY",
            isVideo: true
        },
        {
            title: "JEROS (IEEE Spectrum)",
            type: "Computer Vision / Robotics",
            image: "https://spectrum.ieee.org/media-library/image.jpg?id=25573686&width=1200&height=814",
            link: "https://spectrum.ieee.org/jeros-jellyfish-elimination-robotic-swarm",
            isVideo: false
        },
        {
            title: "JEROS vision",
            type: "Computer Vision / Robotics",
            image: "https://img.youtube.com/vi/sZRiNSmyBcY/0.jpg",
            link: "https://www.youtube.com/watch?v=sZRiNSmyBcY",
            isVideo: true
        },
        {
            title: "Oil Spill Protection Robot",
            type: "Robotics",
            image: "https://img.youtube.com/vi/yPFgacnEjfo/0.jpg",
            link: "https://www.youtube.com/watch?v=yPFgacnEjfo",
            isVideo: true
        },
        {
            title: "국제로봇컨테스트 - 국무총리상",
            type: "Computer Vision / Robotics",
            image: "https://img1.newsis.com/2012/10/28/NISI20121028_0007245550_web.jpg",
            link: "https://www.newsis.com/view/NISX20121028_0011559983#:~:text=%EB%98%90%ED%95%9C%20%EA%B5%AD%EB%AC%B4%EC%B4%9D%EB%A6%AC%EC%83%81%EC%9D%80%20%EB%8F%99%EC%95%84%EB%8C%80%20%EB%8D%B0%EC%9A%B0%EC%8A%A4%ED%8C%80(%EC%A7%80%EB%8A%A5%ED%98%95%20SoC%EB%A1%9C%EB%B4%87%EC%9B%8C%20SoC%20%ED%83%9C%EA%B6%8C%EB%A1%9C%EB%B4%87%20%EB%B6%80%EB%AC%B8)%2C%20%EA%B2%BD%ED%9D%AC%EB%8C%80%20%EA%BF%80%ED%8C%80(%ED%83%90%EC%82%AC%EB%A1%9C%EB%B4%87%EB%8C%80%ED%9A%8C%20%ED%83%90%EC%82%AC%EB%A1%9C%EB%B4%87%20%EB%B6%80%EB%AC%B8)%EC%97%90%20%EB%8F%8C%EC%95%84%EA%B0%94%EB%8B%A4.",
            isVideo: false
        }
    ];

    return (
        <section id="projects" className="projects section-padding">
            <div className="container">
                <h2 className="section-title">Projects</h2>
                <div className="projects-grid">
                    {projects.map((project, index) => (
                        <a href={project.link} key={index} className="project-card" target="_blank" rel="noopener noreferrer">
                            <div className="project-image-wrapper">
                                <img src={project.image} alt={project.title} className="project-image" />
                                <div className="project-overlay">
                                    {project.isVideo ? <FaPlay className="project-icon" /> : <FaExternalLinkAlt className="project-icon" />}
                                </div>
                            </div>
                            <div className="project-info">
                                <span className="project-type">{project.type}</span>
                                <h3 className="project-title">{project.title}</h3>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;




