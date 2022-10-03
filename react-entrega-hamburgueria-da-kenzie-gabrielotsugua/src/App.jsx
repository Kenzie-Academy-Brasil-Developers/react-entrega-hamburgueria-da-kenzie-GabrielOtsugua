import './App.css';
import { StyleReset } from './components/GlobalStyle';
import "./components/Variables/index.css"
import Header from './components/Header';
import FoodList from './components/FoodList';
import Cart from './components/Cart';
import React, { useState, useEffect } from 'react';
import EmpetyCart from './components/EmpetyCart';
import HeaderCart from './components/HeaderCart';
import TotalValue from './components/TotalValue';


const App = () => {

  const [foodList, setFoodList] = useState([])
  const [currentSale, setCurrentSale] = useState([])
  const [search, setSearch] = useState("")

  const newFoodList = foodList.filter(product =>
  product.category.toLowerCase().includes(search.toLowerCase()) || product.name.toLowerCase().includes(search.toLowerCase()))

  const total = currentSale.reduce((acc, cur) => acc + cur.price, 0)

  useEffect(() => {

    fetch("https://hamburgueria-kenzie-json-serve.herokuapp.com/products")
      .then(res => res.json())
      .then(res => setFoodList(res))
  }, [])

  function addToCart(product) {

      setCurrentSale([...currentSale, product])
  }

  function removeFromCart(productToRemove) {

    const newCurrentSale = currentSale.filter((product, i) => i !== productToRemove)
    setCurrentSale(newCurrentSale)
  }

  function removeAllFromCart() {

    const empetyCurrentSale = currentSale.filter(product => product === "empety")
    setCurrentSale(empetyCurrentSale)
  }

  return (
    <div className="App">
      <StyleReset />

      <Header search={search} setSearch={setSearch} />

      <main>
        <section>
          <FoodList foodList={foodList} addToCart={addToCart} newFoodList={newFoodList} />
        </section>

        <aside>
          <HeaderCart />

          {currentSale.length ? (

            <>
              {currentSale.map((product, i) => (
                <Cart key={i} product={product} i={i} removeFromCart={removeFromCart} />
              ))}

              <TotalValue total={total} removeAllFromCart={removeAllFromCart} />
            </>
          ) : (

            <EmpetyCart />
          )}
        </aside>
      </main>
    </div>
  );
}

export default App;