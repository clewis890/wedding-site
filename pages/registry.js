import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link';
import Header from '.././components/Header'

import Footer from '.././components/Footer';
import Image from 'next/image';

export default function Registry() {
    return (
        <>
        <div className={styles.container}>
            <Head>
                <title>Lista de Casamento</title>
                    <link rel="icon" href="/favicon.ico" />
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </Head>

        <main className={styles.main}>
          <Header />
        <div className={styles.grid}>
          <div className={styles.registrycard}>
            <div className={styles.welcometext}>
              <h3 className={styles.registrytitle}>Lista de Casamento</h3>
                <p className={styles.registrytext}>Sua presença no nosso casamento é o melhor presente que poderíamos receber! Sabemos que alguns de vocês gostariam de contribuir com algo mais! Desde já agradecemos!</p>
            </div>
            <div className={styles.registrypicture}>
              <Image src="/images/wedding-gift.jpg" alt="Wedding picture" width="400" height="250" />
            </div>
          </div>
        </div>
      </main>

     <Footer />
    </div>
    </>
  )
}