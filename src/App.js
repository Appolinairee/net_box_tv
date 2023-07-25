import React, { useState } from 'react';
import './index.css';
import {BrowserRouter, Routes,  Route} from 'react-router-dom';
import { AnimatePresence} from 'framer-motion';

import NavBar from "./components/NavBar/NavBar";
import TransitionEffect from './components/TransitionEffect/TransitionEffect';
import Home from './Pages/Home';
import Abonnement from './Pages/Abonnement';
import AbonnementFormPage from './Pages/AbonnementFormPage';
import Decodeur from './Pages/Decoder/Decodeur';
import Contact from './Pages/Contact/Contact';
import Chaines from './Pages/Chaines';
import Payment from './components/Payment/Payment';
import Error404 from './Pages/ErrorPage/Error';
import Test from './Pages/Test';
import Employee from './Pages/Employee.jsx';
import Footer from './components/Footer/Footer';

const App = () => {
  
  // Mode sombre settings for all app
  const [theme, setTheme] = useState(1);
  const handleTheme = () => {
    setTheme( (theme)? 0 : 1);
  }

  return (
    <div className={(theme)? "app theme" : "app"}>
      <BrowserRouter> 
            <TransitionEffect />
            <NavBar themeFunction={handleTheme} themeState={theme} />

            <AnimatePresence mode='wait'>
              <Routes>
                <Route path='' element={<Home />} key="home"/>
                <Route path='/chaines' element={<Chaines />} />
                <Route path='/abonnement' element={<Abonnement />} key="abonnement"/>
                <Route path='/abonnement/1' element={<AbonnementFormPage Id={1} />} key="abonnement"/>
                <Route path='/abonnement/2' element={<AbonnementFormPage Id={2} />} key="abonnement2"/>
                <Route path='/abonnement/3' element={<AbonnementFormPage Id={3} />} key="abonnement3"/>
                <Route path='/decodeur' element={<Decodeur />} key="décodeur"/>
                <Route path='/paiement' element={<Payment />} />
                <Route path='/test' element={<Test />} />
                <Route path='/employee' element={<Employee />} />
                <Route path='/contacts' element={<Contact />} key="contacts"/>
                <Route path='*' element={<Error404 />} />
              </Routes>
            </AnimatePresence>
            <Footer />

      </BrowserRouter>
    </div>
  )
}

export default App;