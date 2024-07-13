import React from 'react';
import { createRoot } from 'react-dom/client';
import { useForm } from 'react-hook-form';

export default function WarBook() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <form onSubmit={handleSubmit((data) => console.log(data))}>
      <input {...register('firstName')} />
      <input {...register('lastName', { required: true })} />
      {errors.lastName && <p>Last name is required.</p>}
      <input {...register('age', { pattern: /\d+/ })} />
      {errors.age && <p>Please enter number for age.</p>}
      <input type="submit" />
    </form>
  );
}

const domNode = document.getElementById('attack-app');
const root = createRoot(domNode);
root.render(<WarBook />);
