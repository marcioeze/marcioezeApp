import Link from 'next/link'
import styles from '../../Styles/nav.module.css'

export default function Nav () {
  const routes = {
    imagenes: {
      route: '/Buscar-Imagen',
      label: 'Buscador de Imagenes'
    },
    clima: {
      route: '/Clima',
      label: 'Ver Clima'
    },
    taskManager: {
      route: '/TaskManager',
      label: 'Task Manager'
    },
    repositorio: {
      route: 'https://github.com/marcioeze/marcioezeApp.git',
      label: 'Repositorio GitHub'
    }
  }

  return (
    <>
      <nav className={styles.Nav}>
        <ul className={styles.Menu}>
          <li><Link href={routes.imagenes.route}>{routes.imagenes.label}</Link></li>
          <li><Link href={routes.clima.route}>{routes.clima.label}</Link></li>
          <li><Link href={routes.taskManager.route}>{routes.taskManager.label}</Link></li>
          <li><Link href={routes.repositorio.route}>{routes.repositorio.label}</Link></li>
          <li><Link href='/'>Home</Link></li>
        </ul>
      </nav>
    </>
  )
}
