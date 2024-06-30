import React from 'react';
import { useForm } from 'react-hook-form';

const CarForm = ({ onSubmit, defaultValues }) => {
  const { register, handleSubmit, reset } = useForm({
    defaultValues: defaultValues || {
      make: '',
      model: '',
      year: '',
      price: ''
    }
  });

  const submitHandler = (data) => {
    onSubmit(data);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(submitHandler)}>
      <label>Make:</label>
      <input {...register('make')} />

      <label>Model:</label>
      <input {...register('model')} />

      <label>Year:</label>
      <input type="number" {...register('year')} />

      <label>Price:</label>
      <input type="number" {...register('price')} />

      <button type="submit">Submit</button>
    </form>
  );
};

export default CarForm;
