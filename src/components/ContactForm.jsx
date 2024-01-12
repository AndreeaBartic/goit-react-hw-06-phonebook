import { nanoid } from 'nanoid';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createContact } from 'features/slice';

const INITIAL_STATE = { name: '', number: '' };

const ContactForm = () => {
  const [form, setForm] = useState({ ...INITIAL_STATE });
  const dispatch = useDispatch();

  const handleChange = e => {
    const { name, value } = e.target;
    setForm(prevForm => ({
      ...prevForm,
      [name]: value,
    }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    const newContact = {
      id: nanoid(),
      name: form.name,
      number: form.number,
    };
    dispatch(createContact(newContact));
    setForm({ ...INITIAL_STATE });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Name
          <input
            onChange={handleChange}
            value={form.name}
            type="text"
            name="name"
            required
          />
        </label>
        <label>
          Number
          <input
            onChange={handleChange}
            value={form.number}
            type="tel"
            name="number"
            required
          />
        </label>
        <button type="submit">Add Contact</button>
      </form>
    </div>
  );
};

export default ContactForm;