// import { useState } from 'react'
// import Login from './components/login';
// import './App.css'

// function App() {
//   return (
//     <div className="App">
//       <Login />
//     </div>
//   );
// }

// export default App
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Login from './components/login';
import MainLayout from './components/layout/mainLayout';
import './App.css'

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Login Route */}
          <Route path="/login" element={<Login />} />
          
          {/* Main Layout Route */}
          <Route path="/*" element={<MainLayout />} />
          
          {/* Default redirect to main layout */}
          <Route path="/" element={<Navigate to="/dashboard" replace />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App