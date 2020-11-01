import {useState, useEffect} from 'react';
import styles from '../styles/Home.module.css'


const Countdown = () => {
  const [countdownDate, setCountdownDate] = useState(new Date('12/12/2020').getTime());
  const [state, setState] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
  });

  useEffect(() => {
    setInterval(() => updateCountdown(), 1000);
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
    <div>
      <div className={styles.countdownWrapper}>
        <div className='time-section'>
          <div className={styles.time}>{state.days || '0'} Days  &rarr;</div>
        </div>
        <div className='time-section'>
          <div className='time'></div>
        </div>
        <div className='time-section'>
          <div className={styles.time}>{state.hours || '00'} Hours  &rarr;</div>
        </div>
        <div className='time-section'>
          <div className='time'></div>
        </div>
        <div className='time-section'>
          <div className={styles.time}>{state.minutes || '00'} Minutes  </div>
        </div>
        <div className='time-section'>
          <div className='time'></div>
        </div>
      </div>
    </div>
  );
};

export default Countdown;