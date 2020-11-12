import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Footer from '.././components/Footer';
import MyForm from '.././components/rsvpform';
import Header from '.././components/Header'
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
                <title>Confirmar a sua Presença - Antonia e Clark</title>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
                <link rel="manifest" href="/site.webmanifest" />
            </Head>

        <main className={styles.main}>
         <Header />
          <div className={styles.grid}>
            <div className={styles.rsvpcard}>
              <div className={styles.welcometext}>
              <h3 className={styles.rsvptitle}>Confirme sua Presença</h3>
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