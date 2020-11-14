import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Header from '.././components/Header'
import Footer from '.././components/Footer';
import Image from 'next/image';

export default function Registry() {
    return (
        <>
        <div className={styles.container}>
            <Head>
                <title>Lista de Casamento - Antonia e Clark</title>
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
              <h3 className={styles.registrytitle}>Lista de Casamento</h3>
                <p className={styles.registrytext}>Sua presença no nosso casamento é o melhor presente que poderíamos receber! Mas para quem quiser contribuir com nosso começo na America esta plataforma foi o melhor meio que encontramos. Já estamos com os corações cheios de gratidão!</p>
                <b className={styles.registrytext}>Para nossa familia e amigos brasileiros</b> 
                <a href="https://antoniaeclark.zankyou.com/br/lista-casamento" className={styles.registrylink} noopener="true" target="_blank">Nossa lista se encontra aqui</a>
                <b className={styles.registrytext}>For our American friends and family</b>
                <a href="https://registry.theknot.com/antonia-abichequer-clark-lewis-december-2020-rs/43311778" className={styles.registrylink} noopener="true" target="_blank" type="hidden">Click here for our registry</a>
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
