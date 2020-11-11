import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function DesktopNav() {
    return (
        <>
        <div className={styles.navigation}>
        <Link href="/"><a className={styles.link}>Inicio</a></Link>
        <Link href="/registry"><a className={styles.link}>Lista de Casamento</a></Link>
        <Link href="/guest-book"><a className={styles.link}>Livro de Visitas</a></Link>
        <Link href="/photo-album"><a className={styles.link}>Album de Fotos</a></Link>
        <Link href="/rsvp"><a className={styles.link}>Confirmar Presença</a></Link>
      </div>
      </>
)
}