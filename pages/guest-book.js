import Head from 'next/head';
import styles from '../styles/Home.module.css';
import DisqusComments from '.././components/Blog';
import Header from '.././components/Header'
import Footer from '.././components/Footer';

export default function GuestBook() {
    return (
        <>
        <div className={styles.container}>
            <Head>
                <title>Livro de Visitas</title>
                    <link rel="icon" href="/favicon.ico" />
            </Head>

        <main className={styles.main}>
          <Header />
  <div className={styles.grid}>
        <div className={styles.guestbookcard}>
        <div className={styles.guestbooktext}>
          <h3 className={styles.guestbook}>Livro de Visitas</h3>
          <p className={styles.casal}>Aqui pode deixar uma mensagem para nos!</p>
          </div>
          <DisqusComments />
        </div>
        </div>
      </main>

     <Footer />
    </div>
    </>
  )
}