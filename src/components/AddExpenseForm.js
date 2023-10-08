import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AddExpenseForm.css';

function AddExpenseForm({ addExpense }) {
  const [formData, setFormData] = useState({
    description: '',
    amount: 0,
    date: '',
    category: 'Food', 
  });

  const navigate = useNavigate(); 

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
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
    .then((response) => response.json())
    .then((data) => {
      console.log('Expense added:', data);
      if (typeof addExpense === 'function') {  
        addExpense(data);  
      } else {
        console.error('addExpense is not a function', addExpense);  
      }
      navigate('/');  
    })
    .catch((error) => {
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

      <div>
        <label>Category:</label>
        <select 
          name="category" 
          value={formData.category} 
          onChange={handleInputChange}
        >
          <option value="Food">Food</option>
          <option value="Transport">Transport</option>
          <option value="Entertainment">Entertainment</option>
          <option value="Housing/Rent">Housing/Rent</option>
          <option value="Others">Others</option>
        
        </select>
      </div>

      <button type="submit">Add Expense</button>
    </form>
  );
}

export default AddExpenseForm;
