import React from "react";
import Carousel from 'react-elastic-carousel'
import socialImg from '../../assets/social-shoe.png'
import sandalImg from '../../assets/chinela.png'
import bootImg from '../../assets/bota.png'
import beltImg from '../../assets/cinto.png'
import starsImg from '../../assets/Rating.svg'

import './styles.scss'

const breakPoints = [
  { width: 425, itemsToShow: 2, itemsToScroll: 2, showArrows: false, pagination: true },
  { width: 768, itemsToShow: 4, pagination: false }
]

export function SectionProducts() {
  return (
    <main className="products-container">
      <h2>Mais Vendidos</h2>
      <Carousel
        className="products-carousel"
        outerSpacing={0}
        breakPoints={breakPoints}
      >
        <div className="product">
          <img src={socialImg} alt="Social Shoes" className="shoe" />
          <div className="info">
            <p className="name-product">SAPATO FLOATER PRETO</p>
            <div className="stars">              
              <img src={starsImg} alt="Rating stars" className="star"/>              
            </div>
            <p className="before-price space"></p>
            <p className="after-price">por R$ 259,90</p>
            <p className="parcel">ou em 9x de R$ 28,87</p>
            <button className="btn-buy">COMPRAR</button>
          </div>
        </div>
        <div className="product">
          <img src={sandalImg} alt="Sandal" className="shoe" />
          <div className="info">
            <p className="name-product">SANDÁLIA LINHO BROWN</p>
            <div className="stars">              
              <img src={starsImg} alt="Rating stars" className="star"/>              
            </div>
            <p className="before-price">de R$ 299,00</p>
            <p className="after-price">por R$ 199,00</p>
            <p className="parcel">ou em 4x de R$ 49,75</p>
            <button className="btn-buy">COMPRAR</button>
          </div>
        </div>
        <div className="product">
          <img src={bootImg} alt="Boots" className="shoe" />
          <div className="info">
            <p className="name-product">BOTA MUSTANG PRETO</p>
            <div className="stars">              
              <img src={starsImg} alt="Rating stars" className="star"/>              
            </div>
            <p className="before-price">de R$ 329,00</p>
            <p className="after-price">por R$ 299,90</p>
            <p className="parcel">ou em 10x de R$ 29,90</p>
            <button className="btn-buy">COMPRAR</button>
          </div>
        </div>
        <div className="product">
          <img src={beltImg} alt="Belt" className="shoe" />
          <div className="info">
            <p className="name-product">CINTO SEMICROMO PRETO 40MM</p>
            <div className="stars">              
              <img src={starsImg} alt="Rating stars" className="star"/>              
            </div>
            <p className="before-price space"></p>
            <p className="after-price">por R$ 79,90</p>
            <p className="parcel space"></p>
            <button className="btn-buy">COMPRAR</button>
          </div>
        </div>
        <div className="product">
          <img src={beltImg} alt="Belt" className="shoe" />
          <div className="info">
            <p className="name-product">CINTO SEMICROMO PRETO 40MM</p>
            <div className="stars">              
              <img src={starsImg} alt="Rating stars" className="star"/>              
            </div>
            <p className="before-price space"></p>
            <p className="after-price">por R$ 79,90</p>
            <p className="parcel space"></p>
            <button className="btn-buy">COMPRAR</button>
          </div>
        </div>
      </Carousel>
    </main>
  )
}