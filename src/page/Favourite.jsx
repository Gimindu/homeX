import React, { useContext } from "react";
import "./Favourite.css";
import data from "../db/data";
import Card from "../components/Card";
import { ShopContext } from "../context/context";

export default function Favourite() {
  const { favItems } = useContext(ShopContext);
  console.log(favItems);
  return (
    <>
      <h1> Favourite page</h1>
      <div className="favItems">
        {data.map((item) => {
          if (favItems[item.itemId] !== 0) {
            return (
              <Card
                itemId={item.itemId}
                key={Math.random()}
                img={item.img}
                title={item.title}
                newPrice={item.newPrice}
                allocation={item.allocation}
              />
            );
          }
        })}
      </div>
    </>
  );
}
