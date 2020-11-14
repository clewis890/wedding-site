import styles from '../styles/Home.module.css';
import Navigation from './navigation';
import DesktopNav from './desktopnav';
import Countdown from './Countdown';

export default function Header() {
    return (
        <>
            <Navigation />        
                <h1 className={styles.title}
                >Antonia<br/>&<br />Clark<br />
                {/* <span>Porto Alegre, RS, Brasil</span><br /> */}
                <span>12.12.2020</span></h1>
                <div className={styles.countdownBox}>
                    <Countdown className={styles.time}/>
                </div>
            <DesktopNav />
        </>
    )     
}
