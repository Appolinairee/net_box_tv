import React from 'react';
import '../../components/AbonnementForm/AbonnementForm.css';
import TransitionEffect from '../../components/TransitionEffect/TransitionEffect';

import ChannelsPresentation from '../../components/ChannelsPresentation/ChannelsPresentation';
import { AiOutlineArrowRight } from "react-icons/ai";

// Services Icons
import {SiMaterialdesignicons} from "react-icons/si";
import {BsServer} from "react-icons/bs";
import { AiFillCustomerService } from "react-icons/ai";

import ChaineImage1 from "../../assets/programme1.jpg";
import ChaineImage2 from "../../assets/programme2.jpg";
import ChaineImage3 from "../../assets/programme3.jpg";
import ChaineImage4 from "../../assets/programme4.jpg";

const Decodeur = () => {

    const Channels = [
        {
        id: 1,
        image: ChaineImage1,
        categorie: ["Sci-fi", "Action", "Drama"],
        title: "Achat Décodeur"
        },
        {
        id: 2,
        image: ChaineImage2,
        categorie: ["Achat écodeur"],
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
    ]

  return (
    <div>
        <div className="abonnementFormContent">
            <h2>Vos informations pour l'achat de votre décodeur</h2>

            <form action="" className='grid'>
                <div className="input nom">
                    <label htmlFor="nom">Nom et Prénom*</label><br />
                    <input type="text" id='nom' placeholder='Votre Nom...'/>
                </div>

                <div className="input prenom">
                        <label htmlFor="tel">Prénom *</label><br />
                        <input type="tel" id='tel' placeholder='gdgbhb'/>
                </div>

                <div className="input mail">
                        <label htmlFor="mail">Adresse mail *</label><br />
                        <input type='email' id='mail' placeholder='E mail...'/>
                        <p>Votre email de souscription valide</p>
                </div>

                <div className="input lieu">
                    <label htmlFor="place">Lieu de Livraison *</label><br />
                    <input type='text' id='place' placeholder='Place Etoile Rouge...'/>
                    <p>! Disponible uniquement au Bénin</p>
                </div>

                <div className="input formDetail">
                    <label htmlFor="formdetail">Information additionnelle (optionnel)</label><br />
                    <textarea id="formdetail" cols="20" rows="5" placeholder='Votre Information...'></textarea>
                </div>
            </form>
            
            <p style={{ textAlign: 'center' }}>!! Paiement de 30.000 Fcfa pour votre décodeur</p>
            
            <button className='flex' type="submit"> Valider <AiOutlineArrowRight /></button>
        </div>

        <ChannelsPresentation Channels={Channels} Services={Services} Titre="Votre décodeur + 1 mois d'abonnement gratuit"/>

        <TransitionEffect />
    </div>
  )
}

export default Decodeur;