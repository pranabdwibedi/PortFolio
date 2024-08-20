import {BrowserRouter, Routes, Route} from "react-router-dom";
import './App.css';
import Navbar from './navbar';
import Home from './home';
import Education from './education';


function App() {
  return (
    <div className='FullViewPort'>
      <BrowserRouter>
      <Routes>
        <Route path="/portfolio" element={<Home/>}></Route>
        <Route path="/portfolio/education" element={<Education/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
