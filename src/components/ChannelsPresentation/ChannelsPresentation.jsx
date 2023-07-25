import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './ChannelsPresentation.css';


const ChannelsPresentation = ({Channels, Services, Titre}) => {

  return (
    <section className="channels flex">
      <div className="channelsSlides">
        <Carousel
          autoPlay
          interval={5000}
          infiniteLoop
          showIndicators={true} 
          showStatus={false}
          showThumbs={false}
        >
          {Channels.map((item) => (
            <div className="channel" key={item.id}>
              <img src={item.image} alt="" />
              
              <div className="channelInfo">
                <h3> {item.title} </h3>
                {
                    item.categorie.map((cat) => (
                        <span key={cat}> {cat}</span>
                    ))
                }
              </div>
              <div className="overlay"></div>
            </div>
          ))}
        </Carousel>
      </div>

      <div className="ChannelsContents">
        <h2> {Titre} </h2>
        {
            Services.map((item) => (
                <div key={item.id} className="channelContent">
                    <item.icon className="icon"/>
                    <b> {item.title} </b>
                    <p> {item.description} </p>
                </div>
            ))
        }

      </div>
    </section>
  );
};

export default ChannelsPresentation;
