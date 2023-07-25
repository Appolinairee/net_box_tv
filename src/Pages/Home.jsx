import React from 'react';
import TransitionEffect from '../components/TransitionEffect/TransitionEffect';

import Header from "../components/Header/Header";
import ChaineSection from '../components/chaineSection/chaineSection';
import AboutSection from '../components/AboutSection/AboutSection';
import Services from '../components/Services/Services';
import AvisNewsletter from '../components/AvisNewsletter/AvisNewsletter';
import AbonnementSection from '../components/AbonnementSection/AbonnementSection';
import DownloadLinks from '../components/DownloadLinks/DownloadLinks';

const Home = () => {

    return(
        <div className="home">
            <Header />
            <Services /> 
            <ChaineSection />
            <AbonnementSection />
            <AboutSection />
            <DownloadLinks />
            <AvisNewsletter /> 
            <TransitionEffect />
        </div>
    )
}

export default Home;