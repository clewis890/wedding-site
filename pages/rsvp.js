import Head from 'next/head';
import styles from '../styles/Home.module.css'
import Link from 'next/link';
import Countdown from '.././components/Countdown';
import MyForm from '.././components/rsvpform';
import Navigation from '.././components/navigation';
import DesktopNav from '.././components/desktopnav'
import Image from 'next/image'



export default function Registry() {
    return (
        <>
        <div className={styles.container}>
            <Head>
                <title>Confirmar a sua presenca</title>
                    <link rel="icon" href="/favicon.ico" />
            </Head>

        <main className={styles.main}>
          <Navigation />
            <h1 className={styles.title}>Antonia<br />Clark</h1>
                <div className={styles.countdownBox}>
                  <Countdown className={styles.time}/>
                </div>
          <DesktopNav />
          <div className={styles.grid}>
            <div className={styles.rsvpcard}>
              <div className={styles.registrypicture}>
              <h3>RSVP</h3>
              <Image src="/../public/images/rsvp.jpg" alt="rsvp" width="400" height="300" />
              </div>
            <div className={styles.rsvptext}>
              <p className={styles.guesttext}>Aqui podera confirmar tua presenca na festa! Mal podemos esperar :)</p>
              <MyForm />
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