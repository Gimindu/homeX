import React from "react";
import "./Product.css";
import Recommended from "../Recommended/Recommended";

export default function Product({ result, handleClick }) {
  return (
    <>
      <Recommended handleClick={handleClick} />
      <section className="card-container">{result}</section>
    </>
  );
}
