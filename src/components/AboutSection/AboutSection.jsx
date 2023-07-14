import React, {useEffect} from 'react';
import './AboutSection.css';

import AOS from "aos";
import "aos/dist/aos.css";

import AboutImage from '../../assets/aboutImage.jpg';
import { BsArrowRight } from 'react-icons/bs';
import { FaUsers } from 'react-icons/fa';
import { RiWechatChannelsLine } from 'react-icons/ri';

const AboutSection = () => {

    useEffect(() => {
        AOS.init({
            easing: 'ease',
            once: true
          });
        AOS.refresh();
      }, []);
        
    return (
        <section className="aboutSection flex">
            <img src={AboutImage} alt="Image d'illustration de l'entreprise" />

            <div className="aboutContent">
                <span>About Us</span>
                <h2>We Giving The Best Experience to Watching Your Favorite Movie</h2>

                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>

                <div className="aboutStats flex" data-aos="fade-left">
                    <div className="aboutStat flex">
                        <FaUsers className="icon"/>
                        <div>
                            <h3>1 485<span>+</span></h3>
                            <p>Trusted Clients</p>
                        </div>
                    </div>

                    <div className="aboutStat flex">
                        <RiWechatChannelsLine className="icon"/>
                        <div>
                            <h3>3 423<span>+</span></h3>
                            <p>Projects Completed</p>
                        </div>
                    </div>
                </div>

                <button className='btn'> About Us <BsArrowRight className='icon' /></button>
            </div>
        </section>
    )
}

export default AboutSection;