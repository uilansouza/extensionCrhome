import React, {useEffect, useState} from 'react';

const API_KEY = 'c5a45184b7fb858bd636524b08216b71'
const API_URI = `http://api.openweathermap.org/data/2.5/weather?appid=${API_KEY}&units=metric`

const buildLatLntQuery = (navigator) => {
  return new Promise((resolve) => {
    navigator.geolocation.getCurrentPosition(position => {
      const { coords } = position
      resolve(`&lat=${coords.latitude}&lon=${coords.longitude}`)
    })
  })
}

const getWeather = async () => {
  try {
    const querystring = await buildLatLntQuery(window.navigator)
    const response = await fetch(`${API_URI}${querystring}`)
    const json = await response.json()
    return json
  } catch(err) {
    console.log('err', err)
  } 
} 

function App() {
  const [state, setState] = useState({
    current: 0,
    min: 0,
    max: 0,
   
  })

async function init () {
  const { main } = await getWeather()
  setState({
    current: main.temp.toFixed(0),
    min: main.temp_min.toFixed(0),
    max: main.temp_max.toFixed(0),
 
  })
}
  useEffect(() => {
    init()
  }, [])

  return (
    <div className="container">
      <h1 className="container-title">
       
      </h1>
      <div className="containerInfo">
        <div className="infoTempo">
          <span>Min {state.min}ºC</span>
          <span>Max {state.max}ºC</span>
        </div>
        <span className="infoAtual">{state.current}ºC</span>
      </div>
    </div>     
  );
}

export default App;