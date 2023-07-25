import React from 'react';
import { Link } from 'react-router-dom';
import './Contact.css';
import TransitionEffect from '../../components/TransitionEffect/TransitionEffect';

import {BiMailSend, BiLogoFacebook} from 'react-icons/bi';
import {BsWhatsapp, BsTelephoneOutbound, BsInstagram, BsBuildings} from 'react-icons/bs';
import {GoClock} from 'react-icons/go';

const Contact = () => {
  return (
    <section className="contact flex">
        <div className="contactForm">
            <h1>Nous Contacter</h1>
            <p className="contactDescription">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium vitae reprehenderit omnis perferendis culpa.
            </p>

            <form method="post">
                <input type="text" placeholder='Name' /><br />
                
                <input type="email" placeholder='Email' /><br />

                <input type="text" placeholder='Message' /><br />

                <input type="submit" value="SEND" className='btn'/>
            </form>
        </div>


        <div className="contactInfos">
            
            <div className="contactElements before">
                <h2>Info</h2>
                <div className="contactInfo flex">
                    <BiMailSend className="icon" />
                    <Link to="mailto:">info@getmoremovie @gmail.com</Link>
                </div>

                <div className="contactInfo flex">
                    <BsTelephoneOutbound className="icon" />
                    <Link to="tel:">+229 56 77 89 90</Link>
                </div>

                <div className="contactInfo flex">
                    <BsBuildings className='icon' />
                    <Link>Carrefour Saint Louis</Link>
                </div>

                <div className="contactInfo flex">
                    <GoClock className='icon' />
                    <Link>Disponible pour vous 24H / 24</Link>
                </div>
            </div>

            <div className="icons flex">
                <BiLogoFacebook className='icon' />
                <BsWhatsapp className='icon' />
                <BsInstagram className='icon' />
            </div>
        </div>

        <TransitionEffect />

    </section>
  )
} 
    
export default Contact;
