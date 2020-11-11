import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Footer from '.././components/Footer';
import Countdown from '.././components/Countdown';
import MyForm from '.././components/rsvpform';
import Navigation from '.././components/navigation';
import DesktopNav from '.././components/desktopnav';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faGrinAlt
} from "@fortawesome/free-solid-svg-icons";


export default function Registry() {
    return (
        <>
        <div className={styles.container}>
            <Head>
                <title>Confirmar a sua presença</title>
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
            <div className={styles.rsvpcard}>
              <div className={styles.welcometext}>
              <h3 className={styles.rsvptitle}>Confirmar Presença</h3>
              </div>
                <div className={styles.rsvppicture}>
                  <Image src="/images/rsvp.jpg" alt="rsvp" width="400" height="250" />
                </div>
                <span className={styles.rsvptext}>
                  <p className={styles.guesttext}>Aqui pode confirmar tua presença na festa! <FontAwesomeIcon icon={faGrinAlt} /></p>
              <MyForm />
                </span>
            </div>
          </div>
        </main>
        <Footer />
    </div>
    </>
  )
}