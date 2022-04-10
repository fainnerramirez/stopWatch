import { useEffect, useState } from "react";
import "./App.css";

const App = () => {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  //useEffect
  useEffect(() => {
    const configStopWatch = () => {
      setTimeout(() => {
        setSeconds(() => seconds + 1);
      }, 1000);

      if (seconds === 60) {
        setMinutes(() => minutes + 1);
        setSeconds(0);
      }

      if (minutes === 60) {
        setHours(() => hours + 1);
        setMinutes(0);
      }
    };

    configStopWatch();
  }, [hours, minutes, seconds]);

  return (
    <div className="App">
      <div className="container">
        <div className="item">
          <h1>{hours}</h1>
          <h1>Horas</h1>
        </div>
        <div className="item">
          <h1>{minutes}</h1>
          <h1>Minutos</h1>
        </div>
        <div className="item">
          <h1>{seconds}</h1>
          <h1>Segundos</h1>
        </div>
      </div>
    </div>
  );
};

export default App;
