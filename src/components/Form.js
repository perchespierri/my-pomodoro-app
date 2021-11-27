import React from 'react'
import { useForm } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';
import styled from 'styled-components';

const Container = styled.div`
display: flex;
justify-content: center;
`;

const Text = styled.div`
margin: 0px 0px;
`;


const Form = () => {
  const { register, handleSubmit, formState: {errors} } = useForm();

  const onSubmit = (data) => {console.log(data.timerInput);}

  return (
    <>  
      <Container>
        <Text>Minutes:</Text>
        <form noValidate onSubmit={handleSubmit(onSubmit)} id="pomodoro-form" >
          <input 
            type="number"
            name="minutes"
            id="minutes-input"
            {...register('timerInput', {
              required: {value: true, message: "Please enter the number of minutes"},
              min: {value: .01, message: "Please enter a number between 0.01 and 1000"},
              max:{value: 1000, message: "Please enter a number between 0.01 and 1000"},
            })} 
          />
          <input type="submit" />
        </form>
      </Container>
      <div align='center'>
        <ErrorMessage
        errors={errors}
        name="timerInput"
        render={({ message }) => <p>{message}</p>}
      />
      </div>
    </>        
  )
}

export default Form
