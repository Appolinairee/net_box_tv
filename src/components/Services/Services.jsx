import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';
import './Services.css';
import Button from '../Button/Button';
import { BsArrowRight } from 'react-icons/bs';

import AOS from "aos";
import "aos/dist/aos.css";

// Services Icons
import {SiMaterialdesignicons} from "react-icons/si";
import {BsServer} from "react-icons/bs";
import { AiFillCustomerService } from "react-icons/ai";

const Services = () => {

    useEffect(() => {
        AOS.init({
            easing: 'ease'
          });
        AOS.refresh();
      }, []);

    const Services = [
        {
            id: 1,
            icon: SiMaterialdesignicons,
            title: "Tous vos appareils",
            description: " Télévision, Ordinateur, Tablettes, WebTV (navigateur), Smart-phones, XBMC/KODI sont les appareils ou plates-formes supportées."
        },

        {
            id: 2,
            icon: BsServer,
            title: "Service",
            description: "Notre INFRASTRUCTURE assure la sécurité des données AU PLUS HAUT niveau. Vous pouvez regarder vos chaînes sans coupure 24h / 24."
        },

        {
            id: 3,
            icon: AiFillCustomerService,
            title: "REVENDEUR",
            description: "Nous proposons un plan de revendeur avantageux qui vous permet de développer et de gérer votre propre clientèle."
        }
    ]

  return (
    <section className="services">
        <h3 className="sectionName">Net Box TV</h3>

        <div className="servicesTitle flex">
            <h2 data-aos="fade-right" data-aos-duration="900">Fonctionnalités</h2>
            <p className='flex'>View More <BsArrowRight className='icon' /></p>
        </div>

        <p className="description">
        Consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum socis natoque penatibus et magnis dis parturient montes.
        </p>

        <div className="servicesContent grid">
            {
                Services.map((item) => (
                    <div className="serviceContent">
                        <item.icon className="icon"/>
                        <h3 className="serviceTitle"> {item.title} </h3>
                        <p className="serviceDesc"> { item.description } </p>
                    </div>
                ))
            }
        </div>
        
        <Link to='/decodeur'>
            <Button title="Commander votre décodeur" />
        </Link>
    </section>
  )
}

export default Services;