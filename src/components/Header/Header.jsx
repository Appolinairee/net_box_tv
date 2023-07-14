import React, {useState} from 'react';
import './Header.css';
import Background from "../../assets/background1.jpg";

import { BsFillPlayFill } from "react-icons/bs";
import { BsArrowLeft } from "react-icons/bs";
import { BsArrowRight } from "react-icons/bs";

const Header = () => {

    const Slides = [
        {
            id: 1,
            background: Background,
            categories: [ "PG 13", "Sci-fi" ],
            title: "Net Box TV",
            description: "Avec Net Box TV, pour tous les goûts, pour toutes les langues. Avec plus de 35.000 chaînes, voyageons dans le temps!" 
        },

        {
            id: 2,
            background: Background,
            categories: [ "PG 13", "Sci-fi" ],
            title: "The Future",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus." 
        },

        {
            id: 3,
            background: Background,
            categories: [ "PG 13", "Sci-fi" ],
            title: "With Family",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus." 
        },

        {
            id: 4,
            background: Background,
            categories: [ "PG 13", "Sci-fi" ],
            title: "Let's go",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus." 
        }
    ];

    const [currentslide, setCurrentslide] = useState(parseInt(Math.random()*Slides.length + 1));

    const handleManual = (n) => {
        if (currentslide <= 0) 
            setCurrentslide(Slides.length);
        else if(currentslide >= Slides.length)
            setCurrentslide(n? 1 : Slides.length-1);
        else
        setCurrentslide(n? currentslide+1: ((currentslide !== 1)? currentslide-1: Slides.length));

    }

  return (
    <div className='slides'>
        <section className="headers" style={ { transform: `translateY(-${75*(currentslide-1)}vh)` } }>
            {
                Slides.map( (item) => (
                    <div key={item.id} className="header" style={
                        { background: `url(${ item.background }) center no-repeat`, backgroundSize: "cover" }
                    }>
                        <div className="headerContent">
                            <div className="contentCategorie flex">
                                <span> {item.categories[0]} </span>
                                <span> {item.categories[1]} </span>
                            </div>
                            
                            <h2>{ item.title }</h2>
            
                            <p>{ item.description }</p>
            
                            <div className="headerDetails flex">
                                <button className="btn btn1">Décodeur</button>
                                <button className="btn btn2">
                                    <BsFillPlayFill className="icon" />
                                    <span>Abonnement</span>
                                </button>
                            </div>
                        </div>
            
                        <div className='backOverlay'></div>
                        
                    </div>
                ))
            }
        </section>

        <div className="slideState flex">
            <BsArrowLeft className='icon' onClick={ () => handleManual(0) }/>

                <div className="buttons flex">
                    { Slides.map ((index, k) => ( 
                        <span key={index} onClick={ ()=> setCurrentslide(parseInt(k+1)) } style={ {
                            background: ((k+1) === currentslide)? 'white': '', 
                            padding: ((k+1) === currentslide)? '3px 7px': '3px',
                            borderRadius: ((k+1) === currentslide)? '7px': '50%'
                        } }></span>
                     )) }
                </div>

            <BsArrowRight className='icon' onClick={ () => handleManual(1) } />
        </div>
    </div>
  )
}

export default Header;