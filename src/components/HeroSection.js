import React from 'react';
import '../App.css';
import './HeroSection.css';
import { TbArrowBigDownLine } from 'react-icons/tb'

const scrollToSection = () => {
  const sectionRef = document.getElementById('card-scroll-point');
  sectionRef.scrollIntoView({ behavior: 'smooth' });
};

function HeroSection() {
  return (
    <div className='hero-container'>
      <h1>SHAOLIN VALENCIA</h1>
      <p>Encontrando el equilibrio entre tu cuerpo y tu alma</p>
      <p>hallar&aacute;s el camino de una larga vida.</p>
      <br />
      <button class='button' onClick={scrollToSection}>
        <span><TbArrowBigDownLine /></span>
      </button>
    </div>
  );
}

export default HeroSection;
