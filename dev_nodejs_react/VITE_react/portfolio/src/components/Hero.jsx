// src/components/Hero.jsx
import React, { useEffect, useRef } from 'react';
import '../styles/Hero.css';
import ScrollReveal from 'scrollreveal';
// import VanillaTilt from 'vanilla-tilt';
import { Typewriter } from 'react-simple-typewriter'

const Hero = () => {
  const heroRef = useRef();

  useEffect(() => {
    ScrollReveal().reveal(heroRef.current, {
      origin: 'bottom',
      distance: '20px',
      duration: 500,
      delay: 200,
    });
  }, []);

  return (
    <section id="hero" className="hero" ref={heroRef}>
      <h1 className="hero-title">
         <Typewriter
    words={['안녕하세요! 초보 개발자 김은희입니다 :)']}
    loop={true}
    cursor
    cursorStyle="_"
    typeSpeed={100}
    deleteSpeed={50}
    delaySpeed={1500}
  />
      </h1>
      <br />
      <br />
      <br />
      <br />
       <p className="hero-cta fade-in-right">
        <span className="cta-btn cta-btn--hero">
          <a href="#about">Know more</a>
        </span>
      </p>
    </section>
  );
};

export default Hero;
