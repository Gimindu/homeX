import React, { useContext, useEffect, useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { ShopContext } from "../context/context";
import "./Card.css";

export default function Card({ itemId, img, title, newPrice, date }) {
  const slug = title.toLowerCase().split(" ").join("-");
  const { favItems, addToFavourite, removeFromFavourite } =
    useContext(ShopContext);

  useEffect(() => {
    setFav(favItems[itemId] && favItems[itemId] > 0);
  }, [itemId, favItems]);

  const [fav, setFav] = useState(false);
  // Handle adding to favorites
  const handleAddToFavourite = () => {
    addToFavourite(itemId);
    setFav(true);
  };

  // Handle removing from favorites
  const handleRemoveFromFavourite = () => {
    removeFromFavourite(itemId);
    setFav(false);
  };

  return (
    <section className="card">
      <Link to={`/${slug}`}>
        <img src={img} alt={title} className="card-img" />
        <div className="card-detail">
          <h3 className="card-title">{title}</h3>
          <section className="card-reviews">
            <span className="total-reviews"> {date}</span>
          </section>

          <section className="card-price">
            <div className="price">{newPrice}</div>
          </section>
        </div>
      </Link>

      <div className="heart-icon">
        {fav ? (
          <button onClick={() => handleRemoveFromFavourite(itemId)}>
            <FaHeart />
          </button>
        ) : (
          <button onClick={() => handleAddToFavourite(itemId)}>
            <FaRegHeart />
          </button>
        )}
      </div>
    </section>
  );
}
