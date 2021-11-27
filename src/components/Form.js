import React from 'react'
import { useForm } from 'react-hook-form';
import styled from 'styled-components';

const Container = styled.div`
display: flex;
justify-content: center;
`;

const Text = styled.div`
margin: 0px 0px;
`;


const Form = () => {
  const { register, handleSubmit, errors } = useForm();

  return (
      <Container>
        <Text>Minutes:</Text>
        <form noValidate>
          <input 
            type="number" 
            {...register('test', {
              required: {value: true, message: "Please enter the number of minutes"},
              min: {value: .01, message: "Please enter a number between 0.01 and 1000"},
              max:{value: 1000, message: "Please enter a number between 0.01 and 1000"},
            })} 
          />
          <input type="submit" />
        </form>
        {errors && <p>{errors.message}</p>}
      </Container>  
  )
}

export default Form
