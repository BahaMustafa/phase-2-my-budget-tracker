import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './ExpenseDetail.css';

function ExpenseDetail() {
  const { id } = useParams();
  const [expense, setExpense] = useState(null);
  const [loading, setLoading] = useState(true);

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

  if (loading) {
    return <div className="expense-detail">Loading...</div>;
  }

  return (
    <div className="expense-detail">
      {expense ? (
        <>
          <h2>{expense.name}</h2>
          <p>Amount: ${parseFloat(expense.amount).toFixed(2)}</p>
        </>
      ) : (
        <p>Expense not found.</p>
      )}
    </div>
  );
}

export default ExpenseDetail;
