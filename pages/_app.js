import '../styles/globals.css'
import { Provider } from 'next-auth/client'
import { FormspreeProvider } from '@formspree/react';
import { motion, AnimateSharedLayout } from 'framer-motion'

export default function MyApp ({ Component, pageProps, router }) {
  const { session } = pageProps;
  
  return (
    
    <Provider options={{ site: process.env.SITE }} session={session}>
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
