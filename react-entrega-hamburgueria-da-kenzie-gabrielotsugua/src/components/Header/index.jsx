import React from 'react'
import "./index.css"


const Header = ({ search, setSearch }) => {

  return (
    <header>
      <h1>Burguer <span>Kenzie</span></h1>
      <div>
        <input type="text" placeholder='Digitar pesquisa' value={search} onChange={(e) => setSearch(e.target.value)} />
      </div>
    </header>
  )
}

export default Header