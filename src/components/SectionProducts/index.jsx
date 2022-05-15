import React, { useContext, useEffect, useState } from "react";
import Carousel from 'react-elastic-carousel'
import starImg from '../../assets/starFilled.svg'
import starOutlineImg from '../../assets/starEmpty.svg'
import offImg from '../../assets/flag-off.svg'

import api from '../../services/api';

import './styles.scss'
import { Link } from "react-router-dom";
import { CounterCartContext } from "../../hooks/useItems";

const breakPoints = [
  { width: 425, itemsToShow: 2, itemsToScroll: 2, showArrows: false, pagination: true },
  { width: 768, itemsToShow: 4, pagination: false }
]

export function SectionProducts() {
  const [countCart, setCountCart] = useContext(CounterCartContext);
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

  function renderStars(stars) {
    const response = [];
    for (let i = 0; i < 5; i++) {
      response.push(
        <img height="10" width="10" src={i < stars ? starImg : starOutlineImg} alt="Estrelas" />
      )
    }
    return response;
  }

  function handleBuy() {
    setCountCart(countCart + 1)
  }

  return (
    <main className="products-container">
      <h2>Mais Vendidos</h2>
      <Carousel
        className="products-carousel"
        outerSpacing={0}
        breakPoints={breakPoints}
      >
        {products?.map(product => (
          <div className="product" key={product.productId}>
            {product.listPrice !== null 
              && <img src={offImg} alt="Tag off" className="tag-off"/>
            }
            <img key={product.productId} src={product.imageUrl} alt="Social Shoes" className="shoe" />
            <div className="info">
              <Link to={{ pathname: `/product/${product.productId}` }}>
                <p className="name-product">{product.productName}</p>
              </Link>              
              <div className="stars">              
                {renderStars(product.stars)}             
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
              <button className="btn-buy" onClick={handleBuy}>COMPRAR</button>              
            </div>
          </div>
        ))}    
      </Carousel>
    </main>
  )
}