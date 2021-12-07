import React from 'react'
import { useForm } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';
import styled from 'styled-components';
import $ from 'jquery';

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

const Input = styled.input`
  margin: 0px 5px;
  font-size: 20px;
  padding: 5px;
`;

const Text = styled.div`
  margin: 5px 5px;
  font-size: 20px;
`;


export const Form = ({setTimeLeft, setIsPaused}) => {
  const { register, handleSubmit, formState: {errors} } = useForm();

  const onSubmit = ({timerInput}) => {
    const dateInput = new Date(timerInput).getTime();
    const dateNow = new Date().getTime();
    const deltaDate = dateInput - dateNow;
    console.log(deltaDate);
    $("#pomodoro-form-to").trigger("reset");
    setTimeLeft(deltaDate*0.001);
    setIsPaused(false);
  };

  return (
    <>  
      <Container>
        <Text>Countdown to:</Text>
        <form noValidate onSubmit={handleSubmit(onSubmit)} id="pomodoro-form-to" >
          <Input 
            type="datetime-local"
            name="time"
            id="time-input"
            {...register('timerInput', {
              required: {value: true, message: "Please enter a time"},
            })} 
          />
          <Input type="submit" />
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
  );
};

