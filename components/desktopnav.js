import styles from '../styles/Home.module.css';
import Link from 'next/link';

const navTitle = ['Home', 'Registry', 'Guestbook', 'Photo Album', 'RSVP'];

export default function DesktopNav() {
    return (
        <>
        <div className={styles.navigation}>
          <Link href="/"><a className={styles.link}>{navTitle[0]}</a></Link>
          <Link href="/registry"><a className={styles.link}>{navTitle[1]}</a></Link>
          <Link href="/guest-book"><a className={styles.link}>{navTitle[2]}</a></Link>
          <Link href="/photo-album"><a className={styles.link}>{navTitle[3]}</a></Link>
          <Link href="/rsvp"><a className={styles.link}>{navTitle[4]}</a></Link>
      </div>
      </>
    )
}
