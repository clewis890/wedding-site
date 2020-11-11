import styles from '../styles/Home.module.css';
import Link from 'next/link'


export default function Footer() {
    return (
        <>
        <footer className={styles.footer}>
            <Link href="/"><a className={styles.footerlink}>Inicio</a></Link>
            <Link href="/registry"><a className={styles.footerlink}>Lista de Casamento</a></Link>
            <Link href="/guest-book"><a className={styles.footerlink}>Livro de Visitas</a></Link>
            <Link href="/photo-album"><a className={styles.footerlink}>Album de Fotos</a></Link>
            <Link href="/rsvp"><a className={styles.footerlink}>Confirmar Presença</a></Link>
        </footer>
        </>
      )
}