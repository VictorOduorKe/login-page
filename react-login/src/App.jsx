import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from './Components/Register';
import Login from './Components/Login';
import NavBr from './Components/NavBr';
import "./App.css";
import ResetPassword from './Components/ResetPassword';

const App = () => {
  return (
    <Router> {/* Wrap the entire app in Router */}
      <div className="app">
        <Routes>
          <Route path="/" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/reset-password" element={<ResetPassword/>}/>
        </Routes>
      </div>
    </Router>
  );
};

export default App;
