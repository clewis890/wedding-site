import styles from '../styles/Home.module.css';
import Link from 'next/link'

export default function Footer() {
    return (
        <>
        <footer className={styles.footer}>
            <Link href="/"><a className={styles.footerlink}><p>Início</p></a></Link>
            <Link href="/registry"><a className={styles.footerlink}><p>Lista de Casamento</p></a></Link>
            <Link href="/guest-book"><a className={styles.footerlink}><p>Livro de Visitas</p></a></Link>
            <Link href="/photo-album"><a className={styles.footerlink}><p>Álbum de Fotos</p></a></Link>
            <Link href="/rsvp"><a className={styles.footerlink}><p>Confirmar Presença</p></a></Link>
            <div className={styles.copyright}>
                <p>Copyright &copy; Clark Lewis Web Development 2020</p>
            </div>
        </footer>
        </>
      )
}
