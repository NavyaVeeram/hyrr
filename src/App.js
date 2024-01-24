import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Signup from './Components/Signup'
import Login from './Components/Login';
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
