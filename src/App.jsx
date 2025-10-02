import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import React from 'react';
import Login from "./pags/Login";
import Cadastro from "./pags/Cadastro";

function App() {
  return (
    <Router>
      <div className='app'>
        <nav>
          <ul>
            <li><Link to="/">Login</Link></li>
            <li><Link to="/cadastro">Cadastro</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/cadastro" element={<Cadastro />} />
        </Routes>
      </div>
    </Router>
  )
}
export default App;