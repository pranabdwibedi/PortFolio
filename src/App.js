import {BrowserRouter, Routes, Route} from "react-router-dom";
import './App.css';
import Home from './home';
import Education from './education';
import Skills from "./skills";
import { useState } from "react";
import Navbar from "./navbar";


function App() {
  const[isDark, setIsDark] = useState(false);
  return (
    <div className='FullViewPort'>
      <BrowserRouter>
      <Navbar isDark = {isDark} setIsDark = {setIsDark}/>
      <Routes>
        <Route path="/portfolio" element={<Home isDark = {isDark}/>}></Route>
        <Route path="/portfolio/education" element={<Education/>}></Route>
        <Route path="/portfolio/skills" element={<Skills/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
