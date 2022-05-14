/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useState } from 'react'
import { useParams } from "react-router-dom";
import starImg from '../../assets/starFilled.svg'
import starOutlineImg from '../../assets/starEmpty.svg'
import backImg from '../../assets/arrow-back.svg'
import Carousel from 'react-elastic-carousel'
import { CounterCartContext } from '../../hooks/useItems'

import api from '../../services/api';

import './styles.scss'

function ProductInfo() {
  const [product, setProduct] = useState()
  const [counter, setCounter] = useState(1)
  const [countCart, setCountCart] = useContext(CounterCartContext)

  function formatCurrency(price) {
    return Intl.NumberFormat('pt-br', { style: 'currency', currency: 'BRL' }).format(price / 100)
  }

  const { productId } = useParams();

    useEffect(() => {
      api.get('/products').then((response) => {
        const filteredProducts = response.data.filter(
          (filteredProduct) => 
            filteredProduct.productId.toString() === productId 
        )
        setProduct(filteredProducts)
      })      
    }, []);

  function renderStars(stars) {
    const response = [];
    for (let i = 0; i < 5; i++) {
      response.push(
        <img height="16" width="16" src={i < stars ? starImg : starOutlineImg} alt="Estrelas" />
      )
    }
    return response;
  }

  function increase() {
    setCounter(count => count + 1)
  }

  function decrease() {
    if (counter > 1) {
      setCounter(count => count - 1)
    } else {
      setCounter(1)
    }    
  }

  function handleBuy() {
    setCountCart(countCart + counter)
    setCounter(1)
  }

  return (
    <main>
      <a href="/" className="back">
        <img width="40" height="40" src={backImg} alt="Back" />
      </a>
      <div className="product-container">
        {product?.map(filteredProduct => (
          <>
            {window.screen.width > 768 ? (
              <div className="images" key={filteredProduct.productId} >
              <img
                src={filteredProduct.imageUrl}
                alt="Shoe"
                className='big-shoe'
              />
              <div className="small-images" >
                <img
                  src={filteredProduct.imageUrl}
                  alt="Shoe"
                  className='small-shoe'                  
                />
                <img
                  src={filteredProduct.imageUrl}
                  alt="Shoe"
                  className='small-shoe'
                />
                <img
                  src={filteredProduct.imageUrl}
                  alt="Shoe"
                  className='small-shoe'
                />
                <img
                  src={filteredProduct.imageUrl}
                  alt="Shoe"
                  className='small-shoe'
                />
              </div>
            </div>
            ) : (
              <Carousel
              itemsToShow={1}
              showArrows={false}
              >
                <img
                  src={filteredProduct.imageUrl}
                  alt="Shoe"
                  className='shoe-mob'                  
                />
                <img
                  src={filteredProduct.imageUrl}
                  alt="Shoe"
                  className='shoe-mob'
                />
                <img
                  src={filteredProduct.imageUrl}
                  alt="Shoe"
                  className='shoe-mob'
                />
                <img
                  src={filteredProduct.imageUrl}
                  alt="Shoe"
                  className='shoe-mob'
                />
              </Carousel>
            )}
            
            <div className="content-info">
              <p className="product-name">{filteredProduct.productName}</p>
              <div className="rating">
                {renderStars(filteredProduct.stars)}
              </div>
              <p className="description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Et ea cum repellendus beatae ex praesentium dignissimos, libero vel ullam deserunt distinctio hic, molestias fugiat nobis?
              </p>
              <div className="prices">
                <p className="full-price">
                  {filteredProduct.listPrice
                    && formatCurrency(filteredProduct.listPrice)
                  }
                </p>
                <div className="promotion-price">
                  <p className="price-off">{formatCurrency(filteredProduct.price)}</p>
                  {filteredProduct.installments.map(installment => (
                    <p className="parcel" key={installment.quantity}>ou em {installment.quantity}x de {formatCurrency(installment.value)}</p>
                    ))
                  }
                </div>
              </div>
              <div className="quant-buy">
                <div className="quantity-box">
                  <button className='minus' onClick={decrease}>-</button>
                  <p className='quantity'>{counter}</p>
                  <button className='plus' onClick={increase}>+</button>
                </div>
                <button className='button-buy' onClick={handleBuy}>COMPRAR</button>
              </div>
            </div>
          </>
        ))}
      </div>
    </main>
  )
}

export default ProductInfo;