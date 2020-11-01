import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link';
import Countdown from '../components/Countdown';

import Image from 'next/image'

export default function GuestBook() {
    return (
        <>
        <div className={styles.container}>
            <Head>
                <title>We're getting married! Antonia and Clark</title>
                    <link rel="icon" href="/favicon.ico" />
            </Head>

        <main className={styles.main}>
            <h1 className={styles.title}>Antonia<br/>Clark</h1>
            <h2 className={styles.subtitle}>Wedding Countdown</h2>
                <div className={styles.countdownBox}>
                <Countdown className={styles.time}/>
                </div>
        <div className={styles.navigation}>
    <Link href="/"><a className={styles.link}>Home</a></Link>
    <Link href="/registry"><a className={styles.link}>Registry</a></Link>
    <Link href="/guest-book"><a className={styles.link}>Guest Book</a></Link>
    <Link href="/photo-album"><a className={styles.link}>Photo Album</a></Link>
    <Link href="/rsvp"><a className={styles.link}>RSVP</a></Link>
  </div>
  <div className={styles.grid}>
        <div className={styles.registrycard}>
        <div className={styles.welcometext}>
          <h3>Guestbook</h3>
          <ul>
            <li className={styles.casal}>New Message</li>
            <li className={styles.casal}>Song</li>
            <li className={styles.casal}>Video</li>
            </ul>
            
        </div>
        <div className={styles.registrypicture}>
          <Image src="/../public/images/Gift.jpg" alt="Wedding picture" width="400" height="200" />
        </div>
        </div>
        </div>
      </main>

      <footer className={styles.footer}>
      <Link href="/"><a className={styles.footerlink}>Home</a></Link>
          <Link href="/registry"><a className={styles.footerlink}>Registry</a></Link>
          <Link href="/guest-book"><a className={styles.footerlink}>Guest Book</a></Link>
          <Link href="/photo-album"><a className={styles.footerlink}>Photo Album</a></Link>
          <Link href="/rsvp"><a className={styles.footerlink}>RSVP</a></Link>
      </footer>
    </div>
    </>
  )
}