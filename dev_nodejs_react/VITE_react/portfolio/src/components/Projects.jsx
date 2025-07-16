import React, { useEffect, useRef } from 'react';
import VanillaTilt from 'vanilla-tilt';
import '../styles/Projects.css';

const Projects = () => {
  const imageRef = useRef();

useEffect(() => {
  const imageEls = document.querySelectorAll('.project-image');
  VanillaTilt.init(imageEls, {
    max: 15,
    speed: 400,
    glare: true,
    'max-glare': 0.2,
  });
}, []);
  return (
    <section id ="projects" section className="projects-section">
      <h2 className="section-title">PROJECTS</h2>
      <div className="project-container">
        <div className="project-description">
          <h3>직관적인 UI를 가진 도서 관리 시스템</h3>
          <p>
            전자 도서관 시스템을 구현한 미니 팀 프로젝트로써<br />책 검색, 대출/반납, 사용자 관리 기능 등을<br />포함했습니다.
          </p>
          <div className="project-links">
            <a href="https://github.com/jszxro/PK_miniproject_3" className="btn-outline">See Live</a>
          </div>
        </div>
        <div className="project-image">
          <img src="/Dockerfile_data/images/book.png" alt="프로젝트 이미지" />
        </div>
      </div>
      <br />
      <br />
      <div className="project-container">
        <div className="project-description">
          <h3>부산 지역별 최저가 상품 찾기<br/>웹 서비스</h3>
          <p>
            부산광역시의 7개 구(남구, 동래구, 부산진구, 북구,<br /> 사상구, 사하구, 해운대구)의 소비자 물가 데이터를<br /> 분석하고 시각화하여 보여주는 웹서비스 입니다.
          </p>
          <div className="project-links">
            <a href="https://github.com/BSEom/teamP_t1/tree/main" className="btn-outline">See Live</a>
          </div>
        </div>
        <div className="project-image">
          <img src="/Dockerfile_data/images/web.png" alt="프로젝트 이미지" />
        </div>
      </div>
      <br />
      <br />
      <div className="project-container">
        <div className="project-description">
          <h3>Github main</h3>
          <p>
            교육 동안 배운 기술 스택 각 종류별로 정리했습니다.<br />다양한 기술을 연마할 수 있었던<br />소중한 기간이었습니다.
          </p>
          <div className="project-links">
            <a href="https://github.com/BBiT808" className="btn-outline">See Live</a>
          </div>
        </div>
        <div className="project-image">
          <img src="/Dockerfile_data/images/github.png" alt="프로젝트 이미지" />
        </div>
      </div>
      <br />
      <br />
      <div className="project-container">
        <div className="project-description">
          <h3>HTML 및 JavaScript 정리 사이트</h3>
          <p>
            HTML과 JS를 정리한 웹페이지입니다.<br />배운 내용을 실습하며 구성했습니다.
          </p>
          <div className="project-links">
            <a href="https://bbit808.github.io/html/" className="btn-outline">See Live</a>
          </div>
        </div>
        <div className="project-image">
          <img src="/Dockerfile_data/images/html.png" alt="프로젝트 이미지" />
        </div>
      </div>
    </section>
  );
};

export default Projects;