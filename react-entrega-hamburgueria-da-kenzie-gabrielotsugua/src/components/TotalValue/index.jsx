import React from 'react'
import "./index.css"
import { RemoveAllButton } from "../Buttons/";

const TotalValue = ({ total, removeAllFromCart }) => {
  return (
    <div className='totalValue'>
      <div>
        <p>Total</p>
        <p><span>{total.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}</span></p>
      </div>
      <RemoveAllButton className='removeAllButton' onClick={removeAllFromCart}>Remover todos</RemoveAllButton>
    </div>
  )
}

export default TotalValue