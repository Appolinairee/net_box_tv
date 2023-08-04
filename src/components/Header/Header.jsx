import React, {useState} from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import SlidesIndicators from '../SlidesIndicators/SlidesIndicators';
import Background from "../../assets/background1.jpg";
import Button from '../Button/Button';
import Lottie from 'lottie-react';
import animationData from '../../assets/play button.json';

import { BsFillPlayFill } from "react-icons/bs";

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

    const ChangeSlide = (k) => {
        setCurrentslide(k);
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

                                <Link to="/decodeur">
                                    <Button title="Décodeur" nonAnimation={true} />
                                </Link>
                                <Link to="/abonnement">
                                    <button className="btn btn2">
                                        <Lottie animationData={animationData} className="icon" />
                                        <span>Abonnement</span>
                                    </button>
                                </Link>
                            </div>
                        </div>
            
                        <div className='backOverlay'></div>
                        
                    </div>
                ))
            }
        </section>

        <SlidesIndicators FollowingState={handleManual} ChangeState={ChangeSlide} CurrentSlide={currentslide} Slides={Slides} />
    </div>
  )
}

export default Header;