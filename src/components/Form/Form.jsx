import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';

export default function Form({ onSubmit }) {
  const [date, setDate] = useState('');
  const handleDateInput = (e) => {
    setDate(() => e.target.value);
  };

  const [km, setKm] = useState('');
  const handleKmInput = (e) => {
    setKm(() => e.target.value);
  };

  const resetForm = () => {
    setDate(() => '');
    setKm(() => '');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (date) {
      onSubmit({
        id: nanoid(),
        date,
        km: parseFloat(km) || 0,
      });
      resetForm();
    }
  };

  return (
    <div className="form-container">
      <form className="form" onSubmit={handleSubmit}>
        <input className="form-date" type="date" placeholder="дд.мм.гггг" value={date} onChange={handleDateInput} />
        <input className="form-km" type="text" placeholder="0 км" value={km} onChange={handleKmInput} />
        <button className="form-add" type="submit">Добавить</button>
      </form>
    </div>
  );
}

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};