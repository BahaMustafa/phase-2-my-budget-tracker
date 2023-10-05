import React from 'react';

function ExpenseCategories() {
  const categories = ['Food', 'Transport', 'Entertainment', 'Others']; 

  return (
    <div>
      <h2>Categories</h2>
      <ul>
        {categories.map((category, index) => (
          <li key={index}>{category}</li>
        ))}
      </ul>
    </div>
  );
}

export default ExpenseCategories;
