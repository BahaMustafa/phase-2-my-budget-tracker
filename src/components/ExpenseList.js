import React, { useState, useEffect } from 'react';
import './ExpenseList.css';

function ExpenseList() {
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/expenses')
      .then(response => response.json())
      .then(data => setExpenses(data))
      .catch(error => console.error('Error fetching expenses:', error));
  }, []);

  
  const deleteExpense = (id) => {
    fetch(`http://localhost:5000/expenses/${id}`, {
      method: 'DELETE',
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok ' + response.statusText);
        }
        return response.json();
      })
      .then(() => {
        
        setExpenses(expenses.filter(expense => expense.id !== id));
      })
      .catch(error => console.error('Error:', error));
  };

  return (
    <div className="expense-list">
      <h2>Expenses</h2>
      {expenses.length === 0 ? (
        <p>No expenses recorded.</p>
      ) : (
        <ul>
          {expenses.map(expense => (
            <li key={expense.id}>
              <strong>{expense.description}</strong> - ${parseFloat(expense.amount).toFixed(2)} on {expense.date}
              <button onClick={() => deleteExpense(expense.id)}>Delete</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ExpenseList;
