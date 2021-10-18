import * as React from 'react'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Header from '.././components/Header'
import Footer from '.././components/Footer';
import Image from 'next/image';
import StripeWrapper from '.././components/StripeWrapper';


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
              <h3 className={styles.registrytitle}>Registry</h3>
                {/* <p className={styles.registrytext}>Sua presença no nosso casamento é o melhor presente que poderíamos receber! Mas para quem quiser contribuir com nosso começo na America esta plataforma foi o melhor meio que encontramos. Já estamos com os corações cheios de gratidão!</p> */}
                <div className={styles.registrybox}>
                  {/* <b className={styles.registrytext}>Para nossa familia e amigos brasileiros</b> 
                    <a href="https://antoniaeclark.zankyou.com/br/lista-casamento" className={styles.registrylink} noopener="true" target="_blank">Nossa lista se encontra aqui</a> */}
                  <b className={styles.registrytext}>Visit our registry if you'd like!</b>
                    <a href="https://registry.theknot.com/antonia-abichequer-clark-lewis-december-2020-rs/43311778" className={styles.registrylink} noopener="true" target="_blank" type="hidden">Click here for our registry</a>
                    <StripeWrapper>
                    <button className="btn">
                      You can also gift us cash by clicking here
                    </button>
                </StripeWrapper>
                </div>
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
