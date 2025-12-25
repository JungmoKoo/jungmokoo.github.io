import React from 'react';
import { FaFilePdf, FaYoutube, FaGithub, FaHome } from 'react-icons/fa';
import { SiGooglescholar } from 'react-icons/si';
import './PublicationsPage.css';

const PublicationsPage = () => {
    const internationalJournals = [
        {
            title: "Real-time Bird’s-Eye-View Panoptic Segmentation for Monocular-based Indoor Navigation",
            authors: "Dawit Kim*, Jungmo Koo*, Jongseob Yun and Soonyong Park",
            venue: "Proc. of IEEE/RSJ Int’l Conf. on Intelligent Robots and Systems (IROS), Abu Dhabi, United Arab Emirates, Dec. 2024",
            links: { homepage: "https://jungmokoo.github.io/penebev/", paper: "https://ieeexplore.ieee.org/document/10802038" }
        },
        {
            title: "Light-weight Deep Neural Networks for Multi-target Classification",
            authors: "Jungmo Koo, Changgue Park, Hyung Tae Lim and Hyun Myung",
            venue: "Proc. of the 19th International Conference on Control, Automation and Systems (ICCAS), Jeju, Korea, Oct. 2019",
            links: {}
        },
        {
            title: "Vision-Based Real-Time Obstacle Segmentation Algorithm for Autonomous Surface Vehicle",
            authors: "Jungmo Koo*, Hanguen Kim*, Donghoon Kim, Byeolteo Park, Yonggil Jo and Hyun Myung & Donghwa Lee",
            venue: "IEEE Access, vol.7, no.1, pp.179420-179428, Dec. 2019",
            note: "(SCIE, Q1)",
            links: { paper: "https://ieeexplore.ieee.org/document/8932441" }
        },
        {
            title: "Effective Indoor Robot Localization by Stacked Bidirectional LSTM using Beacon-based Range Measurements",
            authors: "Hyungtae Lim, Jungmo Koo, and Hyun Myung",
            venue: "Proc. of Int’l Conf. on Robot Intelligence Technology and Applications (RiTA), Malaysia, Dec. 2018",
            links: {}
        },
        {
            title: "Recurrent Neural Networks for Range-based Indoor Robot Localization",
            authors: "Hyungtae Lim, Jungmo Koo, Jieum Hyun, and Hyun Myung",
            venue: "Proc. of IEEE/RSJ Int’l Conf. on Intelligent Robots and Systems (IROS), Madrid, Spain, Oct. 2018",
            links: {}
        },
        {
            title: "Particle swarm optimization-based receding horizon formation control of multi-agent surface vehicles",
            authors: "Donghoon Kim, Seung-Mok Lee, Sungwook Jung, Jungmo Koo and Hyun Myung",
            venue: "ARR (Advances in Robotics Research), vol.2, no.2, pp.161-182, Jun. 2018",
            note: "(non-SCI)",
            links: { paper: "https://koreascience.or.kr/article/JAKO201821142174676.page" }
        },
        {
            title: "Robust 2D human upper-body pose estimation with fully convolutional network",
            authors: "Seunghee Lee, Jungmo Koo, Jinki Kim and Hyun Myung",
            venue: "ARR (Advances in Robotics Research), vol.2, no.2, pp.129-140, Jun. 2018",
            note: "(non-SCI)",
            links: { paper: "https://koreascience.or.kr/article/JAKO201821142174650.page" }
        },
        {
            title: "Improving Play Method of Robot Soccer Game using Ball Position Estimation with Deep Neural Networks",
            authors: "Jungmo Koo, Seunghee Lee, Hyungtae Lim, and Hyun Myung",
            venue: "Proc. of IEEE Int’l Conf. on Robotics and Automation (ICRA), Brisbane, Australia, May 2018",
            links: {}
        },
        {
            title: "Development of Lifting Device-Type Jellyfish Removal Robot System for Large Jellyfish",
            authors: "Sungwook Jung, Jungmo Koo, Jieum Hyun, Jongheon Kim, and Hyun Myung",
            venue: "Proc. Int’l Conf. on Robot Intelligence Technology and Applications (RiTA), Daejeon, Korea, Dec. 2017",
            links: {}
        },
        {
            title: "A Robust Estimation of 2D Human Upper-body Poses using Fully Convolutional Network",
            authors: "Seunghee Lee, Jungmo Koo, Hyungjin Kim, Kwangyik Jung, and Hyun Myung",
            venue: "Proc. Int’l Conf. on Robot Intelligence Technology and Applications (RiTA), Daejeon, Korea, Dec. 2017",
            links: {}
        },
        {
            title: "Human Upper-Body Pose Estimation using Fully Convolutional Network and Joint Heatmap",
            authors: "Jungmo Koo, Seunghee Lee, Hyungjin Kim, Kwangyik Jung, Taekjun Oh, and Hyun Myung",
            venue: "Proc. of IEEE/RSJ Int’l Conf. on Intelligent Robots and Systems (IROS), Vancouver, Canada, Sep. 2017",
            links: {}
        },
        {
            title: "A Jellyfish Distribution Management System using an Unmanned Aerial Vehicle and Unmanned Surface Vehicles",
            authors: "Jungmo Koo, Sungwook Jung and Hyun Myung",
            venue: "Proc. of IEEE/OES Int’l Symposium on Underwater Technology (UT), Busan, Korea, Feb. 2017",
            links: {}
        },
        {
            title: "Image-Based Monitoring of Jellyfish using Deep Learning Architecture",
            authors: "Hanguen Kim, Jungmo Koo, Donghoon Kim, Sungwook Jung, Jae-Uk Shin, Serin Lee, and Hyun Myung",
            venue: "IEEE Sensors, vol.16, no.8, pp.2215-2216, Apr. 2016",
            note: "(SCI)",
            links: { paper: "https://ieeexplore.ieee.org/document/7381601" }
        },
        {
            title: "Intelligent monitoring system using deep learning",
            authors: "Hanguen Kim, Donghoon Kim, Sungwook Jung, Jungmo Koo, Jae-Uk Shin, and Hyun Myung",
            venue: "Proc. of Int’l Conf. on Ubiquitous Robots and Ambient Intelligence (URAI), Goyang, Korea, Oct. 2015",
            links: {}
        },
        {
            title: "Development of a jellyfish reconnaissance and removal robot system using unmanned aerial and surface vehicles",
            authors: "Donghoon Kim, Hangeun Kim, Sungwook Jung, Jungmo Koo, Jongheon Kim, Jae-Uk Shin, and Hyun Myung",
            venue: "Proc. of Int’l Conf. on Ubiquitous Robots and Ambient Intelligence (URAI), Goyang, Korea, Oct. 2015",
            links: {}
        },
        {
            title: "A Vision-Based Detection Algorithm for Moving Jellyfish in Underwater Environment",
            authors: "Donghoon Kim, Hangeun Kim, Sungwook Jung, Jungmo Koo, Jongheon Kim, and Hyun Myung",
            venue: "Proc. of Int’l Conf. on Ubiquitous Robots and Ambient Intelligence (URAI), Goyang, Korea, Oct. 2015",
            links: {}
        },
        {
            title: "A Deep Learning-based Jellyfish Distribution Monitoring System using an Unmanned Aerial Vehicle",
            authors: "Jungmo Koo, Hanguen Kim, Donghoon Kim, Sungwook Jung, and Hyun Myung",
            venue: "Proc. IEEE/RSJ Int’l Conf. on Intelligent Robots and Systems (IROS), Hamburg, Germany, Sep. 2015",
            links: {}
        }
    ];

    const domesticJournals = [
        {
            title: "다중 표적 분류를 위한 신경망 네트워크 경량화 기법",
            authors: "구정모, 박창규, 임형태, 성현승, 명현",
            venue: "2019 한국군사과학기술학회 종합학술대회, 제주 서귀포, June 13-14, 2019",
            links: {}
        },
        {
            title: "무인 항공기의 정찰 및 감시를 위한 HOG-LBP 기반 소형 물체 분류 SVM 알고리즘",
            authors: "임형태, 박창규 ,구정모, 명현, 성현승",
            venue: "2019 한국군사과학기술학회 종합학술대회, 제주 서귀포, June 13-14, 2019",
            links: {}
        },
        {
            title: "소형 물체 분류를 위한 특징 기반 심층 신경망 구조 개발",
            authors: "구정모, 임형태, 박창규, 성현승, 명현",
            venue: "제 14회 한국로봇종합학술대회 (KRoC 2019), 평창 휘닉스파크, pp.501-502, Jan.20-23, 2019",
            links: {}
        },
        {
            title: "초해상도 복원 특징을 활용한 소형 물체 분류 딥 뉴럴 네트워크 알고리즘",
            authors: "구정모, 임형태, 윤필립, 백하은, 명현",
            venue: "한국군사과학기술학회 종합학술대회, pp.507-508, 제주 컨벤션센터, Jun. 2018",
            links: {}
        },
        {
            title: "Deep Neural Network–based Jellyfish Distribution Recognition System Using a UAV (무인기를 이용한 심층 신경망 기반 해파리 분포 인식 시스템)",
            authors: "Jungmo Koo, Hyun Myung",
            venue: "Journal of Korea Robotics Society, vol.12, no.4 pp.432-440, Dec. 2017",
            links: { doi: "https://jkros.org/_common/do.php?a=full&b=33&bidx=2206&aidx=26233" }
        },
        {
            title: "운동 자세 인식을 위한 SVM 기반의 관절 추정 알고리즘",
            authors: "이승희, 김한근, 오택준, 구정모, 강상승, 지수영, 명현",
            venue: "제 12회 한국로봇종합학술대회 (KRoC 2017), 평창 휘닉스파크, pp.220-221, Feb. 5 - 8, 2017",
            links: {}
        },
        {
            title: "Vision-based Autonomous Landing System of an Unmanned Aerial Vehicle on a Moving Vehicle (무인 항공기의 이동체 상부로의 영상 기반 자동 착륙 시스템)",
            authors: "Sungwook Jung, Jungmo Koo, Kwangyik Jung, Hyungjin Kim, Hyun Myung",
            venue: "Journal of KROS, vol.11, no.4, pp.262-269, Nov. 2016",
            links: { link: "#" }
        },
        {
            title: "경량화된 딥 뉴럴 네트워크 기반의 실시간 해파리 분포 인식 시스템",
            authors: "구정모, 김한근, 김동훈, 정성욱, 명현",
            venue: "제 11회 한국로봇종합학술대회 (KRoC 2016), 평창 휘닉스파크, Jan. 2016",
            links: {}
        },
        {
            title: "기계학습을 이용한 영상기반 해파리 분포 인식 알고리즘 설계",
            authors: "김한근, 김동훈, 정성욱, 신재욱, 구정모, 명현",
            venue: "제30회 제어로봇시스템학회 (ICROS) 학술대회, 대전 DCC, May 2015",
            note: "(Best Paper Award)",
            links: {}
        }
    ];

    const LinkButton = ({ href, icon, text }) => {
        if (!href || href === '#') return null;
        return (
            <a href={href} className="pub-link-item" title={text} target="_blank" rel="noopener noreferrer">
                {icon} {text}
            </a>
        );
    };

    const renderSection = (title, items) => (
        <div className="publication-section">
            <h3 className="pub-section-header">{title}</h3>
            {items.map((pub, index) => (
                <div key={index} className="publication-item">
                    <h4 className="pub-title">
                        {pub.title} {pub.note && <span className="pub-note">{pub.note}</span>}
                    </h4>
                    <p className="pub-authors">{pub.authors}</p>
                    <p className="pub-venue">{pub.venue}</p>
                    <div className="pub-links">
                        <LinkButton href={pub.links?.homepage} icon={<FaHome />} text="Homepage" />
                        <LinkButton href={pub.links?.paper || pub.links?.link || pub.links?.doi} icon={<FaFilePdf />} text="Paper/DOI" />
                        <LinkButton href={pub.links?.video} icon={<FaYoutube />} text="Video" />
                        <LinkButton href={pub.links?.code} icon={<FaGithub />} text="Code" />
                    </div>
                </div>
            ))}
        </div>
    );

    return (
        <div className="page-container publications-page">
            <div className="container">
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1.5rem', marginBottom: '4rem' }}>
                    <h2 className="section-title" style={{ marginBottom: 0 }}>Publications</h2>
                    <a
                        href="https://scholar.google.com/citations?user=wtxxHUMAAAAJ"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="scholar-icon-link"
                        title="Google Scholar Profile"
                    >
                        <SiGooglescholar />
                    </a>
                </div>
                <div className="publications-list">
                    {renderSection("International", internationalJournals)}
                    {renderSection("Domestic", domesticJournals)}
                </div>
            </div>
        </div>
    );
};

export default PublicationsPage;
