import React from "react";
import { useState } from "react";
import { createContext } from "react";
import data from "../db/data";

// Create a context for the shopping cart
export const ShopContext = createContext(null);

// Function to get the default cart
const getDefaultCart = () => {
  let cart = {};
  for (let i = 1; i < data.length + 1; i++) {
    cart[i] = 0;
  }
  return cart;
};

// Provider component for the shopping cart context
export const ShopContextProvider = (props) => {
  // State to store the favorite items in the cart
  const [favItems, setFavItems] = useState(getDefaultCart());

  // Function to add an item to the favorite items in the cart
  const addToFavourite = (itemId) => {
    setFavItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };

  // Function to remove an item from the favorite items in the cart
  const removeFromFavourite = (itemId) => {
    setFavItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  // Create the context value with the favorite items and the functions to add/remove items
  const contextValue = { favItems, addToFavourite, removeFromFavourite };

  // Log the favorite items to the console
  console.log(favItems);

  // Render the provider component with the context value and the child components
  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};
