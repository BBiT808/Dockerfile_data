import { Typewriter } from 'react-simple-typewriter'
import './Home.css'

const Home = () => {
  return (
    <div className="home">
      <section id="about1" className="content">
        <h1>💙 김은희 💙</h1>
        <p style={{fontSize : "40px"}}>신입 웹 개발자 포트폴리오</p>
        <div className="intro-box">
          <div className="intro-main">
  <Typewriter
    words={['안녕하세요! 초보 개발자 김은희입니다 :)']}
    loop={true}
    cursor
    cursorStyle="_"
    typeSpeed={100}
    deleteSpeed={50}
    delaySpeed={1500}
  />
  <br />
  <br />
</div>
<div className="my-box"></div>
          <p className="intro-text">
            <br />
            비전공자이지만 코딩에 매력을 느껴 <br />개발자를 꿈꾸게 되었습니다. <br /><br />
            끊임 없이 배우고 노력하여 <br />발전하는 개발자가 되겠습니다.
          </p>
        </div>
      </section>

      <section id="about2" className="content">
        <h1>⬇️ About ⬇️</h1>
        <br />
        <br />
          <div className="intro-main">
         <div className="info-box-grid">
  <div className="info-card">🤗 <strong>이름 :</strong><br />김은희</div>
  <div className="info-card">👨‍🎓 <strong>전공 :</strong>부경대학교 생태공학
    <br />➕<strong>복수전공 :</strong>미생물학</div>
  <div className="info-card">🎂 <strong>생일 :</strong><br />1997년 10월 31일</div>
  <div className="info-card">🏡 <strong>거주지 :</strong><br />부산광역시 북구</div>
  
  <a href="https://github.com/BBiT808" target="_blank" rel="noreferrer" className="info-card clickable">
    🔗 <strong>Github:</strong><br />github.com/BBiT808
  </a>
  
  <a href="mailto:pinokio1031@naver.com" className="info-card clickable">
    📬 <strong>E-mail:</strong><br />pinokio1031@naver.com
  </a>
</div>
        </div>
      </section>

      <section id="technology" className="tech-content">
      <h1>🛠️ Technology 🛠️</h1>
      <br />
      <br />
      <div className="tech-container">
        <div className="tech-item">
          <span className="tech-label">JavaScript</span>
          <span className="tech-description">
            • 웹페이지 동작 구현 및 서버 구축 기초 가능<br/>
            • HTML과 CSS3를 이용한 구조 설계 및 레이아웃 스타일링 가능<br/>
            • React를 이용한 SPA 구조 구현 경험
          </span>
        </div>
        <div className="tech-item">
          <span className="tech-label">Python</span>
          <span className="tech-description">
            • 내장 라이브러리 이해 및 사용 가능<br/>
            • pandas, Selenium 등 데이터 기반 외부 라이브러리 이해 및 활용 가능
          </span>
        </div>
        <div className="tech-item">
          <span className="tech-label">Oracle 11g</span>
          <span className="tech-description">
            • 기본적인 CRUD 쿼리 이해<br/>
            • DB 설치 및 기본 SQL 작성 가능<br/>
            • PK와 FK로 구분되는 Key 속성을 활용하여 SQL 작성 가능<br/>
            • 데이터베이스 구축 및 ERD 형성 가능<br/>
            • 트랜잭션의 개념과 처리 방법 이해
          </span>
        </div>
        <div className="tech-item">
          <span className="tech-label">Spring Boot</span>
          <span className="tech-description">
            • 기초 서버 구현 및 웹 틀 구성 가능<br/>
            • 어노테이션 기반 Controller 구현 가능<br/>
            • Devcontainer를 활용한 Spring Boot 서버 개발 및 구현 가능
          </span>
        </div>
        <div className="tech-item">
  <span className="tech-label">React</span>
  <span className="tech-description">
    • Vite 기반 프로젝트 구성 가능<br />
    • JSX 및 컴포넌트 기반 UI 설계 가능<br />
    • React Router를 활용한 페이지 간 라우팅 구현<br />
    • Axios를 이용한 비동기 통신 및 데이터 처리 가능<br />
    • 컴포넌트 재사용 및 props/state 이해 및 활용 가능
  </span>
</div>
        <div className="tech-item">
          <span className="tech-label">GitHub</span>
          <span className="tech-description">
            • Git을 활용한 팀프로젝트 협업 가능
          </span>
        </div>
        <br />
        <br />
      </div>
      </section>

      <section id="projects" className="content">
        <h1>📦 Projects 📦</h1>
        <div className="projects">
          <a href="https://github.com/jszxro/PK_miniproject_3" target="_blank" rel="noreferrer">
            <div className="project-box light-green">
              <div className="horizontal-box">

              <img src="/images/book.png" alt="도서 관리 시스템 이미지" className="project-img-side" />

              <div className="project-text">
              <h2>📘 직관적인 UI를 가진 도서 관리 시스템</h2>
              <p>전자 도서관 시스템을 구현한 미니 팀 프로젝트로써<br />책 검색, 대출/반납, 사용자 관리 기능 등을 포함했습니다.</p>
              </div>
            </div>
            </div>
          </a>
          <a href="https://github.com/jszxro/PK_miniproject_3" target="_blank" rel="noreferrer">
            <div className="project-box light-green">
              <div className="horizontal-box">

              <img src="/images/book.png" alt="도서 관리 시스템 이미지" className="project-img-side" />

              <div className="project-text">
              <h2>📘 직관적인 UI를 가진 도서 관리 시스템</h2>
              <p>전자 도서관 시스템을 구현한 미니 팀 프로젝트로써<br />책 검색, 대출/반납, 사용자 관리 기능 등을 포함했습니다.</p>
              </div>
            </div>
            </div>
          </a>
          <a href="https://github.com/BBiT808" target="_blank" rel="noreferrer">
            <div className="project-box mint">
              <div className="horizontal-box">

              <img src="/images/github.png" alt="깃허브 레포지토리" className="project-img-side" />

              <div className="project-text">
              <h2>🖥️ Github main</h2>
              <p>교육 동안 배운 기술 스택 각 종류별로 정리했습니다.<br />다양한 기술을 연마할 수 있었던 소중한 기간이었습니다.</p>
              </div>
            </div>
            </div>
          </a>
          <a href="https://bbit808.github.io/html/" target="_blank" rel="noreferrer">
            <div className="project-box yellow">
              <div className="horizontal-box">
              <img src="/images/html.png" alt="정리 사이트 이미지" className="project-img-side" />
              <div className="project-text">
              <h2>💕 HTML 및 JavaScript 정리 사이트</h2>
              <p>HTML과 JS를 정리한 웹페이지입니다.<br />배운 내용을 실습하며 구성했습니다.</p>
              </div>
            </div>
            </div>
          </a>
        </div>
      </section>
    </div>
  )
}

export default Home;
