import React, { useState } from 'react';
import './ChaineListing.css';
import Image1 from '../../assets/programme1.jpg';
import Image2 from '../../assets/programme2.jpg';
import Image3 from '../../assets/programme3.jpg';
import Image4 from '../../assets/programme4.jpg';

const ChaineCategorieListing = ({Title, Chaines}) => {
    const [nbrChaines, setNbrChaines] = useState(4);

    const handleNbrChaines = () => {
        setNbrChaines((nbrChaines !== Chaines.length)? Chaines.length : 4 );
    }

    const categoryId = Title.toLowerCase().replace(/\s+/g, '');

  return (
    <section className="chaineListing" id={categoryId}>
        <h2 className='before'> {Title} </h2>

        <div className="chainesElements grid">
            {
                Chaines.slice(0, nbrChaines).map((chaine) => (
                    <div className="chaineElement">
                        <img src={chaine.image} alt={chaine.title} />
                        
                        <div className="chaineContents">
                            <h4> {chaine.title} </h4>
                            <p className='desc'> {chaine.desc} </p>
                        </div>
                    </div>
                ))
            }
        </div>

        {
            (nbrChaines < Chaines.length) && <button onClick={handleNbrChaines}>Voir {(nbrChaines === Chaines.length)? "Moins" : "Plus"} </button>
        }
    </section>
  )
}








const ChaineListing = () => {
    
    const Chaines = [
        {
            title: "Chaîne 1",
            desc: "Description 1",
            image: Image1, 
            categorie: "Sports"
        },

        {
            title: "Chaîne 2",
            desc: "Description 2",
            image: Image2, 
            categorie: "Sports"
        },
        
        {
            title: "Chaîne 1",
            desc: "Description 1",
            image: Image3, 
            categorie: "Sports"
        },

        {
            title: "Chaîne 2",
            desc: "Description 2",
            image: Image4, 
            categorie: "Sports"
        },

        {
            title: "Chaîne 3",
            desc: "Description 3",
            image: Image1, 
            categorie: "Sports"
        },

        {
            title: "Chaîne 4",
            desc: "Description 4",
            image: Image2, 
            categorie: "Sports"
        },

        {
            title: "Chaîne 1",
            desc: "Description 1",
            image: Image3, 
            categorie: "Actualités"
        },

        {
            title: "Chaîne 2",
            desc: "Description 2",
            image: Image4, 
            categorie: "Actualités"
        },

        {
            title: "Chaîne 3",
            desc: "Description 3",
            image: Image1, 
            categorie: "Actualités"
        },

        {
            title: "Chaîne 4",
            desc: "Description 4",
            image: Image2, 
            categorie: "Actualités"
        },
        
        {
            title: "Chaîne 1",
            desc: "Description 1",
            image: Image4, 
            categorie: "Technologie"
        },

        {
            title: "Chaîne 2",
            desc: "Description 2",
            image: Image1, 
            categorie: "Technologie"
        },

        {
            title: "Chaîne 3",
            desc: "Description 3",
            image: Image3, 
            categorie: "Technologie"
        },

        {
            title: "Chaîne 4",
            desc: "Description 4",
            image: Image2, 
            categorie: "Technologie"
        },

        {
            title: "Chaîne 1",
            desc: "Description 1",
            image: Image4, 
            categorie: "Voyages"
        },

        {
            title: "Chaîne 2",
            desc: "Description 2",
            image: Image4, 
            categorie: "Voyages"
        },

        {
            title: "Chaîne 3",
            desc: "Description 3",
            image: Image4, 
            categorie: "Voyages"
        },

        {
            title: "Chaîne 4",
            desc: "Description 4",
            image: Image4, 
            categorie: "Voyages"
        },
    ];

    const Categories = [ 
        { id: 1, name: "Sports" },
        { id: 2, name: "Actualités" },
        { id: 3, name: "Technologie"},
        { id: 4, name: "Voyages"},
        { id: 5, name: "Mode"},
        { id: 6, name: "Musique" },
        { id: 7, name: "Cuisine" },
        { id: 8, name: "Art et Design"}
    ];

    const shuffleArray = (array) => {
        for (let i = array.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [array[i], array[j]] = [array[j], array[i]];
        }
    };
    
    return(
        <div className="chainesListing">
            <div className="categories flex">
                {Categories.map((categorie) => (
                    <a href={`#${categorie.name.toLowerCase().replace(/\s+/g, '')}`}>
                        <span  className="categorie" key={categorie.id}> {categorie.name} </span>
                    </a>
                ))}
            </div>

            <div className="categorieLists grid">
                {Categories.map((category) => (
                    <ChaineCategorieListing
                        key={category.id}
                        Title={category.name}
                        Chaines={Chaines.filter((chaine) => chaine.categorie === category.name)}
                    id={category.name}/>
                ))}
            </div>
        </div>
            
    )
}

export default ChaineListing;
