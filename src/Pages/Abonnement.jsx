import React from 'react';
import AbonnementTypes from '../components/AbonnementTypes/AbonnementTypes';
import ChannelsPresentation from '../components/ChannelsPresentation/ChannelsPresentation';

// Services Icons
import {SiMaterialdesignicons} from "react-icons/si";
import {BsServer} from "react-icons/bs";
import { AiFillCustomerService } from "react-icons/ai";

import ChaineImage1 from "../assets/programme1.jpg";
import ChaineImage2 from "../assets/programme2.jpg";
import ChaineImage3 from "../assets/programme3.jpg";
import ChaineImage4 from "../assets/programme4.jpg";

import TransitionEffect from '../components/TransitionEffect/TransitionEffect';

const Abonnement = () => {
  
  const Channels = [
    {
        id: 1,
        image: ChaineImage1,
        categorie: [ "Sci-fi", "Action", "Drama" ],
        title: "Fast & Furious"
    },

    {
        id: 2,
        image: ChaineImage2,
        categorie: [ "Sci-fi", "Action", "Drama" ],
        title: "Tenet"
    },

    {
        id: 3,
        image: ChaineImage3,
        categorie: [ "Sci-fi", "Action", "Drama" ],
        title: "Mission Impossible"
    },

    {
        id: 4,
        image: ChaineImage4,
        categorie: [ "Sci-fi", "Action", "Drama" ],
        title: "Iron Man 3"
    }
  ]

  const Services = [
      {
          id: 1,
          icon: SiMaterialdesignicons,
          title: "Disponibles et Compatibles sur tous les appareils",
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

  return (
    <div>
      <AbonnementTypes />
      <ChannelsPresentation Channels={Channels} Services={Services} Titre="Vivez dans le temps et de vos préférences" />
      <TransitionEffect />
    </div>
  )
}

export default Abonnement;