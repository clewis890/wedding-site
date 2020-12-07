import styles from '../styles/Home.module.css';
import Navigation from './navigation';
import DesktopNav from './desktopnav';
import Countdown from './Countdown';
import { motion } from 'framer-motion';

export default function Header() {
    return (
        <>
            {/* Importing the Navigation component into the Header */}
        
            <Navigation />
             {/* Using framer motion animation
            for h1 header at top of page */}
            <motion.div initial="hidden" animate="visible" variants={{
                hidden: {
                    scale: 0.2,
                    opacity: 0
                },
                visible: {
                    scale: 1,
                    opacity: 1,
                    transition: {
                        delay: 0.5
                    }
                },
            }}>       
                <h1 className={styles.title}
                >Antonia<br/>&<br />Clark<br />
                <span>12.12.2020</span>
                </h1>
                </motion.div> 
                <div className={styles.countdownBox}>
                    <Countdown className={styles.time}/>
                </div>
            <DesktopNav />
        </>
    )     
}
