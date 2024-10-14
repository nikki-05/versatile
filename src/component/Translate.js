import React, { useState, useEffect, useRef } from 'react';
import './Translate.css';

// Import images
import please from '../images/pleasesign.png';
import howareyou from '../images/howareyousign.png';
import no from '../images/NOsign.png';
import hello from '../images/hellosign.jpeg';
import thankYou from '../images/thankyousign.jpg';
import yes from '../images/yes.png';

function Translate() {
  const [translatedText, setTranslatedText] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [isModelReady, setIsModelReady] = useState(false);
  const [prediction, setPrediction] = useState('');
  const [finalResult, setFinalResult] = useState('');
  const [isRunning, setIsRunning] = useState(false);

  const webcamRef = useRef(null);
  const modelRef = useRef(null);
  const isRunningRef = useRef(false);

  const signLibrary = [
    { image: hello, name: 'Hello' },
    { image: howareyou, name: 'How are you' },
    { image: no, name: 'No' },
    { image: please, name: 'Please' },
    { image: thankYou, name: 'Thank you' },
    { image: yes, name: 'Yes' },
  ];

  useEffect(() => {
    if (showModal) {
      const loadScripts = async () => {
        await loadScript("https://cdn.jsdelivr.net/npm/@tensorflow/tfjs@latest/dist/tf.min.js");
        await loadScript("https://cdn.jsdelivr.net/npm/@teachablemachine/image@latest/dist/teachablemachine-image.min.js");
        setIsModelReady(true);
      };
      loadScripts();
    }
  }, [showModal]);

  const loadScript = (src) => {
    return new Promise((resolve, reject) => {
      const script = document.createElement('script');
      script.src = src;
      script.onload = resolve;
      script.onerror = reject;
      document.body.appendChild(script);
    });
  };

  const init = async () => {
    const URL = "https://teachablemachine.withgoogle.com/models/-zDf2FdEU/";
    const modelURL = URL + "model.json";
    const metadataURL = URL + "metadata.json";

    try {
      modelRef.current = await window.tmImage.load(modelURL, metadataURL);
      webcamRef.current = new window.tmImage.Webcam(200, 200, true);
      await webcamRef.current.setup();
      await webcamRef.current.play();
      document.getElementById("webcam-container").innerHTML = '';
      document.getElementById("webcam-container").appendChild(webcamRef.current.canvas);
      
      isRunningRef.current = true;
      setIsRunning(true);
      loop();
    } catch (error) {
      console.error("Error initializing model or webcam:", error);
    }
  };

  const loop = async () => {
    if (isRunningRef.current) {
      webcamRef.current.update();
      await predict();
      requestAnimationFrame(loop);
    }
  };

  const predict = async () => {
    if (modelRef.current && webcamRef.current) {
      const prediction = await modelRef.current.predict(webcamRef.current.canvas);
      const maxProbability = Math.max(...prediction.map(p => p.probability));
      const predictedClass = prediction.find(p => p.probability === maxProbability);
      setPrediction(`Predicted class: ${predictedClass.className} (Probability: ${predictedClass.probability.toFixed(2)})`);
      setFinalResult(predictedClass.className);
    }
  };

  const stop = () => {
    isRunningRef.current = false;
    setIsRunning(false);
    if (webcamRef.current) {
      webcamRef.current.stop();
    }
  };

  const restart = () => {
    stop();
    setPrediction('');
    setFinalResult('');
    init();
  };

  const handlePredict = () => {
    setTranslatedText(finalResult);
    // Optionally, you can also update the text outside the modal
    // document.querySelector('.text-output-area p').textContent = finalResult;
  };

  return (
    <div className="translate">
      <h1 className="page-title">Sign Language Translator</h1>
      <div className="translator-container">
        <div className="sign-input-container">
          <h2>Sign Language Input</h2>
          <div className="sign-input-area">
            <p>Sign language input area</p>
            <button onClick={() => setShowModal(true)}>Capture Sign</button>
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
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <h2>Capture Sign</h2>
            <div>Model</div>
            <button type="button" onClick={init} disabled={!isModelReady || isRunning}>Start</button>
            <button type="button" onClick={handlePredict} disabled={!isRunning}>Predict</button>
            <button type="button" onClick={stop} disabled={!isRunning}>Stop</button>
            <button type="button" onClick={restart} disabled={!isModelReady}>Restart</button>
            <div id="webcam-container"></div>
            <div>{prediction}</div>
            <div>Final Result: {finalResult}</div>
            <button onClick={() => {
              stop();
              setShowModal(false);
            }}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Translate;