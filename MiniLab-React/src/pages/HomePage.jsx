import React from "react";
import { Link } from "react-router-dom";
export const HomePage = ({ items, onDelete, onEdit }) => {
  return (
    <div>
      <h2>Product List</h2>
      <ul>
        {items.map((item) => (
          <div key={item.id}>
            <Link to={`/item/${item.id}`}>
              <h3>{item.title}</h3>
            </Link>
            <p>{item.description}</p>
            <p>Price: ${item.price}</p>
            <p>Stock: {item.stock}</p>

            <span>In Stock: {item.stock > 0 ? "✅" : "❌"}</span>
            <div>
              <button
                className="DeleteButton"
                onClick={() => onDelete(item.id)}
              >
                {" "}
                Delete
              </button>
              <button className="EditButton" onClick={() => onEdit(item)}>
                Edit
              </button>
            </div>
          </div>
        ))}
      </ul>
    </div>
  );
};
