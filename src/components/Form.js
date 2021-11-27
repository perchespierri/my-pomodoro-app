import React from 'react'
import { useForm } from 'react-hook-form';
import styled from 'styled-components';

const Form = () => {
  const Container = styled.div`
    display: flex;
    justify-content: center;
  `;

  const Text = styled.div`
    margin: 0px 0px;
  `;

  return (
      <Container>
        <Text>Minutes:</Text>
        <form>
          <input type="number" />
          <input type="submit" />
        </form>
      </Container>  
  )
}

export default Form
