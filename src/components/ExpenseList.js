import React, { useState, useEffect } from 'react';
import './ExpenseList.css';

function ExpenseList() {
  const [expenses, setExpenses] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetch('http://localhost:5000/expenses')
      .then(response => response.json())
      .then(data => setExpenses(data))
      .catch(error => console.error('Error fetching expenses:', error));
  }, []);

  const filteredExpenses = expenses.filter(expense =>
    expense.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

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
  const totalExpense = expenses.reduce((total, expense) => {
    return total + parseFloat(expense.amount);
  }, 0);
  return (
    <div className="expense-list-container">
      <h2 className="expense-list-title">Expenses</h2>
      <input
        type="text"
        placeholder="Search expenses"
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
        className="search-bar"
      />
      <p className="total-expense">Total Expense: ${totalExpense.toFixed(2)}</p>
      {filteredExpenses.length === 0 ? (
        <p className="no-expenses-message">No expenses found.</p>
      ) : (
        <ul className="expenses-list">
          {filteredExpenses.map(expense => (
            <li className="expense-item" key={expense.id}>
              <strong className="expense-description">{expense.description}</strong> - 
              ${parseFloat(expense.amount).toFixed(2)} on {expense.date}
              <button className="delete-button" onClick={() => deleteExpense(expense.id)}>Delete</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ExpenseList;






