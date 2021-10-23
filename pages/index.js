import Head from 'next/head'; 
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Header from '.././components/Header';
import Footer from '.././components/Footer';
import Image from 'next/image'


 export default function Home() {    
  return (
    <div className={styles.container}>
      <Head>
        <title>We got hitched! Antonia & Clark</title>
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
                <h3 className={styles.welcome}>Welcome</h3>
                  <p className={styles.casal}>An American that loves mate and a Brazilian that loves speaking english. That's how we met and the desire to be together was so great that not even the pandemic could keep us apart! You are our special invites to celebrate the start of the rest of our lives together!</p>
                  {/* Um americano que adora mate e uma brasileira que ama falar inglês. Foi assim que nos conhecemos e a vontade de ficarmos juntos era tão grande que nem a pandemia pode nos parar! Vocês são nossos convidados especiais para celebrar o começo do resto das nossas vidas!*/}              
              </div> 
              
            </div>
            <div className={styles.venuecard}>
              <div className={styles.venue}>
                  <h3 className={styles.venuetitle}>About the Reception</h3>
                    <p className={styles.venueaddress}>
                      {/* Vai acontecer na D. Boat House que fica na Rua dos Pescadores, 1550 às 17 horas, o traje da ocasião é Alto Esporte e o mais importante pra nós é que todos se divirtam!*/}
                      It will take place December 4th, 2021 at 1621 Maiden Lane, Wenatchee, WA 98801 from 3-5pm. The dress for the occasion is dressy casual. Can't wait to see you there!
                      </p>
              </div>
            </div>
            <div className={styles.card}>
              <h3 className={styles.newswelcome}>News</h3>
                <div className={styles.newsbox}>
                <b className={styles.blogdate}>17/10/2021</b>
                    <p className={styles.casal}>
                      We are holding a special wedding reception in Wenatchee, WA on December 4th, 2021!! Please see section above or invitation for details.
                    </p>
                <b className={styles.blogdate}>12/12/2020</b>
                    <p className={styles.casal}>Unfortunately, because of the decree in Rio Grande do Sul, our party had to be postponed to an undetermined date. But we have already received so much love and care from so many of you and we are so grateful for the wonderful family we have and such thoughtful friends. Thank you for everything, and we will update everybody when a new date is determined. Abraços e beijos!  
                    {/* Infelizmente, por causa do decreto no Rio Grande do Sul, a nossa festa foi adiada a uma data ainda não determinada. Mas já recebemos tanto amor e carinho de tantos de vocês e somos tão gratos pela familia maravilhosa que temos e os nossos amigos tão carinhosos. Obrigado por tudo, e nos vamos avisando todo mundo quando uma data de festa for determinada! Abraços e beijos! */}
                    </p>
                    <b className={styles.blogdate}>11/11/2020</b>
                    <p className={styles.casal}>Clark added a photo to our album. Click on the image below to check it out!</p>
                    <div className={styles.newsphotobox}
                    >
                      <Link href="/photo-album"><a 
                      // style={{ boxShadow: '1px 2px 10px 2px black' }}
                      className={styles.photolink}
                      ><Image 
                      className={styles.newspicture} 
                      src="/images/antoniaclark8.jpeg" alt="Antonia and Clark" width="130" height="200" /></a></Link>
                      </div>
                  <b className={styles.blogdate}>10/11/2020</b>
                    <p className={styles.casal}>
                      Here we will put some information and details about the wedding reception. You'll not only be able to follow along to some of our best moments, you can also leave messages here for us and confirm your presence so that we can enjoy this wonderful moment together!
                      {/* Aqui colocaremos algumas informações e detalhes sobre o casamento. Além de poderem acompanhar alguns momentos nossos, podem deixar suas mensagens aqui e confirmarem a sua presença para que possamos curtir esse momento maravilhoso juntos! */}
                      </p>                    
                </div>
            </div>
          </div>
      </main> 
      
      <Footer />
    </div>
    
  )
}
