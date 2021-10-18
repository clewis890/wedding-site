import Head from 'next/head';
import styles from '../styles/Home.module.css';
import DisqusComments from '.././components/Blog';
import Header from '.././components/Header'
import Footer from '.././components/Footer';

export default function GuestBook() {
    return (
        <>
        <div className={styles.container}>
            <Head>
                <title>Guestbook - Antonia & Clark</title>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
                <link rel="manifest" href="/site.webmanifest" />
            </Head>

        <main className={styles.main}>
          <Header />
            <div className={styles.grid}>
              <div className={styles.guestbookcard}>
                <div className={styles.guestbooktext}>
                  <h3 className={styles.guestbook}>Guestbook</h3>
                    <p className={styles.casal}>You can leave a message here for the couple!</p>
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