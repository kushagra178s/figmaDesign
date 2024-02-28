import React, {useState} from 'react';
import Navbar from './components/Navbar';
import Body from './components/Body';
import "./App.css";
import Footer from './components/Footer';
function App() {
  return (
    <div className = "main-page">
      <Navbar/>
      <Body/>
      <Footer/>
    </div>
  )
}

export default App;
