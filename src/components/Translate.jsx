import React, { useState } from "react";
import axios from "axios";
import TranslateImg from "../image/translateLogo.jpg";
import LogoImg from "../image/versatileLogo.jpeg";

const TranslateComponent = () => {
  const [inputText, setInputText] = useState("");
  const [translatedText, setTranslatedText] = useState("");

  const handleTranslate = async () => {
    try {
      const response = await axios.post("http://localhost:5000/api/translate", {
        text: inputText,
        targetLang: "gu", // Gujarati language code
      });
      setTranslatedText(response.data.translatedText);
    } catch (error) {
      console.error("Error translating text:", error);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-800 to-gray-900 text-white p-4">
      <div className="logos sm:block hidden">
        <img
          src={LogoImg}
          alt=""
          className="rounded-full top-30 left-10 absolute w-80 "
        />
        <img
          src={TranslateImg}
          alt=""
          className="rounded-full top-30 right-10 absolute"
        />
      </div>
      {/* Main container with glass effect */}
      <div className="w-full max-w-xl bg-opacity-50 backdrop-blur-lg bg-gray-50 p-8 rounded-3xl shadow-lg">
        <h1 className="text-3xl font-bold text-center mb-6">
          English to Gujarati Translator
        </h1>

        {/* Input Section */}
        <textarea
          className="w-full p-4 text-gray-800 bg-gray-50 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-400 transition duration-300 mb-6"
          rows="5"
          placeholder="Enter text in English..."
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />

        {/* Button */}
        <button
          className="w-full bg-teal-500 hover:bg-teal-600 text-white py-3 rounded-lg font-semibold shadow-md hover:shadow-lg transition duration-300"
          onClick={handleTranslate}
        >
          Translate to Gujarati
        </button>

        {/* Translated Text Section */}
        {translatedText && (
          <div className="mt-6 p-4 bg-gray-50 rounded-lg text-gray-900">
            <h2 className="text-lg font-semibold mb-2">Translated Text:</h2>
            <p className="text-lg">{translatedText}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default TranslateComponent;
