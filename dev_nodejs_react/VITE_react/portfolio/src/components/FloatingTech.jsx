import { useState } from 'react';
import {
  SiJavascript,
  SiPython,
  SiOracle,
  SiSpringboot,
  SiReact,
  SiGithub,
  SiDocker,
} from 'react-icons/si';
import '../styles/FloatingTech.css'; // CSS 따로 만들었으면 여기에 연결!

const techData = {
  Language: [
    {
      id: 'javascript',
      label: 'JavaScript',
      icon: <SiJavascript size={32} color="#f7df1e" />,
      description: (
        <>
        ･ 웹페이지 동작 구현 및 서버 구축 기초 가능<br />
        ･ HTML과 CSS3를 이용한 구조 설계<br />&nbsp;&nbsp;및 레이아웃 스타일링 가능
      </>
      ),
    },
    {
      id: 'python',
      label: 'Python',
      icon: <SiPython size={32} color="#3776ab" />,
      description: (
        <>
        ･ 내장 라이브러리 이해 및 사용 가능<br/>
        ･ pandas, Selenium 등 데이터 기반<br/>&nbsp;&nbsp;외부 라이브러리 이해 및 활용 가능
        </>
      ),
    },
  ],
  Technics: [
    {
      id: 'oracle',
      label: 'Oracle 11g',
      icon: <SiOracle size={32} color="#f80000" />,
      description: (
        <>
        ･ DB 설치 및 기본 SQL 작성 가능<br />
        ･ PK와 FK로 구분되는 Key 속성을<br />&nbsp;&nbsp;활용하여 SQL 작성 가능<br />
        ･ 데이터베이스 구축 및<br />&nbsp;&nbsp;ERD 형성 가능<br />
        ･ 트랜잭션의 개념과 처리 <br />&nbsp;&nbsp;방법 이해
        </>
      ),
    },
    {
      id: 'spring',
      label: 'Spring Boot',
      icon: <SiSpringboot size={32} color="#6db33f" />,
      description: (
        <>
        ･ 기초 서버 구현 및 웹 틀<br />&nbsp;&nbsp; 구성 가능<br />
        ･ 어노테이션 기반 Controller<br />&nbsp;&nbsp;구현 가능<br />
        ･ Devcontainer를 활용한 <br />&nbsp;&nbsp;Spring Boot 서버 개발 및<br />&nbsp;&nbsp;구현 가능
        </>
      ),
    },
    {
      id: 'react',
      label: 'React',
      icon: <SiReact size={32} color="#61dafb" />,
      description: (
        <>
        ･ Vite 기반 프로젝트 구성 가능<br />
        ･ JSX 및 컴포넌트 기반<br />&nbsp;&nbsp;UI 설계 가능<br />
        ･ React Router를 활용한<br />&nbsp;&nbsp;페이지 간 라우팅 구현<br />
        ･ Axios를 이용한 비동기 통신 <br />&nbsp;&nbsp;/ 데이터 처리 가능<br />
        </>
      ),
    },
  ],
  Tool: [
    {
      id: 'github',
      label: 'GitHub',
      icon: <SiGithub size={32} color="#000" />,
      description: (
        <>
        ･ Git을 활용한 팀프로젝트 협업 가능 
        </>
      ),
    },
    {
      id: 'docker',
      label: 'Docker',
      icon: <SiDocker size={32} color="#2496ed" />,
      description: (
        <>
        ･ Docker를 이용한 컨테이너 설계 및 서버 구현 가능
        </>
      ),
    },
  ]
};


const FloatingTech = () => {
  return (
<section id = "tech" section className="tech-section">
  <h2 className="section-title">Skills</h2>
 <br />
 <br />
  {Object.entries(techData).map(([category, techList]) => (
    <div key={category} className="tech-category-box">
      <h3 className="category-title">{category}</h3>
      <div className="tech-grid">
        {techList.map((tech) => (
          <div key={tech.id} className="tech-card">
            <div className="icon-label">
              {tech.icon}
              <span>{tech.label}</span>
            </div>
            <div className="description">
              {tech.description}
            </div>
          </div>
        ))}
      </div>
    </div>
  ))}
</section>
  );
};


export default FloatingTech;
