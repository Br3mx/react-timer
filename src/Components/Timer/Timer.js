import styles from './Timer.module.scss';

const Timer = ({ timer }) => {
    const padTo2Digits = num => {
        return num.toString().padStart(2, '0');
      }
      
      const convertMsToTime = milliseconds => {
        let seconds = Math.floor(milliseconds / 1000);
        let minutes = Math.floor(seconds / 60);
        let hours = Math.floor(minutes / 60);
      
        milliseconds = milliseconds % 1000;
        seconds = seconds % 60;
        minutes = minutes % 60;
        
        let formatedTime = `${padTo2Digits(hours)}:${padTo2Digits(minutes)}:${padTo2Digits(seconds)}.${milliseconds.toString().padStart(1, '0')}`;
        return formatedTime;
    };
    return (
        <div className={styles.time}>
            {convertMsToTime(timer)}
        </div>
    )
}

export default Timer;