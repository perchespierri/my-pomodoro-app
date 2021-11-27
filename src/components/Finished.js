import React from 'react';
import Confetti from 'react-confetti';
import useSound from 'use-sound';

const Finished = () => {
  let width = window.innerWidth;

  return (
    <div align='center'>
      <Confetti width={width} />
    </div>
  )
}

export default Finished
