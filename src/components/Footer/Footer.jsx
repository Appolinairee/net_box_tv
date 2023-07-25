import React, {useEffect} from 'react';
import { NavLink, Link } from "react-router-dom";
import './Footer.css';
import Logo from '../../assets/logo.svg';

import { BiLogoTelegram } from 'react-icons/bi';
import { BiLogoFacebook } from 'react-icons/bi';
import { BiLogoTwitter } from 'react-icons/bi';
import { BiLogoWhatsapp } from 'react-icons/bi';

import AOS from "aos";
import "aos/dist/aos.css";

const Footer = () => {

    useEffect(() => {
        AOS.init({
            easing: 'ease',
            once: false
          });
        AOS.refresh();
      }, []);

  return (
    <footer className="footer">
        <div className="footerContent grid">
                <div className="logo flex" data-aos="zoom-in">
                    <img src={Logo} alt="Logo Nom de l'entreprise" />
                    <span>NET BOX TV</span>
                </div>

            <ul className='flex lists'>
                <NavLink to='/' className='link before'> <li>Accueil</li> </NavLink>
                <NavLink to="/chaines" className='link before'> <li>Chaînes</li> </NavLink>
                <NavLink to="/abonnement" className='link before'> <li>Décodeur</li> </NavLink>
                <NavLink to='/decodeur' className='link before'> <li>Abonnement</li> </NavLink>
                <NavLink to="/contacts" className='link before'> <li>Nos Contacts</li> </NavLink>
            </ul>

            <div className="icons flex">
                <span data-aos="fade-up" data-aos-duration="500" ><BiLogoTelegram className="icon" /></span>
                <span data-aos="fade-up" data-aos-duration="1000"><BiLogoFacebook className="icon" /></span>
                <span data-aos="fade-up" data-aos-duration="1500"><BiLogoWhatsapp className="icon" /></span>
                <span data-aos="fade-up" data-aos-duration="2000"><BiLogoTwitter className="icon" /></span>
            </div>
        </div>

        <div className="footerSub flex before">
            <p> Privacy & Policy | Terms and Conditions </p>
            <p>Copyright © 2023. All rights reserved</p>
        </div>
    </footer>
  )
}

export default Footer;