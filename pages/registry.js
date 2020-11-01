import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link';
import Countdown from '.././components/Countdown';

import Image from 'next/image'



export default function Registry() {
    return (
        <>
        <div className={styles.container}>
            <Head>
                <title>We're getting married! Antonia and Clark</title>
                    <link rel="icon" href="/favicon.ico" />
            </Head>

        <main className={styles.main}>
            <h1 className={styles.title}>
                Antonia
                <br />
                Clark 
            </h1>
            <h2 className={styles.subtitle}>Wedding Countdown</h2>
                <div className={styles.countdownBox}>
                <Countdown className={styles.time}/>
                </div>
        <div className={styles.navigation}>
    <Link href="/"><a className={styles.link}>Home</a></Link>
    <Link href="/registry"><a className={styles.link}>Registry</a></Link>
    <Link href="/guest-book"><a className={styles.link}>Guest Book</a></Link>
    <Link href="/photo-album"><a className={styles.link}>Photo Album</a></Link>
    <Link href="/rsvp"><a className={styles.link}>RSVP</a></Link>
  </div>
  <div className={styles.grid}>
        <div className={styles.registrycard}>
        <div className={styles.welcometext}>
          <h3>Registry</h3>
            <p className={styles.casal}>Sua presença no nosso casamento é o melhor presente que poderíamos receber! Sabemos que alguns de vocês gostariam de contribuir com algo mais! Desde já agradecemos!
            </p>
            <div id="paypal-button-container"></div>

                <url src="https://www.paypal.com/sdk/js?client-id=sb&currency=USD"></url>
                    
                  

        </div>
        <div className={styles.registrypicture}>
          <Image src="/../public/images/wedding-gift.jpg" alt="Wedding picture" width="400" height="200" />
          <form action="https://www.paypal.com/donate" method="post" target="_top">
                <input type="hidden" name="cmd" value="_donations" />
                <input type="hidden" name="business" value="ZZ88DYPHBE3KY" />
                <input type="hidden" name="currency_code" value="USD" />
                <input type="image" src="https://www.paypalobjects.com/pt_BR/BR/i/btn/btn_donateCC_LG.gif" border="0" name="submit" title="Contribuir para o inicio de vida de Antonia e Clark nos Estados Unidos" alt="Faça doações com o botão do PayPal" />
                    <img alt="" border="0" src="https://www.paypal.com/pt_BR/i/scr/pixel.gif" width="1" height="1" />
            </form>
            <a href="https://paypal.me/clew90">Click me</a>

        </div>
        </div>
        </div>
        <div>
            
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