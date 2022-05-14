/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext } from "react";
import logoImg from '../../assets/logo.svg'
import searchIcon from '../../assets/search-icon.svg'
import userIcon from '../../assets/user-logo.svg'
import cartIcon from'../../assets/cart-icon.svg'
import { CounterCartContext } from '../../hooks/useItems'

import './styles.scss'

export function Header() {
  const [countCart] = useContext(CounterCartContext);

  return (
    <header>
      <div className="header-content">
        <a href="/"><img src={logoImg} alt="Logo fitfoot" className="logo" /></a>
        <div className="search-field">
          <input 
            type="search" 
            ame="search" 
            id="search-inpt" 
            placeholder="O que você está procurando?"
          />
          <img src={searchIcon} alt="Search icon" />
        </div>
        <div className="my-account">
          <img src={userIcon} alt="User icon" />
          <a href="#">
            Minha Conta
          </a>
        </div>
        <a href="#" className="cart-container">
          <img src={cartIcon} alt="Cart Icon" />
          {countCart > 0 ? (
            <p className="items-cart">{countCart}</p>
          ) : (
            <div className="empty-cart"></div>
          )}
        </a>
      </div>
    </header>
  )
}