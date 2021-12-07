import React, { useState } from "react";
import Form from "./components/countdown/Form";
import Timer from "./components/countdown/Timer";
import Finished from "./components/countdown/Finished";
import {Form as FormTo} from "./components/countTo/FormCountTo";
import {Timer as TimerTo} from "./components/countTo/TimerCountTo";
import {Finished as FinishedTo} from "./components/countTo/FinishedCountTo";
import styled from 'styled-components';

const Title = styled.div`
text-align: center;
font-size: 50px;
padding: 20px 0px;
background: pink;
color: whitesmoke;
text-shadow: 3px 3px grey;
margin-bottom: 20px; 
`;

function App() {
  const [timeLeft, setTimeLeft] = useState(0);
  const [isPaused, setIsPaused] = useState(true);
  const [timeLeftTo, setTimeLeftTo] = useState(0);
  const [isPausedTo, setIsPausedTo] = useState(true);

  return (
    <>
      <Title>Timer App</Title>
      <Form setTimeLeft={setTimeLeft} setIsPaused={setIsPaused} />
      {timeLeft < 0 ? 
        <Finished
          setTimeLeft={setTimeLeft}
          setIsPaused={setIsPaused}
        /> : 
        <Timer
          timeLeft={timeLeft}
          setTimeLeft={setTimeLeft}
          isPaused={isPaused}
          setIsPaused={setIsPaused}
        />
      }
      <br />
      <h2 align='center'>OR ...</h2>
      <br />
      <FormTo setTimeLeft={setTimeLeftTo} setIsPaused={setIsPausedTo} />
      {timeLeftTo < 0 ? 
        <FinishedTo
          setTimeLeft={setTimeLeftTo}
          setIsPaused={setIsPausedTo}
        /> : 
        <TimerTo
          timeLeft={timeLeftTo}
          setTimeLeft={setTimeLeftTo}
          isPaused={isPausedTo}
          setIsPaused={setIsPausedTo}
        />
      }
    </>
  );
}

export default App;
