import React, { useState } from 'react';
import Item from './Item';

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const filteredItems = selectedCategory === 'All'
    ? items
    : items.filter(item => item.category === selectedCategory);

  return (
    <div>
      <select value={selectedCategory} onChange={handleCategoryChange}>
        <option value="All">All</option>
        <option value="Groceries">Groceries</option>
        <option value="Electronics">Electronics</option>
        {/* Add other categories as needed */}
      </select>
      <ul>
        {filteredItems.map(item => (
          <Item key={item.id} itemName={item.name} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
