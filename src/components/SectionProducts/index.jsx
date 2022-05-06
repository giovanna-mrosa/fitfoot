import React, { useEffect, useState } from "react";
import Carousel from 'react-elastic-carousel'
import starsImg from '../../assets/Rating.svg'

import api from '../../services/api';

import './styles.scss'

const breakPoints = [
  { width: 425, itemsToShow: 2, itemsToScroll: 2, showArrows: false, pagination: true },
  { width: 768, itemsToShow: 4, pagination: false }
]

export function SectionProducts() {
  const [products, setProducts] = useState()

  function formatCurrency(price) {
    return Intl.NumberFormat('pt-br', { style: 'currency', currency: 'BRL' }).format(price / 100)
  }

  async function getProducts() {
    const response = await api.get('/products')
    setProducts(response.data)
  }

  useEffect(() => {
    getProducts()
  }, [])

  return (
    <main className="products-container">
      <h2>Mais Vendidos</h2>
      <Carousel
        className="products-carousel"
        outerSpacing={0}
        breakPoints={breakPoints}
      >
        {products?.map(product => (
          <div className="product">
            <img src={product.imageUrl} alt="Social Shoes" className="shoe" />
            <div className="info">
              <p className="name-product">{product.productName}</p>
              <div className="stars">              
                <img src={starsImg} alt="Rating stars" className="star"/>              
              </div>
              <p 
                className={product.listPrice === null ? "before-price space" : "before-price"}
              >
                {product.listPrice && "de " + formatCurrency(product.listPrice)}
              </p>
              <p className="after-price">por {formatCurrency(product.price)}</p>
              {product.installments.length === 0 
                ? (<p className="space-2"></p>)
                : product.installments.map(installment => (
                  <p className="parcel" key={installment.quantity}>ou em {installment.quantity}x de {formatCurrency(installment.value)}</p>
                ))
              }              
              <button className="btn-buy">COMPRAR</button>              
            </div>
          </div>
        ))}    
      </Carousel>
    </main>
  )
}