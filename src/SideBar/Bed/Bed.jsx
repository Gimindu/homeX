import React from "react";
import "./Bed.css";
import Input from "../../components/Input";

export default function Bed({ handleChange }) {
  return (
    <div>
      <h2 className="sidebar-title price-title">Bedroom</h2>
      <label className="sidebar-label-container">
        <input onChange={handleChange} type="radio" value="" name="test1" />
        <span className="checkmark"></span>
        All
      </label>

      <Input
        handleChange={handleChange}
        value="1-Bed"
        title="1-Bed"
        name="test1"
      />

      <Input
        handleChange={handleChange}
        value="2-Bed"
        title="2-Bed"
        name="test1"
      />

      <Input
        handleChange={handleChange}
        value="3-Bed"
        title="3-Bed"
        name="test1"
      />

      <Input
        handleChange={handleChange}
        value="4-Bed"
        title="4-Bed"
        name="test1"
      />
    </div>
  );
}
