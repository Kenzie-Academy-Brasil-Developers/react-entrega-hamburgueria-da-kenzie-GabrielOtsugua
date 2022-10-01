import './App.css';
import { StyleReset } from './components/GlobalStyle';
import "./components/Variables/index.css"
import Header from './components/Header';
import FoodList from './components/FoodList';
import Cart from './components/Cart';

function App() {
  return (
    <div className="App">
      <StyleReset />

      <Header />

      <main>
        <section>
          <FoodList />
        </section>

        <aside>
          <div className='cart_header'>
            <h3>Carrinho de compras</h3>
          </div>
          {/* <div className='cart_empety'>
            <h4>Carrinho vazio</h4>
            <p>Adicione itens</p>
          </div> */}
          
          <Cart />
        </aside>
      </main>
    </div>
  );
}

export default App;