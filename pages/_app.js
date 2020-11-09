import '../styles/globals.css'
import { Provider } from 'next-auth/client'

export default function MyApp ({ Component, pageProps }) {
  const { session } = pageProps;
  
  return (
    <Provider options={{ site: process.env.SITE }} session={session}>
      <Component {...pageProps} />
    </Provider>
  )
}
