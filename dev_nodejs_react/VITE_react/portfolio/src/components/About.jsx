import React from 'react';
import '../styles/About.css';

const About = () => {
  return (
    <section id="about" className="about-section">
      <h2 className="section-title">About Me</h2>
      <p className="about-description">
        비전공자이지만 코딩에 매력을 느껴 개발자를 꿈꾸게 되었습니다.<br />
            끊임 없이 배우고 노력하여 발전하는 개발자가 되겠습니다.
      </p>
        <br />
       <div className="info-grid">
    <div className="info-card">🤗 <strong>이름 :</strong>김은희</div>
    <div className="info-card">👨‍🎓 <strong>전공 :</strong> 부경대학교 생태공학 <br />
       (미생물학)
    </div>
    <div className="info-card">🎂 <strong>생일 :</strong>1997년 10월 31일</div>
    <div className="info-card">🏡 <strong>거주지 :</strong>부산광역시 북구</div>
  </div>
    </section>
  );
};

export default About;
