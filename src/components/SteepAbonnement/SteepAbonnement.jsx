import React from 'react';
import {Link} from 'react-router-dom'
import './SteepAbonnement.css';

const SteepAbonnement = ({steep}) => {
  return (
    <div className="steep flex after">
        <Link to="../abonnement"><p className='after' data='1'>Choix de votre abonnement</p></Link>

        <p className={ (steep !== 1)? 'after': 'after active'} data='2'>Vos Informations</p>

        <p className={ (steep === 3)? 'after': 'after active'} data='3'>Paiement Sécurisé</p>

    </div>
  )
}

export default SteepAbonnement;