import React from "react";
import { useParams } from "react-router-dom";

export const ItemDetails = ({ items }) => {
  const { id } = useParams();
  const item = items.find((item) => item.id === parseInt(id));

  if (!item) {
    return <h2>Item not found</h2>;
  }

  return (
    <div>
      <h2>{item.title}</h2>
      <p>{item.description}</p>
      <p>Price: ${item.price}</p>
      <p>Stock: {item.stock}</p>
      <span>In Stock: {item.stock > 0 ? "✅" : "❌"}</span>
    </div>
  );
};