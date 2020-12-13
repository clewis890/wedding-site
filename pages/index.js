import Head from 'next/head'; 
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Header from '.././components/Header';
import Footer from '.././components/Footer';
import Image from 'next/image'
import Notiflix from "notiflix";


Notiflix.Notify.Info(
  'Info message text',
  function() {

  }
);

 export default function Home() {    
  return (
    <div className={styles.container}>
      <Head>
        <title>Nós vamos casar! Antonia e Clark</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />              
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <script src="dist/notiflix-aio-2.6.0.min.js"></script>
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
                  <p className={styles.casal}>Um americano que adora mate e uma brasileira que ama falar inglês. Foi assim que nos conhecemos e a vontade de ficarmos juntos era tão grande que nem a pandemia pode nos parar! Vocês são nossos convidados especiais para celebrar o começo do resto das nossas vidas!</p>
              </div>
              
            </div>
            <div className={styles.venuecard}>
              <div className={styles.venue}>
                  <h3 className={styles.venuetitle}>Sobre O Grande Dia</h3>
                    <p className={styles.venueaddress}>Vai acontecer na D. Boat House que fica na Rua dos Pescadores, 1550 às 17 horas, o traje da ocasião é Alto Esporte e o mais importante pra nós é que todos se divirtam!</p>
              </div>
            </div>
            <div className={styles.card}>
              <h3 className={styles.newswelcome}>Notícias</h3>
                <div className={styles.newsbox}>
                  <b className={styles.blogdate}>10/11/2020</b>
                    <p className={styles.casal}>Aqui colocaremos algumas informações e detalhes sobre o casamento. Além de poderem acompanhar alguns momentos nossos, podem deixar suas mensagens aqui e confirmarem a sua presença para que possamos curtir esse momento maravilhoso juntos!</p>
                  <b className={styles.blogdate}>11/11/2020</b>
                    <p className={styles.casal}>Clark adicionou uma foto ao nosso álbum. Clique na imagem abaixo para visualizar!</p>
                    <div className={styles.newsphotobox}>
                      <Link href="/photo-album"><a className={styles.photolink}><Image className={styles.newspicture} src="/images/antoniaclark9.jpeg" alt="Antonia and Clark" width="130" height="200" /></a></Link>
                      </div>
                    <b className={styles.blogdate}>12/12/2020</b>
                    <p className={styles.casal}>Infelizmente, por causa do decreto no Rio Grande do Sul, a nossa festa foi adiada a uma data ainda não determinada. Mas já recebemos tanto amor e carinho de tantos de vocês e somos tão gratos pela familia maravilhosa que temos e os nossos amigos tão carinhosos. Obrigado por tudo, e nos vamos avisando todo mundo quando uma data de festa for determinada! Abraços e beijos!</p>
                </div>
            </div>
          </div>
      </main> 
      
      <Footer />
    </div>
    
  )
}
