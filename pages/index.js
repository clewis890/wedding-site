import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Header from '.././components/Header';
import Footer from '.././components/Footer';
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
        <Header />
          <div className={styles.grid}>
            <div className={styles.card1}>
              <div className={styles.picture}>
                <Image src="/images/antoniaclark4.webp" alt="Antonia and Clark" width="250" height="350" />
              </div>
              <div className={styles.welcometext}>
                <h3 className={styles.welcome}>Bem-Vindos</h3>
                  <p className={styles.casal}>Um americano que adora mate e uma brasileira que ama falar ingles. Assim que nos conhecemos e a vontade de ficarmos juntos foi tão grande que nem a pandemia pode nos parar! Vocês são nossos convidados especiais para celebrar o começo do resto das nossas vidas!</p>
              </div>
            </div>
            <div className={styles.card}>
              <h3 className={styles.welcome}>Noticias</h3>
                <div className={styles.newsbox}>
                  <b className={styles.blogdate}>10-11-2020</b>
                    <p className={styles.casal}>Aqui colocaremos algumas informaçoes e detalhes sobre o casamento. Alem de poderem acompanhar alguns momentos nossos, podem deixar mensagens aqui e confirmar a sua presenca para que possamos curtir esse momento maravilhoso juntos!</p>
                  <b className={styles.blogdate}>11-11-2020</b>
                    <p className={styles.casal}>Clark adicionou uma foto ao Album de Fotos. Clique na imagem em baixo para ver!</p>
                      <div className={styles.newsphotobox}>
                        <Link href="/photo-album"><a className={styles.photolink}><Image className={styles.newspicture} src="/images/antoniaclark9.jpeg" alt="Antonia and Clark" width="130" height="200" /></a></Link>
                      </div>
                </div>
            </div>
          </div>
      </main> 
      
      <Footer />
    </div>
    
  )
}
