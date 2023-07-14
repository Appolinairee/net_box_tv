import React from 'react';
import { NavLink, Link } from "react-router-dom";
import './../Services/Services.css';
import { BsArrowRight } from 'react-icons/bs';

// Abonnement Icons
import {TbHexagonNumber1} from "react-icons/tb";
import {TbHexagonNumber3} from "react-icons/tb";
import { TbHexagonNumber6 } from "react-icons/tb";

const AbonnementSection = () => {

    const AbonnementSection = [
        {
            id: 1,
            icon: TbHexagonNumber1,
            title: "8000 Fr",
            description: "MAG, Dreamlink T1, Avov, Android, WebTV (navigateur), et XBMC/KODI sont les plates-formes supportées."
        },

        {
            id: 2,
            icon: TbHexagonNumber3,
            title: "20.000 Fr",
            description: "Notre INFRASTRUCTURE assure la sécurité des données AU PLUS HAUT niveau. Vous pouvez regarder vos chaînes sans coupure 24h / 24."
        },

        {
            id: 3,
            icon: TbHexagonNumber6,
            title: "40.000 Fr",
            description: "Nous proposons un plan de revendeur avantageux qui vous permet de développer et de gérer votre propre clientèle."
        }
    ]

  return (
    <section className="services">
        <h3 className="sectionName">Nos Offres</h3>

        <div className="servicesTitle flex">
            <h2>Abonnements</h2>
            <p className='flex'>View More <BsArrowRight className='icon' /></p>
        </div>

        <p className="description">
        Consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum socis natoque penatibus et magnis dis parturient montes.
        </p>

        <div className="servicesContent grid">
            {
                AbonnementSection.map((item) => (
                    <div className="serviceContent">
                        <NavLink to="/abonnement">
                            <div className="flex" style={ { justifyContent: "center", gap: "1rem" } }>
                                <item.icon className="icon"/> 
                                <h2>Mois</h2>
                            </div>
                            
                            <h3 className="serviceTitle"> {item.title} </h3>
                            <p className="serviceDesc"> { item.description } </p>
                        </NavLink>
                    </div>
                ))
            }
        </div>
    </section>
  )
}

export default AbonnementSection;
