import React, { useState } from "react";
import Form from "./components/Form";
import Timer from "./components/Timer";
import Finished from "./components/Finished";
import styled from 'styled-components';

const Title = styled.div`
text-align: center;
font-size: 50px;
padding: 50px 0px;
background: pink;
color: whitesmoke;
text-shadow: 3px 3px grey;
margin-bottom: 20px; 
`;

function App() {
  const [timeLeft, setTimeLeft] = useState(0);
  const [isPaused, setIsPaused] = useState(true);

  return (
    <>
      <Title>Timer App</Title>
      <Form setTimeLeft={setTimeLeft} />
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
    </>
  );
}

export default App;
