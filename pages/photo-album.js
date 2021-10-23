import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Header from '.././components/Header'
import Footer from '.././components/Footer';
import Image from 'next/image'
import DisqusComments from '.././components/Blog'
import Slider from "react-slick";


function PhotoAlbum() {
    return (
        <>
        <div className={styles.container}>
            <Head>
                <title>Photo Album - Antonia & Clark</title>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
                <link rel="manifest" href="/site.webmanifest" />
            </Head>

         <main className={styles.main}>
          <Header />
            <div className={styles.grid}>
              <div className={styles.photocard}>
                <div className={styles.welcometext}>
                  <h3 className={styles.phototitle}>Photo Album</h3>
                    <p className={styles.phototext}>We chose a few of our favorite moments to share with you guys</p>
                </div>

                  <div className={styles.photoalbum}> 
                
                    <div className={styles.albumpic}>
                    <Image 
                    src="/images/antoniaclark1.jpg" 
                    alt="Antonia and Clark"
                     width="250" height="350" 
                     />
                  </div>
                  <div className={styles.albumpic}>
                    <Image src="/images/antoniaclark2.jpg" alt="Antonia and Clark" width="250" height="350" />
                  </div>
                  <div className={styles.albumpic}>
                    <Image src="/images/antoniaclark3.jpg" alt="Antonia and Clark" width="250" height="350" />
                  </div>
                  <div className={styles.albumpic}>
                    <Image src="/images/antoniaclark4.webp" alt="Antonia and Clark" width="250" height="350" />
                  </div>
                  <div className={styles.albumpic}>
                    <Image src="/images/antoniaclark6.jpg" alt="Antonia and Clark" width="250" height="350" />
                  </div>
                  <div className={styles.albumpic} style={{ display: 'flex', alignItems: 'center' }}>
                    <Image src="/images/antoniaclark7.jpeg" alt="Antonia and Clark" width="250" height="250" />
                  </div>
                  <div className={styles.albumpic}>
                    <Image src="/images/antoniaclark8.jpeg" alt="Antonia and Clark" width="250" height="350" />
                  </div>
                  <div className={styles.albumpic}>
                    <Image src="/images/antoniaclark9.jpg" alt="Antonia and Clark" width="250" height="350" />
                  </div>
                  <div className={styles.albumpic}>
                    <Image src="/images/antoniaclark10.jpg" alt="Antonia and Clark" width="250" height="350" />
                  </div> 
                  <div className={styles.albumpic}>
                    <Image src="/images/antoniaclark11.jpg" alt="Antonia and Clark" width="250" height="350" />
                  </div> 
                  <div className={styles.albumpic}>
                    <Image src="/images/antoniaclark12.jpg" alt="Antonia and Clark" width="250" height="350" />
                  </div> 
                    </div>  
                  <div className={styles.photoblog}>
                    <DisqusComments />
                  </div>
              </div>
            </div>
                  </main>
        <Footer />
        </div> 
    </>
  )
}

export default PhotoAlbum;
