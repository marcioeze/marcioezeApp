'use client'
import Styles from '../../Styles/taskManager.module.css'
import StylesT from '../../Styles/tarjtarea.module.css'
import { useState } from 'react'

export default function HomePage () {
  const [componentes, setComponentes] = useState([])

  const [titulo, setTitulo] = useState('')
  const [descripcion, setDesc] = useState('')
  const [time, setTime] = useState()

  const [onoff, setOnOF] = useState({ display: 'none' })
  function onMenu () {
    setOnOF({ display: 'block' })
  }
  function eliminarTarea (id) {
    setComponentes(prevComponentes => {
      const nuevasTarjetas = prevComponentes.filter(tarjeta => tarjeta.props.id !== id)
      return nuevasTarjetas
    })
  }
  function offMenu () {
    if (titulo === '' || descripcion === '') {
      alert('Los campos de texto deben ser rellenados')
    } else if (titulo.length <= 4 || descripcion.length <= 6) {
      alert('El minimo permitido de caracteres para el titulo es de 4 y 6 para la descripcion')
    } else if (titulo.length >= 15 || descripcion.length >= 40) {
      alert('Maximo 15 caracteres para el titulo y 40 para la descripcion')
    } else {
      const fechaActual = new Date()
      const formattedDate = fechaActual.toLocaleString('es-MX', { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit' })

      const id = Math.random().toString(36).substring(2, 9)

      const fechaFinalizacion = new Date(fechaActual.getTime() + (time * 24 * 60 * 60 * 1000))

      const tiempoRestanteMs = fechaFinalizacion.getTime() - new Date().getTime()

      const diasRestantes = Math.ceil(tiempoRestanteMs / (1000 * 60 * 60 * 24))
      const formattedFechaFinalizacion = fechaFinalizacion.toLocaleString('es-MX', { year: 'numeric', month: '2-digit', day: '2-digit' })
      const nuevoComponente = (
        <div className={StylesT.tarjTarea} id={id}>
          <div className='contTitulo'>
            <h2>{titulo}</h2>
          </div>
          <div className={StylesT.desc}>
            <p>{descripcion}</p>
          </div>
          <div className={StylesT.tiempoInicio}>
            <p>Fecha Creacion: {formattedDate}</p>
          </div>
          <div className={StylesT.tiempoFinal}>
            <p>Fecha Final: {formattedFechaFinalizacion}</p>
          </div>
          <div className={StylesT.tiempoRestante}>
            <p>Quedan {diasRestantes} Días</p>
          </div>
          <div className={StylesT.funcionalidades}>
            <button className={StylesT.btnPosponer}>Posponer Tarea</button>
            <button className={StylesT.btnEditar}>Editar</button>
            <button className={StylesT.btnEliminar} onClick={() => eliminarTarea(id)} formAction='submit'>Eliminar Tarea</button>

          </div>
        </div>
      )
      setComponentes(componentes => [...componentes, nuevoComponente])
      setOnOF({ display: 'none' })
    }
  }
  return (
    <>
      <div className={Styles.contenedorgral}>
        <h1 className={Styles.h1}>Quieres organizar mejor tu trabajo?</h1>
        <div className={Styles.modal} style={onoff}>
          <div className={Styles.contTitulo}>
            Titulo de la tarea
            <input type='text' onChange={e => setTitulo(e.target.value)} required />
          </div>
          <div className={Styles.contDesc}>
            Descripcion breve
            <input type='text' onChange={e => setDesc(e.target.value)} required />
          </div>
          <div className={Styles.contDesc}>
            Duracion (En Dias)
            <input type='number' onChange={e => setTime(e.target.value)} required />
          </div>
          <button onClick={offMenu}>Crear</button>
        </div>
        <div className={Styles.contTarjetas}>
          {componentes.map((comp, index) => (
            <div key={index}>
              {comp}
            </div>
          ))}

        </div>
        <div className={Styles.btnAgregar}>
          <button onClick={onMenu}>Agregar Nueva Tarea</button>
        </div>
      </div>
    </>
  )
}
