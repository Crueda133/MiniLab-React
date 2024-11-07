import React, { useState, useEffect } from "react";

export const EditItemForm = ({ item, onUpdateItem }) => {
  const [title, setTitle] = useState(item.title);
  const [description, setDescription] = useState(item.description);
  const [price, setPrice] = useState(item.price);
  const [stock, setStock] = useState(item.stock);

  useEffect(() => {
    setTitle(item.title);
    setDescription(item.description);
    setPrice(item.price);
    setStock(item.stock);
  }, [item]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedItem = {
      ...item,
      title,
      description,
      price: parseFloat(price),
      stock: parseInt(stock, 10),
    };
    onUpdateItem(updatedItem);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Edit Item</h2>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Stock"
        value={stock}
        onChange={(e) => setStock(e.target.value)}
        required
      />
      <button type="submit">Update Item</button>
    </form>
  );
};