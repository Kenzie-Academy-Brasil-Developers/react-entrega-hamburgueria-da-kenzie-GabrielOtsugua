import React from 'react'
import "./index.css"
import { RemoveButton } from '../Buttons'


const Cart = ({ product, i, removeFromCart }) => {
  
  return (
    <div className='product'>
      <img src={product.img} alt="" />
      <article>
        <h5>{product.name}</h5>
        <p><span>{product.category}</span></p>
        <span className='price'>{product.price.toLocaleString("pt-BR", {style: "currency", currency: "BRL"})}</span>
      </article>
      <RemoveButton className='removeButton' onClick={() => removeFromCart(i)}>Remover</RemoveButton>
    </div>
  )
}

export default Cart