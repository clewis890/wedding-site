import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Link from 'next/link';
import Countdown from '../components/Countdown';
import Navigation from '.././components/navigation';
import DesktopNav from '.././components/desktopnav';
import DisqusComments from '.././components/Blog';

import Image from 'next/image';

export default function GuestBook() {
    return (
        <>
        <div className={styles.container}>
            <Head>
                <title>We're getting married! Antonia and Clark</title>
                    <link rel="icon" href="/favicon.ico" />
            </Head>

        <main className={styles.main}>
          <Navigation />
            <h1 className={styles.title}>Antonia<br/>&<br />Clark</h1>
                <div className={styles.countdownBox}>
                <Countdown className={styles.time}/>
                </div>
      <DesktopNav />
  <div className={styles.grid}>
        <div className={styles.guestbookcard}>
        <div className={styles.welcometext}>
          <h3>Guestbook</h3>
          <p>Aqui pode deixar uma mensagem para nos se quiser!</p>
          </div>
          <DisqusComments />
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