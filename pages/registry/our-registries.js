import * as React from 'react'
import Head from 'next/head'
import styles from '../../styles/Home.module.css'
import Header from '../../components/Header'
import Footer from '../../components/Footer';
import Image from 'next/image';


export default function Registry() {
    return (
        <>
        <div className={styles.container}>
            <Head>
                <title>Registry - Antonia & Clark</title>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
                <link rel="manifest" href="/site.webmanifest" />
            </Head>

        <main className={styles.main}>
          <Header />
        <div className={styles.grid}>
          <div className={styles.registrycard}>
            <div className={styles.welcometext}>
              <h3 className={styles.registrytitle}>Our Registries</h3>
                <div className={styles.registrybox}>
                  <b className={styles.registrytext}>Visit our cash registry or our registry through Amazon.</b>
                    <a href="https://registry.theknot.com/antonia-abichequer-clark-lewis-december-2020-rs/43311778" className={styles.registrylink} noopener="true" target="_blank" type="hidden">Click here for our cash registry</a>
                    <a href="https://www.amazon.com/wedding/antonia-lewis-clark-lewis--december-2021/registry/1988TUCRQ6240" className={styles.registrylink} noopener="true" target="_blank" type="hidden">Click here for our Amazon registry</a>
                </div>
            </div>
            <div className={styles.registrypicture}>
              <Image src="/images/wedding-gift.jfif" alt="Wedding gift" width="400" height="450" />
            </div>
          </div>
        </div>
      </main>
     <Footer />
    </div>
    </>
  )
}
