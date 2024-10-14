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
  const [showModal, setShowModal] = useState(false);
  const [isRunning, setIsRunning] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [loadingStatus, setLoadingStatus] = useState('');
  const [finalResult, setFinalResult] = useState('');
  const [translatedText, setTranslatedText] = useState('');

  const webcamRef = useRef(null);
  const modelRef = useRef(null);
  const webcamInstanceRef = useRef(null);
  const labelContainerRef = useRef(null);
  const predictionOutputRef = useRef(null);
  const finalResultRef = useRef(null);

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
      loadScripts();
    }
  }, [showModal]);

  const loadScripts = async () => {
    setLoadingStatus('Loading TensorFlow.js...');
    await loadScript('https://cdn.jsdelivr.net/npm/@tensorflow/tfjs@latest/dist/tf.min.js');
    setLoadingStatus('Loading Teachable Machine...');
    await loadScript('https://cdn.jsdelivr.net/npm/@teachablemachine/image@latest/dist/teachablemachine-image.min.js');
    setLoadingStatus('Scripts loaded. Ready to start.');
  };

  const loadScript = (src) => {
    return new Promise((resolve, reject) => {
      const script = document.createElement('script');
      script.src = src;
      script.onload = resolve;
      script.onerror = reject;
      document.body.appendChild(script);
    });
  };

  const URL = "https://teachablemachine.withgoogle.com/models/Elr-I70JN/";
  let maxPredictions;
  let animationFrameId = null;

  async function init() {
    setIsLoading(true);
    setLoadingStatus('Loading model...');
    const modelURL = URL + "model.json";
    const metadataURL = URL + "metadata.json";

    try {
      modelRef.current = await window.tmImage.load(modelURL, metadataURL);
      maxPredictions = modelRef.current.getTotalClasses();

      setLoadingStatus('Setting up webcam...');
      const flip = true;
      webcamInstanceRef.current = new window.tmImage.Webcam(300, 300, flip); // Increased size for visibility

      await webcamInstanceRef.current.setup();
      setLoadingStatus('Starting webcam...');
      await webcamInstanceRef.current.play();
      
      if (webcamRef.current) {
        webcamRef.current.innerHTML = '';
        webcamRef.current.appendChild(webcamInstanceRef.current.canvas);
      } else {
        throw new Error('Webcam container not found');
      }

      if (labelContainerRef.current) {
        labelContainerRef.current.innerHTML = '';
        for (let i = 0; i < maxPredictions; i++) {
          labelContainerRef.current.appendChild(document.createElement("div"));
        }
      } else {
        throw new Error('Label container not found');
      }

      setIsRunning(true);
      setIsLoading(false);
      setLoadingStatus('Camera started. Ready to predict.');
      loop();
    } catch (error) {
      console.error("Error initializing model or webcam:", error);
      setIsLoading(false);
      setLoadingStatus('Error: ' + error.message);
    }
  }

  async function loop() {
    if (isRunning) {
      webcamInstanceRef.current.update();
      await predict();
      animationFrameId = window.requestAnimationFrame(loop);
    }
  }

  async function predict() {
    if (!modelRef.current || !webcamInstanceRef.current) {
      console.error("Model or webcam not initialized");
      setLoadingStatus('Error: Model or webcam not initialized');
      return;
    }

    try {
      const prediction = await modelRef.current.predict(webcamInstanceRef.current.canvas);
      const maxProbability = Math.max(...prediction.map(p => p.probability));
      const predictedClass = prediction.find(p => p.probability === maxProbability);
      
      if (predictionOutputRef.current) {
        predictionOutputRef.current.innerHTML = `Predicted class: ${predictedClass.className} (Probability: ${predictedClass.probability.toFixed(2)})`;
      }
      
      setFinalResult(predictedClass.className);
    } catch (error) {
      console.error("Prediction error:", error);
      setLoadingStatus('Error during prediction: ' + error.message);
    }
  }

  function displayFinalResult() {
    finalResultRef.current.innerHTML = `Final Result: ${finalResult}`;
    setTranslatedText(`Translated: ${finalResult}`);
  }

  function stop() {
    setIsRunning(false);
    if (animationFrameId) {
      window.cancelAnimationFrame(animationFrameId);
    }
    if (webcamInstanceRef.current) {
      webcamInstanceRef.current.stop();
    }
  }

  function restart() {
    stop();
    init();
  }

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
            <button type="button" onClick={init} disabled={isRunning || isLoading}>Start</button>
            <button type="button" id="predict-button" onClick={displayFinalResult}>Predict</button>
            <button type="button" id="stop-button" onClick={stop}>Stop</button>
            <button type="button" onClick={restart}>Restart</button>
            {isLoading && <p>{loadingStatus || 'Please wait, camera is starting...'}</p>}
            <div id="webcam-container" ref={webcamRef} style={{width: '300px', height: '300px', border: '1px solid black', margin: '10px 0'}}></div>
            <div id="label-container" ref={labelContainerRef}></div>
            <div id="prediction-output" ref={predictionOutputRef}></div>
            <div id="final-result" ref={finalResultRef}></div>
            <button onClick={() => setShowModal(false)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Translate;
