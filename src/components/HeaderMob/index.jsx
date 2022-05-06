/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import logoImg from '../../assets/logo.svg'
import cartIcon from '../../assets/cart-icon.svg'
import searchIcon from '../../assets/search-icon.svg'
import userIcon from '../../assets/user-logo.svg'

import './styles.scss'

export function HeaderMob() {
  const [toggle, setToggle] = useState(false)

  function handleToggle() {
    setToggle(!toggle)
  }

  return (
    <header className="header-mob-container">
      <div className="header-mob-container-content">
        <div
          className={toggle === true ? "burger-menu active" : "burger-menu"}    onClick={handleToggle}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
        <img src={logoImg} alt="Logo" className="logo-mob" />
        <a href="#">
          <img src={cartIcon} alt="Cart Icon" className="cart" />
        </a>
      </div>
      <div className="search-box">
        <input 
          type="search" 
          ame="search" 
          className="search-inpt" 
          placeholder="O que você está procurando?"
        />
        <img src={searchIcon} alt="Search icon" className="search-icon" />
      </div>
      <div className={toggle === true ? "menu-box" : "menu-box hidden"}>
          <a href="#" className="my-account-link">
            <img src={userIcon} alt="User icon" />
            Minha Conta
          </a>
      </div>
    </header>
  )
}