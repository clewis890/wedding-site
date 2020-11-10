import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link';
import Countdown from '.././components/Countdown';
import Navigation from '.././components/navigation';
import DesktopNav from '.././components/desktopnav'

import Image from 'next/image'

 function PhotoAlbum() {
    return (
        <>
        <div className={styles.container}>
            <Head>
                <title>Fotos de Antonia e Clark</title>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                    <link rel="icon" href="/favicon.ico" />
            </Head>

        <main className={styles.main}>
          <Navigation />
            <h1 className={styles.title}>Antonia<br />&<br />Clark</h1>
                <div className={styles.countdownBox}>
                <Countdown className={styles.time}/>
                </div>
       <DesktopNav />
  <div className={styles.grid}>
        <div className={styles.photocard}>
        <div className={styles.welcometext}>
          <h3 className={styles.phototitle}>Photo Album</h3>
            <p className={styles.phototext}>Aqui sao algumas fotos do casal</p>
        </div>
        <div className={styles.photoalbum}>
        <div className={styles.albumpic}>
          <Image src="/images/antoniaclark1.jpg" alt="Antonia and Clark" width="250" height="350" />
        </div>
        <div className={styles.albumpic}>
          <Image src="/images/antoniaclark2.jpg" alt="Antonia and Clark" width="250" height="350" />
        </div>
        <div className={styles.albumpic}>
          <Image src="/images/antoniaclark3.jpg" alt="Antonia and Clark" width="250" height="350" />
        </div>
        <div className={styles.albumpic}>
          <Image src="/images/antoniaclark4.webp" alt="Antonia and Clark" width="250" height="350" />
        </div>
        <div className={styles.albumpic}>
          <Image src="/images/antoniaclark6.jpg" alt="Antonia and Clark" width="250" height="350" />
        </div>
        <div className={styles.albumpic}>
          <Image src="/images/antoniaclark7.jpg" alt="Antonia and Clark" width="250" height="350" />
        </div>
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


export default PhotoAlbum;