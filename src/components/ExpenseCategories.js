import React, { useState, useEffect } from 'react';

import './ExpenseCategories.css';

function ExpenseCategories() {

  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/expenses')
      .then(response => response.json())
      .then(data => setExpenses(data))
      .catch(error => console.error('Error fetching expenses:', error));
  }, []);
  
  const categories = ['Food', 'Transport', 'Entertainment', 'Housing/Rent', 'Others']; 

  const getExpensesByCategory = (category) => {
    return expenses.filter(expense => expense.category === category).map(expense => (
      <li key={expense.id}>{expense.name}: ${expense.amount}</li>
    ));
  };

  const totalExpenses = expenses.reduce((total, expense) => total + parseFloat(expense.amount), 0);

  return (
    <div>
      <h2>Categories</h2>
      {categories.map((category) => (
        <div key={category}>
          <h3>{category}</h3>
          <ul>
            {getExpensesByCategory(category)}
          </ul>
        </div>
      ))}
      <p>Total: ${totalExpenses.toFixed(2)}</p>
    </div>
  );
}

export default ExpenseCategories;
