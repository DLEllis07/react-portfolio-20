import React from "react";
import { Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import Resume from "./pages/Resume"
import Header from "./components/Header"
import './index.css'
import "./App.css"


function App() {
    return (
  <>
<Routes>
<Route path="/" element={<About/>} />
<Route path="/" element={<Contact />} />
<Route path="/" element={<Portfolio />} />
<Route path="/" element={<Resume />} />
<Route path="/" element={<Header />} />
</Routes>
</>
    );
}

export default App