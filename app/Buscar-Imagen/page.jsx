'use client'
import React, { useState } from 'react'
import axios from 'axios'
import Image from 'next/image'
import '../../Styles/buscadorimagen.css'

export default function ImgGenerator () {
  const [query, setQuery] = useState('')
  const [images, setImages] = useState([])

  async function searchImages (query, page, perPage, accessKey) {
    try {
      const response = await axios.get('https://api.unsplash.com/search/photos', {
        params: {
          query,
          page,
          per_page: perPage,
          client_id: accessKey
        }
      })

      return response.data.results
    } catch (error) {
      console.error(error)
      return []
    }
  }

  const handleInputChange = (event) => {
    setQuery(event.target.value)
  }

  const handleSearchClick = async (event) => {
    event.preventDefault()
    const results = await searchImages(query, 1, 10, '8C3TKKxoQ_poGxmeQC-zSF8GSNdejr4-e88y5sXA8fc')
    setImages(results)
  }

  return (
    <>
      <div className='padre'>
        <form onSubmit={handleSearchClick} className='buscador'>
          <label><h2>Busca una imagen aqui</h2></label>
          <input className='campotexto' type='text' value={query} onChange={handleInputChange} />
          <button type='submit'>Buscar imagen</button>
        </form>
      </div>
      <div className='contImagenesgral'>
        <div className='contImagenes'>
          {images.map((image) => (
            <Image key={image.id} src={image.urls.small} alt={image.alt_description} width={350} height={300} />
          ))}
        </div>
      </div>
    </>
  )
}
