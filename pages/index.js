import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link';
import Countdown from '.././components/Countdown';
import Navigation from '.././components/navigation';
import DesktopNav from '.././components/desktopnav'
import Image from 'next/image'

 export default function Home() {    
  return (
    <div className={styles.container}>
      <Head>
        <title>Nos vamos casar! Antonia e Clark</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
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
        <div className={styles.card1}>
        <div className={styles.picture}>
          <Image src="/../public/images/antoniaclark4.webp" alt="Antonia and Clark" width="250" height="350" />
        </div>
        <div className={styles.welcometext}>
          <h3>Bem-vindos</h3>
            <p className={styles.casal}>Um americano que adora mate e uma brasileira que ama falar ingles. Assim que nos conhecemos e a vontade de ficarmos juntos foi tão grande que nem a pandemia pode nos parar! Vocês são nossos convidados especiais para celebrar o começo do resto das nossas vidas!</p>
        </div>
        </div>

          <div className={styles.card}>
            <h3>Noticias</h3>
            <p className={styles.casal}>Colocamos algumas fotos da gente aqui no site, aqui tu pode confirmar tua presenca na festa, entre outras coisas. Obrigado por visitar nosso site e aguardamos tua presenca em Dezembro :)</p>
          </div>
          </div>
      </main> 
      <footer className={styles.footer}>
      <Link href="/index"><a className={styles.footerlink}>Home</a></Link>
          <Link href="/registry"><a className={styles.footerlink}>Registry</a></Link>
          <Link href="/guest-book"><a className={styles.footerlink}>Guest Book</a></Link>
          <Link href="/photo-album"><a className={styles.footerlink}>Photo Album</a></Link>
          <Link href="/rsvp"><a className={styles.footerlink}>RSVP</a></Link>
      </footer>
    </div>
    
  )
}
