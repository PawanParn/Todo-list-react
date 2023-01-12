import { Routes, Route } from 'react-router-dom';
import RegisterPage from './pages/Register';
import LoginPage from './pages/Login';
import HomePage from './pages/home'
import Header from './components/Header';
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from './contexts/AuthContext';

function App() {

  const ctx = useContext(AuthContext);

  return (
  <>
    <Header />
      <Routes>
      {ctx.isLogged ? 
        (
        <Route path="/" element={<HomePage />} /> 
        ) : (
        <>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </>)
        }
        <Route path="*" element={<h1>404 !!! Not found</h1>} />
      </Routes>
  </>

  )
  
}

export default App;
