import React, { useEffect, useState } from 'react';
import moment from 'moment';

import '../style.css';

import Form from './Form';
import ItemList from './ItemList';
import ItemClass from './ItemClass';

export default function Main() {
  const [records, setRecords] = useState([]);
  const [form, setForm] = useState({ inputName: '', inputHoursDiff: '' });

  const handleChange = (name, value) => {
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
  };

  const handleSubmit = () => {
    var date = new Date();
    var hoursLocal = date.getHours();
    var hoursGMT0 = date.getUTCHours();

    setRecords((prevRecords) => [
      ...prevRecords,
      new ItemClass(form.inputName, hoursGMT0, Number(form.inputHoursDiff)),
    ]);

    setForm({ inputName: '', inputHoursDiff: '' });
  };

  const handleRemove = (id) => {
    setRecords((prevRecords) => prevRecords.filter((obj) => obj.id !== id));
  };

  return (
    <>
      <div className="baseTimeGMT"></div>
      <Form form={form} onChange={handleChange} onSubmit={handleSubmit} />
      <ItemList isChanged={false} records={records} onRemove={handleRemove} />
    </>
  );
}
