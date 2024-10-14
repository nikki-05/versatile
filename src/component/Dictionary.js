import React, { useState, useEffect } from 'react';
import './Dictionary.css';

function Dictionary() {
  const [selectedLetter, setSelectedLetter] = useState('A');
  const [words, setWords] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

  useEffect(() => {
    fetchWords(selectedLetter);
  }, [selectedLetter]);

  const fetchWords = (letter) => {
    const wordList = {
      'A': [
        'Abbreviation', 'Abeyance', 'About', 'Above', 'Absent', 'Absorb', 'Absorption',
        'Abstract Of Account', 'Acceleration', 'Accept', 'Acceptance', 'Acceptance Clean',
        'Acceptor For Honour', 'Access', 'Accessories', 'Accident', 'Accommodation',
        'Account', 'Account Blocked', 'Account Book', 'Account Branch Adjustment',
        'Account Charges', 'Account Closed', 'Account Closing', 'Account Commission',
        'Account Currency', 'Account Current', 'Account Day', 'Account Discount',
        'Account Govemment', 'Account Head', 'Account Holder', 'Account Inoperative',
        'Account Joint', 'Account Margin', 'Account Minor', 'Account Payee Only',
        'Account Profit And Loss', 'Account Rupee', 'Account Suit Filed', 'Account Suspence',
        'Accumulated', 'Accurate', 'Accured', 'Accuse', 'Acknowledgement', 'Across',
        'Act', 'Acting', 'Action', 'Active', 'Actor', 'Actress', 'Actual', 'Add',
        'Additional', 'Address-1', 'Address-2', 'Adhesive', 'Adjustable Screw',
        'Adjustement', 'Admissible', 'Advance', 'Advantage', 'Advertisement-1',
        'Advertisement-2', 'Advise', 'Aeroplane', 'Affidavit', 'Africa', 'After',
        'Afternoon', 'Again', 'Age', 'Agenda', 'Agra', 'Agree', 'Agreement',
        'Agriculture', 'Ahemedabad', 'Air', 'Airmail', 'Airport', 'Air Pollution',
        'Alarm System', 'Alive', 'All', 'Allah', 'Allergy', 'Allotment', 'Allow',
        'Allowance', 'Alone', 'Alternate Current', 'Altitude', 'Aluminium', 'Always',
        'Amalgamation', 'Ambulance', 'Amendments', 'Ammeter', 'Among', 'Amount',
        'Ampere', 'Amplitude', 'Amritsar', 'Andhra Pradesh', 'Angel', 'Angle',
        'Angle Of Refraction', 'Angry-1', 'Angry-2', 'Angry-3', 'Angular Velocity',
        'Animals', 'Anklets', 'Announce', 'Annual', 'Annual Closing', 'Annual Report',
        'Antartica', 'Anticlockwise-1', 'Anticlockwise-2', 'Ant-1', 'Ant-2', 'Any',
        'An Ant went to a Sugar Hill', 'Apparatus', 'Appear', 'Apple', 'Applicant',
        'Application', 'Appointment', 'Appreciation', 'Approval', 'April', 'Area',
        'Argue', 'Arm', 'Arms And Amunitions', 'Around', 'Arrears', 'Arrest', 'Art',
        'Artificial', 'Asia', 'Ask-1', 'Ask-2', 'Assam', 'Assembly-1', 'Assembly-2',
        'Assets', 'Assistance', 'Association', 'Astronomy', 'At', 'Atmosphere', 'Atom',
        'Attachmant Of Property', 'Attendant', 'Attorney', 'Attraction', 'Attractive Force',
        'Audiologist', 'Audio Frequency', 'Audit', 'Auditorium', 'August-1', 'August-2',
        'Australia-1', 'Australia-2', 'Authorisation', 'Authorised Signature', 'Automatic',
        'Automobiles', 'Autorickshaw', 'Average', 'Avoid', 'Axe', 'A Bahurupi Impersonating Siva',
        'A Boy Actually Fed God', 'A Devotee Avoids what the World Runs after',
        'A Leaders Leads by Example'
      ],
      // Add other letters here...
    };

    setWords(wordList[letter] || []);
  };

  const handleLetterClick = (letter) => {
    setSelectedLetter(letter);
    setSearchTerm('');
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
    // Implement search logic here
  };

  return (
    <div className="dictionary">
      <h1>Sign Language Dictionary</h1>
      <input
        type="text"
        placeholder="Search for a word"
        value={searchTerm}
        onChange={handleSearch}
        className="search-input"
      />
      <div className="alphabet-list">
        {alphabet.map((letter) => (
          <button
            key={letter}
            onClick={() => handleLetterClick(letter)}
            className={`letter-button ${selectedLetter === letter ? 'active' : ''}`}
          >
            {letter}
          </button>
        ))}
      </div>
      <div className="dictionary-content">
        <div className="word-list">
          {words.map((word, index) => (
            <button key={index} className="word-button">
              {word}
            </button>
          ))}
        </div>
        <div className="word-details">
          {/* Word details will be shown here */}
          <div className="video-container">
            <div className="video-placeholder">Video will be shown here</div>
          </div>
          <p>Word explanation and usage will be shown here.</p>
        </div>
      </div>
    </div>
  );
}

export default Dictionary;
