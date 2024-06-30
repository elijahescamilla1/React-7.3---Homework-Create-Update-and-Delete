import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CarForm from './CarForm';

const UpdateCar = () => {
  const { id } = useParams();
  const [car, setCar] = useState(null);

  useEffect(() => {
    const fetchCar = async () => {
      const response = await fetch(`/api/cars/${id}`);
      const data = await response.json();
      setCar(data);
    };
    fetchCar();
  }, [id]);

  const updateCar = async (data) => {
    await fetch(`/api/cars/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });
  };

  return (
    <div>
      <h2>Update Car</h2>
      {car && <CarForm onSubmit={updateCar} defaultValues={car} />}
    </div>
  );
};

export default UpdateCar;
