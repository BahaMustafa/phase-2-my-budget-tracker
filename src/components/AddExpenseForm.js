import React, { useState } from 'react';
import './AddExpenseForm.css';

function AddExpenseForm() {
  const [formData, setFormData] = useState({
    description: '',
    amount: 0,
    date: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    fetch('http://localhost:5000/expenses', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
    .then(response => response.json())
    .then(data => {
      console.log('Expense added:', data);
      
    })
    .catch(error => {
      console.error('Error adding expense:', error);
    });
  };
  

  return (
    <form className="add-expense-form" onSubmit={handleSubmit}>
      <div>
        <label>Description:</label>
        <input
          type="text"
          name="description"
          value={formData.description}
          onChange={handleInputChange}
          placeholder="Enter expense description"
          required
        />
      </div>

      <div>
        <label>Amount:</label>
        <input
          type="number"
          name="amount"
          value={formData.amount}
          onChange={handleInputChange}
          required
        />
      </div>

      <div>
        <label>Date:</label>
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleInputChange}
          required
        />
      </div>

      <button type="submit">Add Expense</button>
    </form>
  );
}

export default AddExpenseForm;