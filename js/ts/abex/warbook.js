import React from 'react';
import { createRoot } from 'react-dom/client';
import { useForm } from 'react-hook-form';
export default function WarBook() {
    const { register, handleSubmit, formState: { errors }, } = useForm();
    return (React.createElement("form", { onSubmit: handleSubmit((data) => console.log(data)) },
        React.createElement("input", { ...register('firstName') }),
        React.createElement("input", { ...register('lastName', { required: true }) }),
        errors.lastName && React.createElement("p", null, "Last name is required."),
        React.createElement("input", { ...register('age', { pattern: /\d+/ }) }),
        errors.age && React.createElement("p", null, "Please enter number for age."),
        React.createElement("input", { type: "submit" })));
}
const domNode = document.getElementById('attack-app');
const root = createRoot(domNode);
root.render(React.createElement(WarBook, null));
