import React from "react";

import './styles.scss'

export function SectionNews() {
  return (
    <div className="news-sub-container">
      <p className="join">Participe de nossas news com promoções e novidades!</p>
      <div className="inpt-box">
        <input 
          type="text" 
          name="name" 
          id="name" 
          className="inpt" 
          placeholder="Digite o seu nome"
        />
        <input 
          type="email" 
          name="email" 
          id="email" 
          className="inpt" 
          placeholder="Digite seu email"
        />
        <button className="btn-want">Eu quero!</button>
      </div>
    </div>
  )
}