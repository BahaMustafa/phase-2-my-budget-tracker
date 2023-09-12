import React, { useState, useEffect } from 'react';
import './ExpenseList.css';

function ExpenseList() {
  // State for expenses
  const [expenses, setExpenses] = useState([]);

  // Fetch expenses from the backend
  useEffect(() => {
    fetch('http://localhost:5000/expenses')
      .then(response => response.json())
      .then(data => setExpenses(data))
      .catch(error => console.error('Error fetching expenses:', error));
  }, []);

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
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ExpenseList;
