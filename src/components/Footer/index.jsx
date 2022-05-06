import React from "react";
import mailImg from '../../assets/contact-icon.svg'
import headphoneImg from '../../assets/headphone-icon.svg'
import corebizImg from '../../assets/corebiz-logo.svg'
import vtexImg from '../../assets/vtex-logo.svg'

import './styles.scss'

export function Footer() {
  return (
    <footer>
      <div className="row-one">
        <p className="location">Localização</p>
        <p className="location-info">
          Avenida Lorem Ipsun, 2000. Bloco 6 e 8 <br />
          Lorem Ipsum SP <br />
          brasil@fitfoot.ag <br />
          +55 11 3090 1039 <br />
        </p>
      </div>
      <div className="row-two">
        <button>
          <img src={mailImg} alt="Mail icon" />
          ENTRE EM CONTATO
        </button>
        <button>
          <img src={headphoneImg} alt="Headphone icon" />
          FALE COM O NOSSO CONSULTOR ONLINE
        </button>
      </div>
      <div className="row-three">
        <img src={corebizImg} alt="Created by Corebiz" />
        <img src={vtexImg} alt="Powered by VTEX" />
      </div>
    </footer>
  )
}