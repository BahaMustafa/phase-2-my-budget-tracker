// App.js
import React from 'react';
import Navbar from './components/Navbar';
import ExpenseList from './components/ExpenseList';
import ExpenseDetail from './components/ExpenseDetail';
import AddExpenseForm from './components/AddExpenseForm';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<ExpenseList />} />
        <Route path="/expense/:id" element={<ExpenseDetail />} />
        <Route path="/add" element={<AddExpenseForm />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
