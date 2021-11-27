import React, { useEffect } from 'react';
import Confetti from 'react-confetti';
import useSound from 'use-sound';
import DADAA from '../finished-sound/DADAA.mp3';
import styled from 'styled-components'

const Text = styled.h1`
  margin: 20px 20px;
`;

const Button = styled.button`
  font-size: 20px;
`;

const Finished = ({setTimeLeft, setIsPaused}) => {
  let width = window.innerWidth;
  const [play] = useSound(DADAA, { volume: .5 });

  useEffect(() => {
    play();
  }, [play])

  return (
    <div align='center'>
      <Confetti width={width} />
      <Text>CONGRATULATIONS ! You finished whatever you were doing</Text>
      <Button onClick={() => {
          setTimeLeft(0)
          setIsPaused(true);
        }}
        >
          Reset
        </Button>
    </div>
  )
}

export default Finished
