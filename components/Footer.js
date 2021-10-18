import styles from '../styles/Home.module.css';
import Link from 'next/link'

const footerNav = ['Home', 'Registry', 'Guestbook', 'Photo Album', 'RSVP'];

export default function Footer() {
    return (
        <>
        <footer className={styles.footer}>
            <Link href="/"><a className={styles.footerlink}><p>{footerNav[0]}</p></a></Link>
            <Link href="/registry"><a className={styles.footerlink}><p>{footerNav[1]}</p></a></Link>
            <Link href="/guest-book"><a className={styles.footerlink}><p>{footerNav[2]}</p></a></Link>
            <Link href="/photo-album"><a className={styles.footerlink}><p>{footerNav[3]}</p></a></Link>
            <Link href="/rsvp"><a className={styles.footerlink}><p>{footerNav[4]}</p></a></Link>
            <div className={styles.copyright}>
                <p>Copyright &copy; Clark Lewis Web Development 2020</p>
            </div>
        </footer>
        </>
      )
}
