import React, { useState } from 'react';
import './Translate.css';

// Import images
import please from '../images/pleasesign.png';
import howareyou from '../images/howareyousign.png';
import no from '../images/NOsign.png';
import hello from '../images/hellosign.jpeg';
import thankYou from '../images/thankyousign.jpg';
import yes from '../images/yes.png';

function Translate() {
  const [signInput, setSignInput] = useState('');
  const [translatedText, setTranslatedText] = useState('');

  const handleTranslate = () => {
    // Placeholder for translation logic
    setTranslatedText(`Translated: ${signInput}`);
  };

  const signLibrary = [
    { image: hello, name: 'Hello' },
    { image: howareyou, name: 'How are you' },
    { image: no, name: 'No' },
    { image: please, name: 'Please' },
    { image: thankYou, name: 'Thank you' },
    { image: yes, name: 'Yes' },
  ];

  return (
    <div className="translate">
      <h1 className="page-title">Sign Language Translator</h1>
      <div className="translator-container">
        <div className="sign-input-container">
          <h2>Sign Language Input</h2>
          <div className="sign-input-area">
            {/* Placeholder for sign language input (e.g., webcam or file upload) */}
            <p>Sign language input area</p>
            <button onClick={handleTranslate}>Capture Sign</button>
          </div>
        </div>
        <div className="text-output-container">
          <h2>Translated Text</h2>
          <div className="text-output-area">
            <p>{translatedText}</p>
          </div>
        </div>
      </div>
      <div className="sign-library">
        <h2 className="library-title">Sign Library</h2>
        <div className="sign-cards">
          {signLibrary.map((sign, index) => (
            <div key={index} className="sign-card">
              <img src={sign.image} alt={sign.name} />
              <p>{sign.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Translate;