import React, {useEffect, useState} from 'react';
import {
    openKkiapayWidget,
    addKkiapayListener,
    removeKkiapayListener,
  } from "kkiapay";

const Payment = () => {
    const [validate, setValidate] = useState(false);
    
    useEffect(() => {
        addKkiapayListener('success',successHandler);
        return () => {
          removeKkiapayListener('success',successHandler)
        };
      }, []);

      function successHandler(response) {
        setValidate(true);
      }

    function open() {
        openKkiapayWidget({
          amount: 1000,
          api_key: "931b3d60048911ed995cd39f617b9df2",
          sandbox: true,
          email: "randomgail@gmail.com",
          phone: "97000000"
        });
    }

  return (
    <div>
      <button onClick={open}>click me</button>

      { validate && <div className="paiementSuccess">
        Vous avez réussi
        Donnez votre avis sur net box
      </div>  }
    </div>
  )
}

export default Payment;