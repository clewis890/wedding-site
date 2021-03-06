import {useState, useEffect} from 'react';
import styles from '../styles/Home.module.css';

const Countdown = () => {
  const [countdownDate, setCountdownDate] = useState(new Date('12/12/2020 17:00:00').getTime());
  const [state, setState] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
  });

  useEffect(() => {
    setInterval(() => updateCountdown(), 1000);

    return () => {
      clearInterval(setInterval.current);
    };
  }, []);

  const updateCountdown = () => {
    if (countdownDate) {
        // Get the current time
        const currentTime = new Date().getTime();
    
        // Get the time remaining until the countdown date
        const distanceToDate = countdownDate - currentTime;
    
        // Calculate days, hours, minutes and seconds remaining
        let days = Math.floor(distanceToDate / (1000 * 60 * 60 * 24));
        let hours = Math.floor(
          (distanceToDate % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
        );
        let minutes = Math.floor(
          (distanceToDate % (1000 * 60 * 60)) / (1000 * 60),
        );
    
        // For visual appeal, add a zero to each number that's only one digit
        const numbersToAddZeroTo = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    
        if (numbersToAddZeroTo.includes(hours)) {
          hours = `0${hours}`;
        } else if (numbersToAddZeroTo.includes(minutes)) {
          minutes = `0${minutes}`;
        } 
    
        // Set the state to each new time
        setState({ days: days, hours: hours, minutes: minutes });
      }  
};

  return (
      <div className={styles.countdownWrapper}>
        <div className={styles.section}>
          <div className={styles.time}>{state.days || '0'} <span className={styles.time2}>Dias</span></div>
        </div>
        <div className={styles.section}>
          <div className={styles.time}></div>
        </div>
        <div className={styles.section}>
          <div className={styles.time}>{state.hours || '00'} <span className={styles.time2}>Horas</span></div>
        </div>
        <div className={styles.section}>
          <div className={styles.time}></div>
        </div>
        <div className={styles.section}>
          <div className={styles.time}>{state.minutes || '00'} <span className={styles.time2}>Minutos</span></div>
        </div>
        <div className={styles.section}>
          <div className={styles.time}></div>
        </div>
      </div>
  );
};

export default Countdown;
