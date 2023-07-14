import React from 'react';

import Header from "../components/Header/Header";
import ChaineSection from '../components/chaineSection/chaineSection';
import AboutSection from '../components/AboutSection/AboutSection';
import Services from '../components/Services/Services';
import Promotion from '../components/Promotions/Promotion';
import AvisNewsletter from '../components/AvisNewsletter/AvisNewsletter';
import AbonnementSection from '../components/AbonnementSection/AbonnementSection';

const Home = () => {

    return(
        <div className="home">
            <Header />
            <Services /> 
            <ChaineSection />
            <AbonnementSection />
            <AboutSection />
            <Promotion /> 
            <AvisNewsletter /> 
        </div>
    )
}

export default Home;