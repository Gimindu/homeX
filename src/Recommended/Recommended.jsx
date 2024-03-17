import React from "react";
import "./Recommended.css";
import Buttons from "../components/Button";

export default function Recommended({ handleClick }) {
  return (
    <div className="fullRecommended">
      <h2 className="recommended-title">Recommended</h2>
      <div className="recommended-flex">
        <Buttons onClickHandler={handleClick} value="" title="All" />
        <Buttons onClickHandler={handleClick} value="rent" title="Rent" />
        <Buttons
          onClickHandler={handleClick}
          value="forSale"
          title="For sale"
        />
      </div>
    </div>
  );
}
