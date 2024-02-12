import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import About from './components/About';

import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
export default class App extends Component {
  render() {
    return (
      <>
         <BrowserRouter>
      <Navbar title="HpTech"/>
      <Routes>
        <Route
          exact
          path="/About"
          element={<About />}
        />
      </Routes>
      <Footer/>
    </BrowserRouter>
        
        </>   
        
        )
  }
}
