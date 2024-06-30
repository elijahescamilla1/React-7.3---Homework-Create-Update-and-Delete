import React from 'react';

const DeleteCar = ({ id, onDelete }) => {
  const deleteCar = async () => {
    await fetch(`/api/cars/${id}`, {
      method: 'DELETE'
    });
    onDelete(id);
  };

  return <button onClick={deleteCar}>Delete</button>;
};

export default DeleteCar;
