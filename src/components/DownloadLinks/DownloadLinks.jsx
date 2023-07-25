import React from 'react';
import './DownloadLink.css'

const DownloadLinks = () => {
  return (
    <section className="downloadLinks">
      <h4>Télécharger nos applications</h4>
      
      <div className="downloadElements grid">
        <div className="downloadLink">
              <p>Smart Phone && Tablette</p>
              <span> Android || IOS || IPhone </span>
          </div>

          <div className="downloadLink">
              <p>Ordinateur</p>
              <span> Windows || Mac || Linus </span>
          </div>

          <div className="downloadLink">
              <p>Smart TV </p>
              <span> Télévision traditionnelle </span>
          </div>
      </div>

    </section>
  )
}

export default DownloadLinks;