import React, { ReactElement } from 'react';
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import '@fortawesome/fontawesome-svg-core/styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
  faHome,
  faGifts,
  faBookOpen,
  faCalendarCheck,
  faImage
} from "@fortawesome/free-solid-svg-icons";

export default function MobileNav()  {
    return (
        <>
        <div className={styles.mobilenav}>
        <Link href="/"><a  className={styles.mobilelink}><FontAwesomeIcon icon={faHome} /></a></Link>
        <Link href="/registry"><a  className={styles.mobilelink}><FontAwesomeIcon icon={faGifts} /></a></Link>
        <Link href="/guest-book"><a  className={styles.mobilelink}><FontAwesomeIcon icon={faBookOpen} /></a></Link>
        <Link href="/photo-album"><a className={styles.mobilelink}><FontAwesomeIcon icon={faImage} /></a></Link>
        <Link href="/rsvp"><a className={styles.mobilelink}><FontAwesomeIcon icon={faCalendarCheck} /></a></Link>
        </div>
        </>
    )
}
    
    