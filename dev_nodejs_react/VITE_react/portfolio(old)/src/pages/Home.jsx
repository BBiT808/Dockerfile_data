import { Typewriter } from 'react-simple-typewriter'
import FloatingTech from './FloatingTech';
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
</div>
<div className="my-box"></div>
          <p className="intro-text">
            비전공자이지만 코딩에 매력을 느껴 <br />개발자를 꿈꾸게 되었습니다. <br /><br />
            끊임 없이 배우고 노력하여 <br />발전하는 개발자가 되겠습니다.
          </p>
        </div>
      </section>

      <section id="about2" className="content">
        <br />
        <h1>⬇️ About ⬇️</h1>
        <br />
        <br />
          <div className="intro-main">
         <div className="info-box-grid">
  <div className="info-card">🤗 <strong>이름 :</strong><br />김은희</div>
  <div className="info-card">👨‍🎓 <strong>전공 :</strong>부경대학교 생태공학
    <br />(미생물학)</div>
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
      <br />
      <h1>🛠️ Technology 🛠️</h1>
      <br />
      <br />
      <div>
      <FloatingTech />
    </div>
        <br />
        <br />
      </section>

      <section id="projects" className="projects-content">
        <br />
        <h1>📦 Projects 📦</h1>
        <br />
        <div className="projects">
          <a href="https://github.com/jszxro/PK_miniproject_3" target="_blank" rel="noreferrer">
            <div className="project-box light-green">
              <div className="horizontal-box">

              <img src="/images/book.png" alt="도서 관리 시스템 이미지" className="project-img-side" />

              <div className="project-text">
              <h2>📘 직관적인 UI를 가진<br />도서 관리 시스템</h2>
              <p>전자 도서관 시스템을 구현한<br />미니 팀 프로젝트로써 책 검색,<br />대출/반납, 사용자 관리 기능 등을<br />포함했습니다.</p>
              </div>
            </div>
            </div>
          </a>
          <a href="https://github.com/BSEom/teamP_t1" target="_blank" rel="noreferrer">
            <div className="project-box light-green">
              <div className="horizontal-box">

              <img src="/images/miniproject_2.png" alt="부산 최저가 생필품 찾기 이미지" className="project-img-side" />

              <div className="project-text">
              <h2>🛒 부산시 최저가 생필품<br />찾기 웹서비스</h2>
              <p>부산광역시 6개 구의 소비자 물가<br />데이터를 분석하고 시각화하여,<br />지역별 생필품 가격의 물가 추이를<br />제공하는 웹서비스 입니다. </p>
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
              <br />
              <p>교육 동안 배운 기술 스택을<br />각각 종류별로 정리했습니다.<br />다양한 기술을 연마할 수 있었던<br />소중한 기간이었습니다.</p>
              </div>
            </div>
            </div>
          </a>
          <a href="https://bbit808.github.io/html/" target="_blank" rel="noreferrer">
            <div className="project-box yellow">
              <div className="horizontal-box">
              <img src="/images/html.png" alt="정리 사이트 이미지" className="project-img-side" />
              <div className="project-text">
              <h2>💕 HTML 응용 사이트</h2>
              <br />
              <p>교육 때 배웠던 HTML과 Javascript를 <br />정리하고, 응용하여 만든 <br />웹페이지입니다.<br />배운 내용을 실습하며 구성했습니다.</p>
              </div>
            </div>
            </div>
          </a>
        </div>
      </section>

      <section id="the-end" className="end-content">
      <h1>🥰THANK YOU FOR WATCHING !🥰</h1>
      <h2>봐 주셔서 감사합니다!</h2>
      </section>

      
    </div>
  )
}

export default Home;
