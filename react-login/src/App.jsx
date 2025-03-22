import React from 'react';
import { Routes, Route } from 'react-router-dom'; // ❌ Removed BrowserRouter
import Register from './Components/Register';
import Login from './Components/Login';
import ResetPassword from './Components/ResetPassword';
import "./App.css";

const App = () => {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/login-page" element={<Login />} />
        <Route path="/reset-password" element={<ResetPassword />} />
      </Routes>
    </div>
  );
};

export default App;
