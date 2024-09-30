import React from 'react';
import './Learn.css';

function Learn() {
  return (
    <div className="learn">
      <h1>Learn Sign Language</h1>
      <div className="lesson-grid">
        <div className="lesson-card">
          <h2>Alphabet</h2>
          <p>Learn the basics of finger spelling</p>
          <button>Start Lesson</button>
        </div>
        <div className="lesson-card">
          <h2>Numbers</h2>
          <p>Master signing numbers from 0 to 100</p>
          <button>Start Lesson</button>
        </div>
        <div className="lesson-card">
          <h2>Common Phrases</h2>
          <p>Learn everyday expressions</p>
          <button>Start Lesson</button>
        </div>
        {/* Add more lesson cards as needed */}
      </div>
    </div>
  );
}

export default Learn;