import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './Learn.css';

function Learn() {
  return (
    <div className="learn">
      <h1>Learn Sign Language</h1>
      <div className="lesson-grid">
        <div className="lesson-card">
          <Link to="/alphabet" className="lesson-link"> {/* Add Link component */}
            <h2>Alphabet</h2>
            <p>Learn the basics of finger spelling</p>
            <button>Start Lesson</button>
          </Link>
        </div>
        <div className="lesson-card">
        <Link to="/numbers" className="lesson-link">
          <h2>Numbers</h2>
          <p>Master signing numbers from 0 to 100</p>
          <button>Start Lesson</button>
          </Link>
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