import React from 'react'
import { useState, useRef, useEffect } from 'react'; 
import '../component/whiteboard.css'

const Whiteboard = () => {
    const canvasRef = useRef(null);
    const contextRef = useRef(null);
    const [isDrawing, setIsDrawing] = useState(false);
    const [tool, setTool] = useState('pen');
    const [color, setColor] = useState('#000000');
    const [thickness, setThickness] = useState(5);
   const [startPos, setStartPos] = useState({ x: 0, y: 0 });
  
    useEffect(() => {
      const canvas = canvasRef.current;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight - 100;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight - 100}px`;
  
      const context = canvas.getContext('2d');
      context.lineCap = 'round';
      context.strokeStyle = color;
      context.lineWidth = thickness;
      contextRef.current = context;
  
      const handleResize = () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight - 100;
        canvas.style.width = `${window.innerWidth}px`;
        canvas.style.height = `${window.innerHeight - 100}px`;
        context.lineCap = 'round';
        context.strokeStyle = color;
        context.lineWidth = thickness;
      };
  
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
      }, [color, thickness]);
      
    
      const getCoordinates = (event) => {
        const canvas = canvasRef.current;
        const rect = canvas.getBoundingClientRect();
        const scaleX = canvas.width / rect.width;
        const scaleY = canvas.height / rect.height;
        return {
          x: (event.clientX - rect.left) * scaleX,
          y: (event.clientY - rect.top) * scaleY
        };
      };
  
    const startDrawing = ({ nativeEvent }) => {
      const { offsetX, offsetY } = nativeEvent;
      contextRef.current.beginPath();
      contextRef.current.moveTo(offsetX, offsetY);
      setIsDrawing(true);
      setStartPos({ x: offsetX, y: offsetY });
    };
  
    const draw = (event) => {
      if (!isDrawing) return;
      const { x, y } = getCoordinates(event);
  
      if (tool === 'pen' || tool === 'eraser') {
        contextRef.current.lineTo(x, y);
        contextRef.current.stroke();
      } else if (tool === 'rectangle') {
        drawShape(x, y, drawRectangle);
      } else if (tool === 'circle') {
        drawShape(x, y, drawCircle);
      }
    };
  
  
    const drawShape = (currentX, currentY, shapeFunction) => {
      const canvas = canvasRef.current;
      const context = canvas.getContext('2d');
      const imageData = context.getImageData(0, 0, canvas.width, canvas.height);
      context.clearRect(0, 0, canvas.width, canvas.height);
      context.putImageData(imageData, 0, 0);
      context.beginPath();
      shapeFunction(context, startPos.x, startPos.y, currentX, currentY);
      context.stroke();
    };
  
    const drawRectangle = (context, startX, startY, endX, endY) => {
      context.rect(startX, startY, endX - startX, endY - startY);
    };
  
    const drawCircle = (context, startX, startY, endX, endY) => {
      const radius = Math.sqrt(Math.pow(endX - startX, 2) + Math.pow(endY - startY, 2));
      context.arc(startX, startY, radius, 0, 2 * Math.PI);
    };
  
    const stopDrawing = () => {
      contextRef.current.closePath();
      setIsDrawing(false);
    };
  
    const clearCanvas = () => {
      const canvas = canvasRef.current;
      contextRef.current.clearRect(0, 0, canvas.width, canvas.height);
    };
  
    const changeColor = (newColor) => {
      setColor(newColor);
      contextRef.current.strokeStyle = newColor;
    };
  
    const changeTool = (newTool) => {
      setTool(newTool);
      if (newTool === 'eraser') {
        contextRef.current.globalCompositeOperation = 'destination-out';
      } else {
        contextRef.current.globalCompositeOperation = 'source-over';
      }
    };
  
    const changeThickness = (newThickness) => {
      setThickness(newThickness);
      contextRef.current.lineWidth = newThickness;
    };
  
    const addText = () => {
      const text = prompt('Enter text:');
      if (text) {
        const { offsetX, offsetY } = window.event;
        contextRef.current.font = `${thickness * 2}px Arial`;
        contextRef.current.fillStyle = color;
        contextRef.current.fillText(text, offsetX, offsetY);
      }
    };
  
    return (
      <div className="whiteboard-container">
        <canvas
          ref={canvasRef}
          onMouseDown={startDrawing}
          onMouseMove={draw}
          onMouseUp={stopDrawing}
          onMouseLeave={stopDrawing}
        />
        <div className="controls">
          <button onClick={clearCanvas}>Clear</button>
          <button onClick={() => changeTool('pen')}>Pen</button>
          <button onClick={() => changeTool('eraser')}>Eraser</button>
          <button onClick={() => changeTool('rectangle')}>Rectangle</button>
          <button onClick={() => changeTool('circle')}>Circle</button>
          <button onClick={addText}>Add Text</button>
          <input
            type="color"
            value={color}
            onChange={(e) => changeColor(e.target.value)}
          />
          <input
            type="range"
            min="1"
            max="20"
            value={thickness}
            onChange={(e) => changeThickness(parseInt(e.target.value))}
          />
        </div>
      </div>
    );
  };
  

export default Whiteboard
