import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function DesktopNav() {
    return (
        <>
        <div className={styles.navigation}>
        <Link href="/"><a className={styles.link}>Home</a></Link>
        <Link href="/registry"><a className={styles.link}>Registry</a></Link>
        <Link href="/guest-book"><a className={styles.link}>Guest Book</a></Link>
        <Link href="/photo-album"><a className={styles.link}>Photo Album</a></Link>
        <Link href="/rsvp"><a className={styles.link}>RSVP</a></Link>
      </div>
      </>
)
}