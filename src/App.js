import {BrowserRouter, Routes, Route} from "react-router-dom";
import './CSS/App.css';
import Home from './home';
import Education from './education';
import Skills from "./skills";
import Internship from "./internship";
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
        <Route path="/portfolio/education" element={<Education isDark = {isDark}/>}></Route>
        <Route path="/portfolio/skills" element={<Skills isDark={isDark}/>}></Route>
        <Route path="/portfolio/internship" element={<Internship isDark={isDark}/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
