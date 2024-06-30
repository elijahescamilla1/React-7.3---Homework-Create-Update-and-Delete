import React from 'react';
import CarForm from './CarForm';

const CreateCar = () => {
  const createCar = async (data) => {
    await fetch('/api/cars', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });
  };

  return (
    <div>
      <h2>Create New Car</h2>
      <CarForm onSubmit={createCar} />
    </div>
  );
};

export default CreateCar;
