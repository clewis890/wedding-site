import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link';
import Countdown from '.././components/Countdown';
import Navigation from '.././components/navigation';
import DesktopNav from '.././components/desktopnav'
import Image from 'next/image';



export default function Registry() {
    return (
        <>
        <div className={styles.container}>
            <Head>
                <title>We're getting married! Antonia and Clark</title>
                    <link rel="icon" href="/favicon.ico" />
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </Head>

        <main className={styles.main}>
          <Navigation />
            <h1 className={styles.title}>Antonia<br />&<br />Clark</h1>
                <div className={styles.countdownBox}>
                <Countdown className={styles.time}/>
                </div>
       <DesktopNav />
        <div className={styles.grid}>
        <div className={styles.registrycard}>
        <div className={styles.welcometext}>
          <h3>Registry</h3>
            <p className={styles.casal}>Sua presença no nosso casamento é o melhor presente que poderíamos receber! Sabemos que alguns de vocês gostariam de contribuir com algo mais! Desde já agradecemos!
            </p>
            <div id="paypal-button-container"></div>
                <a src="https://www.paypal.com/sdk/js?client-id=sb&currency=USD"></a>
            </div>
        <div className={styles.registrypicture}>
          <Image src="/images/wedding-gift.jpg" alt="Wedding picture" width="400" height="250" />
          <form action="https://www.paypal.com/donate" method="post" target="_top">
                <input type="hidden" name="cmd" value="_donations" />
                <input type="hidden" name="business" value="ZZ88DYPHBE3KY" />
                <input type="hidden" name="currency_code" value="USD" />
                <input type="image" src="https://www.paypalobjects.com/pt_BR/BR/i/btn/btn_donateCC_LG.gif" border="0" name="submit" title="Contribuir para o inicio de vida de Antonia e Clark nos Estados Unidos" alt="Faça doações com o botão do PayPal" />
                    <img alt="" border="0" src="https://www.paypal.com/pt_BR/i/scr/pixel.gif" width="1" height="1" />
            </form>          
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