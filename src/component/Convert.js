import React, { useState } from "react";
import './convert.css';

const Convert = () => {
  const [englishText, setEnglishText] = useState('');
  const [HindiText, setHindiText] = useState('');

  // Function to handle translation
  
  const handleTranslate = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/translate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ text: englishText }),
      });

      if (!response.ok) {
        throw new Error('Translation failed');
      }

      const data = await response.json();
      setHindiText(data.translated_text); // Update state with translated text
    } catch (error) {
      console.error("Error occurred during translation:", error);
      setHindiText(''); // Clear output on error
    }
  };

  return (
    <div className="convert-container">
      <h1>English to HindiText Converter</h1>
      <form onSubmit={handleTranslate}>
        <textarea
          value={englishText}
          onChange={(e) => setEnglishText(e.target.value)}
          placeholder="Enter English text"
          rows="5"
          cols="50"
        />
        <button type="submit">Translate</button>
      </form>
      <div className="result-container">
        <h2>Translated Hindi Text:</h2>
        <div className="output-box"> {/* Output box for dynamic text */}
          <p>{HindiText || "Translation will appear here..."}</p> {/* Default message */}
        </div>
      </div>
    </div>
  );
};

export default Convert;