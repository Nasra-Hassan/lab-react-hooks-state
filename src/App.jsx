import React, { useState } from 'react'
import ProductList from './components/ProductList'
import Cart from './components/Cart'
import DarkModeToggle from './components/DarkModeToggle'

export const sampleProducts = [
  { id: 1, name: 'Apple', category: 'Fruits', price: '$1.00' },
  { id: 2, name: 'Milk', category: 'Dairy', price: '$2.50' },
]

function App() {
  const [darkMode, setDarkMode] = useState(false)
  const [cart, setCart] = useState([])
  const [category, setCategory] = useState('all')

  const addToCart = (product) => {
    setCart((prev) => [...prev, product])
  }

  const filteredProducts =
    category === 'all'
      ? sampleProducts
      : sampleProducts.filter((p) => p.category === category)

  return (
    <div>
      <h1>🛒 Shopping App</h1>

      <DarkModeToggle darkMode={darkMode} setDarkMode={setDarkMode} />

      <label>Filter by Category: </label>
      <select onChange={(e) => setCategory(e.target.value)}>
        <option value="all">All</option>
        <option value="Fruits">Fruits</option>
        <option value="Dairy">Dairy</option>
      </select>

      <h2>Available Products</h2>

      {filteredProducts.length === 0 ? (
        <p>No products available</p>
      ) : (
        <ProductList products={filteredProducts} addToCart={addToCart} />
      )}

      <h2>Shopping Cart</h2>
      <Cart cart={cart} />
    </div>
  )
}

export default App