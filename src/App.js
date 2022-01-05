import { useState } from 'react';
import logo from './components/logo.png'
import './App.css';
import Cart from './components/Cart';
import Products from './components/Products';
import { useEffect } from 'react/cjs/react.development';
import fiterList from './components/fiterList';

function App() {
  const [products, setProducts] = useState([])
  const [cart, setCart] = useState([])

  useEffect(() => {
    setProducts(fiterList([], null))
    if(JSON.parse(localStorage.getItem("products"))) {
      setCart(JSON.parse(localStorage.getItem("products")))
    }
  }, [])

  const addToCart = (item) => {
    const productList = [...cart]

    if(!productList.includes(item)) {
      productList.push(item)
    }

    const index = productList.indexOf(item)
    productList[index].quantity++;
    setCart(productList)
    localStorage.setItem("products", JSON.stringify(productList))

    alert("Pizza added", cart)

  }

  const changeQuantity = (item, e) => {
    const productList = [...cart]
    const index = productList.indexOf(item)

    if(e === "+") {
      productList[index].quantity++;
    } else {
      if(productList[index].quantity > 1) {
        productList[index].quantity--;
      } else {
        productList.splice(index, 1)
      }
    }

    localStorage.setItem("products", JSON.stringify(productList))
    setCart(productList)
  }

  return (
    <>
      <div className='headerNav'>
        <img src={logo} alt='logo' className='header__logo'/>
        <Cart changeQuantity={changeQuantity} products={cart}/>
      </div>
      <Products products={products} addToCart={addToCart}/>
    </>
  );
}

export default App;
