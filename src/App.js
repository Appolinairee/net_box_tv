import React from 'react';
import './index.css';
import {BrowserRouter, Routes,  Route} from 'react-router-dom';

import NavBar from "./components/NavBar/NavBar";
import Home from './Pages/Home';
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <BrowserRouter> 
        <NavBar />

        <Routes>
          <Route path='' Component={Home} />
        </Routes>

        <Footer />
    </BrowserRouter>
    
  )
}

export default App;