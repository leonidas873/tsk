import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import { Link, Route, Routes } from 'react-router-dom';
import Assets from './components/Assets/Assets';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';



const Home = () => {
  return <div>home</div>
}

const About = () => {
  return <div>About</div>
}


function App() {
  return (
    <div className="App">
      <ToastContainer />

      <Header/>
      <Assets/>
      <Link to="/about">About</Link>
      <Link to="/">home</Link>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
      </Routes>
 
        
    </div>
  );
}

export default App;
