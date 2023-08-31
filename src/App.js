import React from 'react';
import { Routes, Route } from "react-router-dom";
import './App.css';
import Header from "./components/Header"
import Homepage from "./Homepage" 
import About from './pages/About';

function App() {
  return ( 
      <div>
        <Header>
        <Homepage />
  <Routes>
  <Route path="/" element={<About/>} />
</Routes>
</Header>
</div>
   
  
  );
     
}

export default App;