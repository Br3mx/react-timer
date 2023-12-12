import Container from "./Components/Container/Container.js";
import Timer from "./Components/Timer/Timer.js";
import Button from "./Components/Button/Button.js";
import { useState, useEffect } from "react";

function App() {
  const [time, setTime] = useState(0);
  const [intervalValue, setIntervalValue] = useState(null);

  const startTimer = () => {
    if(intervalValue) clearInterval(intervalValue);
    setIntervalValue(setInterval(() => {setTime(prevValue => prevValue +1)}, 1));
  };

  const stopTimer = () => {
    clearInterval(intervalValue);
  };

  useEffect(() => {
    return () => {
      if(intervalValue) clearInterval(intervalValue);
    };
  }, []);

  const resetTimer = () => {
    if(intervalValue) clearInterval(intervalValue);
    setTime(0);
  };
  return (
    <Container>
        <Timer timer={time}></Timer>
        <Button onClick={startTimer}>Start</Button>
        <Button onClick={stopTimer}>Stop</Button>
        <Button onClick={resetTimer}>Reset</Button>
    </Container>
  );
}

export default App;
