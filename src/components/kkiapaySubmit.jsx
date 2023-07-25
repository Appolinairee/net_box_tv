import React from 'react';

const kkiapaySubmit = () => {

    function open() {
        openKkiapayWidget({
          amount: price,
          api_key: "931b3d60048911ed995cd39f617b9df2",
          sandbox: true,
          email: "randomgail@gmail.com",
          phone: "97000000"
        });
    }

  return (
    <div>
      
    </div>
  )
}

export default kkiapaySubmit;