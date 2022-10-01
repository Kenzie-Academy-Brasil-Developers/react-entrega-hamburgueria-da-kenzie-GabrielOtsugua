import React from 'react'
import { SearchButton } from '../Buttons'
import "./index.css"

const Header = () => {

  return (
    <header>
      <h1>Burguer <span>Kenzie</span></h1>
      <div>
        <input type="text" placeholder='Digitar pesquisa' />
        <SearchButton>Pesquisar</SearchButton>
      </div>
    </header>
  )
}

export default Header