import React from "react";
import "./Price.css";
import Input from "../../components/Input";

export default function Price({ handleChange }) {
  return (
    <div className="ml">
      <h2 className="sidebar-title price-title">Price</h2>
      <label className="sidebar-label-container">
        <input onChange={handleChange} type="radio" value="" name="test3" />
        <span className="checkmark"></span>All
      </label>

      <Input
        handleChange={handleChange}
        value={"Rs.20,000/month"}
        title="RS.25000 - RS.35000"
        name="test3"
      />

      <Input
        handleChange={handleChange}
        value={"Rs 40,000 /month"}
        title="RS.35000 - RS.45000"
        name="test3"
      />

      <Input
        handleChange={handleChange}
        value={"Rs 50,000 /month"}
        title="RS.45000 - RS.55000"
        name="test3"
      />

      <Input
        handleChange={handleChange}
        value={"Rs.60,000/month"}
        title="Over RS.55000"
        name="test3"
      />
    </div>
  );
}
