import React, { useState } from 'react';
import StartPage from './components/StartPage';
// 👇 මෙන්න මේ පේළියේ පාර (Path) /customer/CustomerLogin ලෙස වෙනස් විය යුතුයි
import CustomerLogin from './components/customer/CustomerLogin'; 

function App() {
  const [currentPage, setCurrentPage] = useState('start');

  if (currentPage === 'start') {
    return <StartPage onNavigate={setCurrentPage} />;
  }

  if (currentPage === 'customer-login') {
    return <CustomerLogin onNavigate={setCurrentPage} />;
  }
}

export default App;