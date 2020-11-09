import '../styles/globals.css'
import { Provider } from 'next-auth/client'

import { config, library } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';

import { 
  faChevronRight,
  faChevronDown,
  faCheck,
  faTimes,
  faSpinner,
  faPray
} from "@fortawesome/free-solid-svg-icons";

library.add(faChevronRight, faChevronDown, faCheck, faTimes, faSpinner)

export default function MyApp ({ Component, pageProps }) {
  const { session } = pageProps;
  
  return (
    <Provider options={{ site: process.env.SITE }} session={session}>
      <Component {...pageProps} />
    </Provider>
  )
}
