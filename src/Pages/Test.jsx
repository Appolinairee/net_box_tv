import React from 'react'
import { useEffect, useState} from 'react';

const Test = () => {

  const [name, setName] = useState('Africa');
  const [password, setPassword] = useState('Africa');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [accessToken, setAccessToken] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    // Appel à l'API pour la connexion
    try {
      const response = await fetch('http://localhost:3500/auth', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, password }),
      });
      
      console.log(JSON.stringify({ name, password }));

      if (response.ok) {
        const data = await response.json();
        setAccessToken(data.accessToken);
        setIsLoggedIn(true);
        console.log(data.accessToken)
        // Enregistrez le jeton dans le local storage ou un cookie pour persister la connexion sur les recharges de page
      } else {
        console.log(response.ok)
        alert('Nom d\'utilisateur ou mot de passe incorrect.');
      }
    } catch (error) {
      alert('Une erreur s\'est produite lors de la connexion.');
    }
  };

  return (
    <div className="test">
       <b>Our last article</b>

        <button onClick={handleLogin}>Valider</button>
    </div>
  )
}

export default Test;