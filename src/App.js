import logo from './logo.svg';
import './App.css';
import Navbar from './navbar';
import Home from './home';
import Education from './education';


function App() {
  return (
    <>
    <Navbar/>
    {/* <Home/> */}
    <div className="content">
      <Education/>
    </div>
    </>
  );
}

export default App;
