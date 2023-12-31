import { useState } from 'react'
import ItemList from './components/ItemList'
import Products from './components/Products'
import Users from './components/Users'
import styles from './styles/style.css'

function App() {

  return (
    <div className="App">
      <ItemList />
      <Products />
      <Users />
    </div>
  )
    
}

export default App
