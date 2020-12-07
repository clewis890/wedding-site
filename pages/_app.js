import '../styles/globals.css'
import { Provider } from 'next-auth/client';
import { motion } from 'framer-motion';

export default function MyApp ({ Component, pageProps, router }) {
  const { session } = pageProps;
  
  return (
    <Provider options={{ site: process.env.SITE }} session={session}>
      {/* page transition with framer motion */}
      <motion.div key={router.route} initial="pageInitial" animate="pageAnimate" variants={{
        pageInitial: {
          opacity: 0.5
        },
        pageAnimate: {
          opacity: 1
        },
      }}>
        <Component {...pageProps} />
      </motion.div>
    </Provider>
  )
}
