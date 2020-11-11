import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Link from 'next/link';
import Countdown from '../components/Countdown';
import Navigation from '.././components/navigation';
import DesktopNav from '.././components/desktopnav';
import DisqusComments from '.././components/Blog';
import Footer from '.././components/Footer';

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
        <div className={styles.guestbooktext}>
          <h3 className={styles.guestbook}>Livro de Visitas</h3>
          <p className={styles.casal}>Aqui pode deixar uma mensagem para nos!</p>
          </div>
          <DisqusComments />
        </div>
        </div>
      </main>

     <Footer />
    </div>
    </>
  )
}