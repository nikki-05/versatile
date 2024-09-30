import React from 'react';
import './Home.css';

function Home() {
  return (
    <div className="home">
      <div className="hero-section">
        <h1>Learning App for Deaf And Mute</h1>
        <p>Sign language-English/Gujarati converter</p>
        <button className="cta-button">Get Started</button>
      </div>
      <div className="features-section">
        <div className="feature">
          <h2>Learn</h2>
          <p>Interactive sign language lessons</p>
        </div>
        <div className="feature">
          <h2>Translate</h2>
          <p>Real-time sign language translation</p>
        </div>
        <div className="feature">
          <h2>Practice</h2>
          <p>Improve your skills with exercises</p>
        </div>
      </div>
    </div>
  );
}

export default Home;