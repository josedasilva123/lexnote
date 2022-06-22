import { useState } from 'react';
import { Routes, Route } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Register from './pages/Register';
import Login from "./pages/Login";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route index element={<Login  />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/register" element={<Register />}/>
      </Routes>      
    </div>
  );
}

export default App;
