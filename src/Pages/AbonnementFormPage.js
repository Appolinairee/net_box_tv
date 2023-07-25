import React from 'react';
import AbonnementForm from '../components/AbonnementForm/AbonnementForm';
import TransitionEffect from '../components/TransitionEffect/TransitionEffect';
// Services Icons
import {SiMaterialdesignicons} from "react-icons/si";
import {BsServer} from "react-icons/bs";
import { AiFillCustomerService } from "react-icons/ai";

import ChaineImage1 from "../assets/programme1.jpg";
import ChaineImage2 from "../assets/programme2.jpg";
import ChaineImage3 from "../assets/programme3.jpg";
import ChaineImage4 from "../assets/programme4.jpg";

const AbonnementFormPage = ({Id}) => {

    const Channels = [
        {
        id: 1,
        image: ChaineImage1,
        categorie: ["Sci-fi", "Action", "Drama"],
        title: "Abonnement 1 mois"
        },
        {
        id: 2,
        image: ChaineImage2,
        categorie: ["Abonnement 1 mois"],
        title: "Tenet"
        },
        {
        id: 3,
        image: ChaineImage3,
        categorie: ["Sci-fi", "Action", "Drama"],
        title: "Mission Impossible"
        },
        {
        id: 4,
        image: ChaineImage4,
        categorie: ["Sci-fi", "Action", "Drama"],
        title: "Iron Man 3"
        }
    ];

    const Services = [
        [
            {
                id: 1,
                icon: SiMaterialdesignicons,
                title: "Disponibles et Compatibles sur tous les appareils1",
                description: " Télévision, Ordinateur, Tablettes, WebTV (navigateur), Smart-phones, XBMC/KODI sont les appareils ou plates-formes supportées."
            },

            {
                id: 2,
                icon: BsServer,
                title: "Sécurité et Confort pour toutes vos actions",
                description: "Notre INFRASTRUCTURE assure la sécurité des données AU PLUS HAUT niveau. Vous pouvez regarder vos chaînes sans coupure 24h / 24."
            },

            {
                id: 3,
                icon: AiFillCustomerService,
                title: "REVENDEUR",
                description: "Nous proposons un plan de revendeur avantageux qui vous permet de développer et de gérer votre propre clientèle."
            }
        ],
        
        [
            {
                id: 1,
                icon: SiMaterialdesignicons,
                title: "Disponibles et Compatibles sur tous les appareils 2",
                description: " Télévision, Ordinateur, Tablettes, WebTV (navigateur), Smart-phones, XBMC/KODI sont les appareils ou plates-formes supportées."
            },

            {
                id: 2,
                icon: BsServer,
                title: "Sécurité et Confort pour toutes vos actions",
                description: "Notre INFRASTRUCTURE assure la sécurité des données AU PLUS HAUT niveau. Vous pouvez regarder vos chaînes sans coupure 24h / 24."
            },

            {
                id: 3,
                icon: AiFillCustomerService,
                title: "REVENDEUR",
                description: "Nous proposons un plan de revendeur avantageux qui vous permet de développer et de gérer votre propre clientèle."
            }
        ],

        [
            {
                id: 1,
                icon: SiMaterialdesignicons,
                title: "Disponibles et Compatibles sur tous les appareils 3",
                description: " Télévision, Ordinateur, Tablettes, WebTV (navigateur), Smart-phones, XBMC/KODI sont les appareils ou plates-formes supportées."
            },

            {
                id: 2,
                icon: BsServer,
                title: "Sécurité et Confort pour toutes vos actions",
                description: "Notre INFRASTRUCTURE assure la sécurité des données AU PLUS HAUT niveau. Vous pouvez regarder vos chaînes sans coupure 24h / 24."
            },

            {
                id: 3,
                icon: AiFillCustomerService,
                title: "REVENDEUR",
                description: "Nous proposons un plan de revendeur avantageux qui vous permet de développer et de gérer votre propre clientèle."
            }
        ]
    ]

  return (
    <div>
        <AbonnementForm Channels={Channels} Services={Services[Id-1]} Id={Id} />
        <TransitionEffect />
    </div>
  )
}

export default AbonnementFormPage;