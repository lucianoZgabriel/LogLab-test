import React, { useState } from 'react';
import styles from './styles.module.css'

const ItemList = () => {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState('');

  const handleAddItem = () => {
    if (newItem.trim() !== '') {
      setItems([...items, newItem]);
      setNewItem('');
    }
  };

  return (
    <div className={styles.wrapper}>
      <input
        type="text"
        placeholder="Novo item"
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
      />
      <button onClick={handleAddItem}>Adicionar</button>
      <h2>Lista de Itens</h2>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default ItemList;