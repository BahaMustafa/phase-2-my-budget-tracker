import React, { useState, useEffect } from 'react';

import './ExpenseCategories.css';

function ExpenseCategories() {

  useEffect(() => {
    fetch(`http://localhost:5000/expenses/${id}`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Expense not found');
        }
        return response.json();
      })
      .then(data => {
        setExpense(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching expense:', error);
        setLoading(false);
      });
  }, [id]);
  
  const categories = ['Food', 'Transport', 'Entertainment', 'Others']; 

  return (
    <div>
      <h2>Categories</h2>
      <ul>
        {categories.map((category) => (
          <li key={category}>{category}</li>  
        ))}
      </ul>
    </div>
  );
}

export default ExpenseCategories;
