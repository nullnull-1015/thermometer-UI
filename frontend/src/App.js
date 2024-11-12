import { useEffect, useState } from 'react'
import './App.css';

import { socket } from './socket';
import { Graph } from './components/Graph';
import { Character } from './components/Character';
import { Meter } from './components/Meter';

function App() {
  const [data, setData] = useState([]); // Temperature and Humidity data
  
  useEffect(() => {
    socket.on("message", (data) => {
      setData(prev => [...prev, data])
    })

    return () => {
      socket.off("message")
    }
  }, [])

  const orgRound = (value, base) => {
    return Math.round(value * base) / base;
  }

  const processData = (value) => {
    return orgRound(value, 10) // 小数第1位で四捨五入
  } 


  return (
    <div className="App">
      <div style={{display: "flex", justifyContent: "space-evenly", backgroundColor: "var(--digit-bg-color)"}}>
        <div >
          <span style={{display: "inline-block", color: "#fff", marginBottom: "10px"}}>Temperature</span>
          <Meter key={"tmp"} number={processData(data[data.length-1]?.temperature)} color={"#fff"} bgColor={"#333"} scale={1}/>
        </div>
        <div >
          <span style={{display: "inline-block", color: "#fff", marginBottom: "10px"}}>Humidity</span>
          <Meter key={"hum"} number={processData(data[data.length-1]?.humidity)} color={"#fff"} bgColor={"#333"} scale={1}/>
        </div>
      </div>
      <div style={{display: "flex", marginTop: "20px", justifyContent: "center", alignItems: "center"}}>
        <Graph data={data.slice(-10)}/>
        <Character temperature={data[data.length-1]?.temperature} />
      </div>
    </div>
  );
}



export default App;
