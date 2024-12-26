import React from 'react';
import './App.css';
import { Route, BrowserRouter as Router, Routes, useLocation } from "react-router-dom";
import NavBar from "./Components/Lateral_bar/NavBar";
import Component_login from "./Components/Login/Component_login";
import Home from "./Components/Views/Home/Home";
import Clients from "./Components/Views/Clients/Clients";
import Header from './Components/Header/Header';
function App() {
  const location = useLocation();

  return (
    <div className="App">
      <div className="main-container">
        {location.pathname !== '/' && <NavBar />}
        <div className="content-container">
        {location.pathname !== '/' && <Header />}
          <Routes>
            <Route path="/" element={<Component_login />} />
            <Route path="/home" element={<Home />} />
            <Route path="/clients" element={<Clients />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;