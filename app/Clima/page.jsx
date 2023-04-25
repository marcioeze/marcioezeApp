'use client'
import { useState } from 'react'
import '../../Styles/clima.css'

export default function Clima () {
  const apiKey = 'f09b725bca53445a9f6114627232504'
  const baseUrl = 'https://api.weatherapi.com/v1/current.json'

  const [city, setCity] = useState('')
  const [weatherData, setWeatherData] = useState(null)

  async function handleSubmit (event) {
    event.preventDefault()
    const url = `${baseUrl}?key=${apiKey}&q=${city}`
    const response = await fetch(url)
    const data = await response.json()
    setWeatherData(data)
  }

  return (
    <div className='ContGral'>
      <form onSubmit={handleSubmit}>
        <label htmlFor='city' className='titulo'>Ingrese el nombre de la ciudad:</label>
        <input type='text' id='city' value={city} onChange={(event) => setCity(event.target.value)} />
        <button type='submit'>Consultar</button>
      </form>

      {weatherData && weatherData.location && (
        <div id='weather-info'>
          <h2 className='titulorespuesta'>Información meteorológica para {weatherData.location.name}, {weatherData.location.region}, {weatherData.location.country}</h2>
          <p><span>Temperatura actual:</span> {weatherData.current.temp_c}°C</p>
          <p><span>Descripción del clima:</span> {weatherData.current.condition.text}</p>
          <p><span>Humedad:</span> {weatherData.current.humidity}%</p>
        </div>
      )}
    </div>
  )
}
