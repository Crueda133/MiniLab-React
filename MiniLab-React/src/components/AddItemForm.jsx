import React, { useState } from "react";

export const AddItemForm = ({ onAddItem }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newItem = {
      id: Date.now(), 
      title,
      description,
      price: parseFloat(price),
      stock: parseInt(stock, 10),
    };
    onAddItem(newItem);
    setTitle("");
    setDescription("");
    setPrice("");
    setStock("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add New Item</h2>
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
      <button type="submit">Add Item</button>
    </form>
  );
};