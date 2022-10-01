import React from 'react'
import "./index.css"
import hamburguer from "../../assets/hamburguer.png"
import { RemoveButton } from '../Buttons'

const Cart = () => {
  return (
    <div className='product'>
      <img src={hamburguer} alt="" />
      <article>
        <h5>Hamburguer</h5>
        <p>Sanduíches</p>
      </article>
      <RemoveButton>Remover</RemoveButton>
    </div>
  )
}

export default Cart