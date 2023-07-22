import React from "react";
import { Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";

function App() {
    return (
  <>
<Routes>
<Route path="/" element={<About/>} />
<Route path="/" element={<Contact />} />
<Route path="/" element={<Portfolio />} />
</Routes>
</>
    );
}



export default App;
