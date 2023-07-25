import React, {useState, useEffect} from 'react';
import './AvisNewsletter.css';
import {LiaQuoteLeftSolid} from 'react-icons/lia'
import {IoIosSend} from 'react-icons/io';


const AvisNewsletter = () => {

    const Avis = [
        {
            id: 1,
            contenu: "1dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
            author: "John Doe",
            activity: "Designer"
        },

        {
            id: 2,
            contenu: "2dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
            author: "John Doe",
            activity: "Designer"
        },

        {
            id: 3,
            contenu: "3dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
            author: "John Doe",
            activity: "Designer"
        },

        {
            id: 4,
            contenu: "4dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
            author: "John Doe",
            activity: "Designer"
        }
    ];
    const avisDuration = 8000;

    const [currentavis, setCurrentavis] = useState(1);
    const [timeElapsed, setTimeElapsed] = useState(0);

    useEffect(()=>{
        const interval = setInterval(handleManual ,avisDuration);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setTimeElapsed(prevTime => prevTime + 1);
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    const handleManual = () => {
        setCurrentavis(prevValue => {
            if (prevValue >= Avis.length) {
              return 1;
            }else if(prevValue <= 0) 
                return Avis.length;
            else {
              return prevValue + 1; 
            }
        });
        setTimeElapsed(0);
    }

    const style = {
        transform: `translateX(-${(currentavis-1)*100}%)`
    }
    
    const styleBar = {
        width: `${(100/8)*timeElapsed}%`
    }

  return (
    <section className="avisNewsetter">
        <div className="overlay"></div>
        
        <div className="aviss flex">
            {
                Avis.map((item, index) => (
                    <div key={item.id} className="avis" style={ style } >
                        <div className="progressionBar">
                            <span style={styleBar}></span>
                        </div>
                        <LiaQuoteLeftSolid className="icon" />
                        <p> {item.contenu} </p>
                        <b> {item.author} </b> <br />
                        <span> {item.activity} </span>
                    </div>
                ))
            }

        </div>
        
        <Newsletter />
    </section>
  )
}



const Newsletter = () => {
  return (
    <div>
      <div className="newsletter flex">
            <div className="newsletterText">
                <h3>Subscribe our Newsletter</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>

            <form action="" method="post" className='flex'>
                <input type="email" placeholder='Email' />
                <button type="submit" className='btn'>
                    <IoIosSend className='icon'/>
                    <p>Subscribe Now </p>
                </button>
            </form>
        </div>
    </div>
  )
}


export default AvisNewsletter;