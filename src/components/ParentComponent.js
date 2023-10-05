
import React, { useState } from 'react';
import AddExpenseForm from './AddExpenseForm';

function ParentComponent() {
  const [expenses, setExpenses] = useState([]);

  const addExpense = (newExpense) => {
    console.log('Adding new expense:', newExpense);  
    setExpenses((prevExpenses) => [...prevExpenses, newExpense]);
  };

  return (
    <div>
      <AddExpenseForm addExpense={addExpense} />  
    </div>
  );
}

export default ParentComponent;
