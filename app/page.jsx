'use client'
import styles from '../Styles/home.module.css'
import Image from 'next/image'
import arrowImage from '../public/arrow.png'
import { useState } from 'react'

export default function Home () {
  const [show, setShow] = useState(false)
  const [clase, setClase] = useState(styles.mydesc)
  const [claseImg, setClaseImg] = useState(styles.img)

  function mostrarDesc () {
    setShow(true)
    if (!show) {
      setClase(styles.descmostrada)
      setClaseImg(styles.imgrotar)
    } else {
      setShow(false)
      setClase(styles.mydesc)
      setClaseImg(styles.img)
    }
  }
  return (
    <>
      <div className={styles.contGral}>
        <h1>Bienvenid@ A Mi Espacio</h1>
        <Image src={arrowImage} alt='' width={30} height={30} onClick={mostrarDesc} className={claseImg} />
        <div className={clase}>
          <p>Hola, me presento. Soy Marcio Ezequiel. Esto es algo de lo que hago.</p>
          <p>Puedes Usar la barra de navegacion para ver algunos ejemplos</p>
        </div>
      </div>
    </>
  )
}
