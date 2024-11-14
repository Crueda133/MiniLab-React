import React from "react";
import { useParams } from "react-router-dom";

export const ItemDetails = ({ items }) => {
  const { id } = useParams();
  const item = items.find((item) => item.id === parseInt(id));

  if (!item) {
    return <h2>Item not found</h2>;
  }

  const fallbackImage = "https://via.placeholder.com/150";

  return (
    <div>
      <h2>{item.title}</h2>
      <p>{item.description}</p>
      <p>Price: ${item.price}</p>
      <p>Stock: {item.stock}</p>
      <span>In Stock: {item.stock > 0 ? "✅" : "❌"}</span>

      <div className="item-images">
        <h3>Images</h3>
        {item.images.length > 0 ? (
          <div className="image-grid">
            {item.images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`${item.title} - ${index + 1}`}
                className="item-image"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = fallbackImage;
                }}
              />
            ))}
          </div>
        ) : (
          <p>No images available</p>
        )}
      </div>
    </div>
  );
};
