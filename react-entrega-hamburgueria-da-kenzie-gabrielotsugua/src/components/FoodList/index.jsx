import React from 'react'
import "./index.css"
import { GreenButton } from '../Buttons'
import hamburguer from "../../assets/hamburguer.png"

const FoodList = () => {
  return (
    <ul>
      <li>
        <figure>
          <img src={hamburguer} alt="" />
        </figure>
        <div>
          <h3>Hamburguer</h3>
          <p>Sanduíches</p>
          <span>R$ 14.00</span>
          <GreenButton>Adicionar</GreenButton>
        </div>
      </li>
    </ul>
  )
}

export default FoodList