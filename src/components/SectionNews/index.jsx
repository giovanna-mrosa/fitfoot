import React, { useState } from "react";
import validator from 'validator'
import api from '../../services/api'

import './styles.scss'

export function SectionNews() {
  const [emailError, setEmailError] = useState('')
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [nameError, setNameError] = useState('')

  async function handleSubmit(e) {
    e.preventDefault()
    if (name.length < 1) {
      setNameError('Por favor, insira seu nome')
    } else {
      setNameError('')
    }
    if (!validator.isEmail(email)) {
      setEmailError('Por favor, insira um e-mail válido')      
    } else {
      setEmailError('')
    }   

    let body = {
      email,
      name    
    }

    if (validator.isEmail(email) && name.length >= 0) {
      console.log('name', name)
      console.log('email', email)
      await api.post('/newsletter', body)
    } else {
      console.log('error')
    }
  }
  

  return (
    <div className="news-sub-container">
      <p className="join">Participe de nossas news com promoções e novidades!</p>
      {window.screen.width > 768 ? (
        <form className="inpt-box" onSubmit={handleSubmit}>
          <input 
            type="text" 
            name="name" 
            id="name" 
            className="inpt" 
            placeholder="Digite o seu nome"
            autocomplete="off"
            onChange={(e) => setName(e.target.value)}
          />
          <input 
            type="email" 
            name="email" 
            id="email" 
            className="inpt" 
            placeholder="Digite seu email"
            autocomplete="off"
            onChange={(e) => setEmail(e.target.value)}
          />
          <button className="btn-want" type="submit">Eu quero!</button>      
          <div className="error-box">
            <span className="error-field">{nameError}</span>
            <span className="error-field">{emailError}</span>
          </div>
        </form>
        ) : (
          <form className="inpt-box" onSubmit={handleSubmit}>
            <input 
              type="text" 
              name="name" 
              id="name" 
              className="inpt" 
              placeholder="Digite o seu nome"
              autocomplete="off"
              onChange={(e) => setName(e.target.value)}
            />
            <div className="error-mob"><span className="error-field-mob">{nameError}</span></div>
            <input 
              type="email" 
              name="email" 
              id="email" 
              className="inpt" 
              placeholder="Digite seu email"
              autocomplete="off"
              onChange={(e) => setEmail(e.target.value)}
            />
            <div className="error-mob"><span className="error-field-mob">{emailError}</span></div>
            <button className="btn-want" type="submit">Eu quero!</button>           
          </form>
        )
      }
      
    </div>
  )
}