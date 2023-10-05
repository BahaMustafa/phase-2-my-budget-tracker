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

  
  const totalExpense = expenses.reduce((total, expense) => {
    return total + parseFloat(expense.amount);
  }, 0);

  return (
    <div className="expense-list">
      <h2>Expenses</h2>
      <p className="total">Total Expense: <span className="amount">${totalExpense.toFixed(2)}</span></p> 
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
