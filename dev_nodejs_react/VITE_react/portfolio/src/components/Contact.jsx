import React from 'react';
import '../styles/Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <h2 className="section-title">Contact</h2>
      <p> 🌠 무언가를 만드는 걸 좋아하는 사람,<br/>
          사용자에게 의미 있는 경험을 선물하고 싶은 개발자, 김은희입니다 💜<br/>
         제안이나 피드백은 언제나 환영입니다 ! 👇</p>
      <a className="contact-btn" href="mailto:your@email.com">
        Send Email
      </a>
    </section>
  );
};

export default Contact;
