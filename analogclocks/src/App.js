import logo from './logo.svg';
import './App.css';
import { useState, useEffect, useRef } from "react"

function App() {
  const [time, setTime] = useState(new Date());

  useEffect(()=>{
    const interval = setInterval(()=>{
      setTime(new Date())
    }, 1000);
    return () => clearInterval(interval);
  }, [])

  const hour = time.getHours()
  const minute = time.getMinutes()
  const second = time.getSeconds()

const hourStyle = {
    transform: `rotate(${(hour * 30) + (minute / 2)}deg)`
  };

  const minuteStyle = {
    transform: `rotate(${(minute * 6) + (second / 10)}deg)`
  };

  const secondStyle = {
    transform: `rotate(${second * 6}deg)`
  };

  return (
    <div className="clock-container">
      <div className="hour-hand" style={hourStyle}></div>
      <div className="minute-hand" style={minuteStyle}></div>
      <div className="second-hand" style={secondStyle}></div>
    </div>
  );
}

export default App;
