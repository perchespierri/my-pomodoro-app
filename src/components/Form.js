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


const Form = ({setTimeLeft, setIsPaused}) => {
  const { register, handleSubmit, formState: {errors} } = useForm();

  const onSubmit = (data) => {
    console.log(data.timerInput);
    $("#pomodoro-form").trigger("reset");
    setTimeLeft(data.timerInput*60);
    setIsPaused(false);
  };

  return (
    <>  
      <Container>
        <Text>Minutes:</Text>
        <form noValidate onSubmit={handleSubmit(onSubmit)} id="pomodoro-form" >
          <Input 
            type="number"
            name="minutes"
            id="minutes-input"
            {...register('timerInput', {
              required: {value: true, message: "Please enter the number of minutes"},
              min: {value: .01, message: "Too low! Enter a number between 0.01 and 1000"},
              max:{value: 1000, message: "Too high! Enter a number between 0.01 and 1000"},
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

export default Form;
