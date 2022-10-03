import React from 'react'
import "./index.css"
import { GreenButton } from '../Buttons'


const FoodList = ({ addToCart, newFoodList }) => {

  return (
    <ul>

      {newFoodList.map((product) => (
        <li key={product.id}>
          <figure>
            <img src={product.img} alt="" />
          </figure>
          <div>
            <h3>{product.name}</h3>
            <p>{product.category}</p>
            <span>{product.price.toLocaleString("pt-BR", { style: 'currency', currency: 'BRL' })}</span>
            <GreenButton className='greenButton' onClick={() => addToCart(product)}>Adicionar</GreenButton>
          </div>
        </li>
      ))}
    </ul>
  )
}

export default FoodList