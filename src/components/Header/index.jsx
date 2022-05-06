/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import logoImg from '../../assets/logo.svg'
import searchIcon from '../../assets/search-icon.svg'
import userIcon from '../../assets/user-logo.svg'
import cartIcon from'../../assets/cart-icon.svg'

import './styles.scss'

export function Header() {
  return (
    <header>
      <div className="header-content">
        <img src={logoImg} alt="Logo fitfoot" className="logo" />
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
        <a href="#">
          <img src={cartIcon} alt="Cart Icon" />
        </a>
      </div>
    </header>
  )
}