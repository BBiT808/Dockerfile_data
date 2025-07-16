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
import './FloatingTech.css'; // CSS 따로 만들었으면 여기에 연결!

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
        ･ 기본적인 CRUD 쿼리 이해<br />
        ･ DB 설치 및 기본 SQL 작성 가능<br />
        ･ PK와 FK로 구분되는 Key 속성을<br />&nbsp;&nbsp;활용하여 SQL 작성 가능<br />
        ･ 데이터베이스 구축 및 ERD 형성 가능<br />
        ･ 트랜잭션의 개념과 처리 방법 이해
        </>
      ),
    },
    {
      id: 'spring',
      label: 'Spring Boot',
      icon: <SiSpringboot size={32} color="#6db33f" />,
      description: (
        <>
        ･ 기초 서버 구현 및 웹 틀 구성 가능<br />
        ･ 어노테이션 기반 Controller 구현 가능<br />
        ･ Devcontainer를 활용한 Spring Boot<br />&nbsp;&nbsp;서버 개발 및 구현 가능
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
        ･ JSX 및 컴포넌트 기반 UI 설계 가능<br />
        ･ React Router를 활용한 페이지 간 라우팅 구현<br />
        ･ Axios를 이용한 비동기 통신 <br />&nbsp;&nbsp;및 데이터 처리 가능<br />
        ･ 컴포넌트 재사용 및 props/state 이해<br />&nbsp;&nbsp;및 활용 가능
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
        ･ Docker를 이용한 컨테이너 설계<br/>&nbsp;&nbsp;및 서버 구현 가능
        </>
      ),
    },
  ]
};


const FloatingTech = () => {
  return (
    <div className="floating-tech-container">
      {Object.entries(techData).map(([category, techList]) => (
        <div key={category} className="tech-category">
          <h1 className="tech-category-title">✨{category}✨</h1>
          <div className="tech-icons">
            {techList.map((tech) => (
              <div key={tech.id} className="tech-icon-with-tooltip">
                <div className="tech-icon">
                  {tech.icon}
                  <span>{tech.label}</span>
                </div>
                <div className="tooltip">
                  <p>{tech.description}</p>
                </div>
                <br />
                <br />
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};


export default FloatingTech;