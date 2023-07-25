import React, {useEffect} from 'react';
import './Button.css';
import {AiOutlineArrowRight} from 'react-icons/ai';

import AOS from "aos";
import "aos/dist/aos.css";

const Button = ({title}) => {

  useEffect(() => {
    AOS.init({
        easing: 'ease',
        once: false,
        offset: 100
      });
    AOS.refresh();
  }, []);

  return (
    <button data-aos="zoom-in" className='flex btnComponent' type="submit"> {title} <AiOutlineArrowRight /></button>
  )
}

export default Button
