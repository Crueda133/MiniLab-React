import React, { useState } from "react";

export const AddItemForm = ({ onAddItem }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");
  const [images, setImages] = useState(["", "", "", "", ""]);

  const handleImageChange = (index, value) => {
    const newImages = [...images];
    newImages[index] = value;
    setImages(newImages);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newItem = {
      id: Date.now(),
      title,
      description,
      price: parseFloat(price),
      stock: parseInt(stock, 10),
      images: images.filter((img) => img !== ""),
    };
    onAddItem(newItem);
    setTitle("");
    setDescription("");
    setPrice("");
    setStock("");
    setImages(["", "", "", "", ""]);
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
      <h3>Images (Add up to 5 URLs)</h3>
      {images.map((image, index) => (
        <input
          key={index}
          type="text"
          placeholder={`Image URL ${index + 1}`}
          value={image}
          onChange={(e) => handleImageChange(index, e.target.value)}
        />
      ))}
      <button type="submit">Add Item</button>
    </form>
  );
};
