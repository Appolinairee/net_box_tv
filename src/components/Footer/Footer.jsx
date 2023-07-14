import React from 'react';
import { NavLink, Link } from "react-router-dom";
import './Footer.css';
import Logo from '../../assets/logo.png';

import { BiLogoTelegram } from 'react-icons/bi';
import { BiLogoFacebook } from 'react-icons/bi';
import { BiLogoTwitter } from 'react-icons/bi';
import { BiLogoWhatsapp } from 'react-icons/bi';

const Footer = () => {
  return (
    <footer className="footer">
        <div className="footerContent grid">
            <img src={Logo} alt="Logo de l'entreprise" className="logo" />

            <ul className='flex lists'>
                <NavLink to='/' className='link before'> <li>Accueil</li> </NavLink>
                <NavLink to="/chaines" className='link before'> <li>Chaînes</li> </NavLink>
                <NavLink to="/abonnement" className='link before'> <li>Décodeur</li> </NavLink>
                <NavLink to='/decodeur' className='link before'> <li>Abonnement</li> </NavLink>
                <NavLink to="/contacts" className='link before'> <li>Nos Contacts</li> </NavLink>
            </ul>

            <div className="icons flex">
                <BiLogoTelegram className="icon" />
                <BiLogoFacebook className="icon" />
                <BiLogoWhatsapp className="icon" />
                <BiLogoTwitter className="icon" />
            </div>
        </div>

        <div className="footerSub flex before">
            <p> Privacy & Policy | Terms Condition </p>
            <p>Copyright © 2021. All rights reserved</p>
        </div>
    </footer>
  )
}

export default Footer;