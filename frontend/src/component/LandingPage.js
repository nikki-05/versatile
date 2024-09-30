import React from 'react';
import './LandingPage.css';

function LandingPage() {
  return (
    <div className="landing-page">
      <div className="hero-section">
        <h1>Learn Sign Language</h1>
        <p>Master sign language with our interactive lessons and real-time translation</p>
        <button className="cta-button">Get Started</button>
      </div>
      <div className="features-section">
        <div className="feature">
          <h2>Interactive Lessons</h2>
          <p>Learn through engaging video tutorials and quizzes</p>
        </div>
        <div className="feature">
          <h2>Real-time Translation</h2>
          <p>Convert sign language to English or Gujarati instantly</p>
        </div>
        <div className="feature">
          <h2>Practice Mode</h2>
          <p>Improve your skills with our AI-powered practice sessions</p>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;