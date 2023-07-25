import React from 'react';
import './Promotion.css';
import { BsArrowRight } from 'react-icons/bs';
import ImagePromotion1 from '../../assets/promotion1.jpg';
import ImagePromotion2 from '../../assets/promotion2.jpg';

const Promotion = () => {
  return (
    <section className="promotion">
        <h1>Promo & Update</h1>

        <div className="promotionsContent flex">
            <div className="promotionContent after" style={ { background: `url(${ImagePromotion1}) center/cover no-repeat` } }>
                <div className="promotionText">
                    <h3>Get Free Popcorn & Cola</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <a>Learn More</a>
                </div>
                <div className="overlay"></div>
            </div>

            <div className="promotionContent after" style={ { background: `url(${ImagePromotion2}) center/cover no-repeat` } }>
                <div className="promotionText">
                    <h3>Get Free Popcorn & Cola</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <a>Learn More</a>
                </div>
                <div className="overlay"></div>
            </div>
        </div>

        <button className='btn'> About Us <BsArrowRight className='icon' /></button>
    </section>
  )
}

export default Promotion;
