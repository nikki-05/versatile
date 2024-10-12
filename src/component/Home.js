import React from 'react';
// import Slider from "react-slick"; 
import logo from '../images/logo.png'
import inter from '../images/interactive.jpg'
import translation from '../images/translation.jpg'
import practice from '../images/practice.jpg'
import './Home.css';

function Home() {
  // const settings = { 
  //   dots: true,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   autoplay: true,
  //   autoplaySpeed: 3000,
  // };

  return (
    <div className="home">
      {/* Hero Section */}
      <div className="hero-section">
        <div className="hero-content">
          <h1>Empowering Deaf & Mute Education</h1>
          <p>Your gateway to learning with Indian Sign Language </p>
          {/* <button className="cta-button">Get Started</button> */}
        </div>
        <div className="hero-image">
          <img src={logo} alt="Learning App" id="img"/>
        </div>
      </div>

      {/* Features Section */}
      <div className="features-section">
        <h2 className="section-title">Why Our Platform?</h2>
        <div className="features-grid">
          <div className="feature">
            <img src={inter} alt="Learn Icon" id="inter" />
            <h3>Interactive Lessons</h3>
            <p>Master sign language with easy-to-follow lessons in English and Hindi.</p>
          </div>
          <div className="feature">
            <img src={translation} alt="Translate Icon" id="translation"/>
            <h3>Real-time Translation</h3>
            <p>Convert text and speech into sign language and vice versa effortlessly.</p>
          </div>
          <div className="feature">
            <img src={practice} alt="Practice Icon" id="practice" />
            <h3>Practice & Assess</h3>
            <p>Practice with quizzes, exercises, and assessments to track your progress.</p>
          </div>
        </div>
      </div>

      

      {/* Call-to-Action Section */}
      <div className="cta-section">
        <h2>Start Your Learning Journey Now!</h2>
        {/* <button className="cta-button-large">Sign Up for Free</button> */}
      </div>
    </div>
  );
}

export default Home;
