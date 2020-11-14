import '../styles/globals.css'
import { Provider } from 'next-auth/client'
import { FormspreeProvider } from '@formspree/react';

export default function MyApp ({ Component, pageProps }) {
  const { session } = pageProps;
  
  return (
    <Provider options={{ site: process.env.SITE }} session={session}>
      <Component {...pageProps} />
    </Provider>
  )
}
