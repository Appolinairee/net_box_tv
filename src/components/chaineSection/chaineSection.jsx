import React from 'react';
import './chaineSection.css';

import { BsArrowRight } from 'react-icons/bs';
import { BsFillPlayFill } from "react-icons/bs";

import ChaineImage1 from "../../assets/programme1.jpg";
import ChaineImage2 from "../../assets/programme2.jpg";
import ChaineImage3 from "../../assets/programme3.jpg";
import ChaineImage4 from "../../assets/programme4.jpg";

const ChaineSection = () => {

    const ChainesElements = [
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

    return (
        <section className="chaineSection">
            <div className="chainesTitle flex">
                <h2>Coming Soon</h2>
                <p className='flex'>View More <BsArrowRight className='icon' /></p>
            </div>

            <div className="chainesElements grid">
                {
                    ChainesElements.map( (item, index) => (
                        <div key={index} className="chaineElement">

                            <div className="chaineImage before">
                                <img src={item.image} alt={item.title} />
                            </div>
                
                            <p> 
                                { item.categorie.map( (categorie) => ( <span> {categorie}, </span> ) ) }
                            </p>
                            <h3> {item.title} </h3>
                            
                            <a className='flex'><BsFillPlayFill className='icon' /> Watch Trailer</a>
                        </div>
                    ) )
                }
            </div>
            
        </section>
    )
}

export default ChaineSection;