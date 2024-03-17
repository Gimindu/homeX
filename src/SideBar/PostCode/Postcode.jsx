import React from "react";
import "./Postcode.css";
import Input from "../../components/Input";

export default function Postcode({ handleChange }) {
  return (
    <div>
      <h2 className="sidebar-title price-title">Postcode Area</h2>
      <div className="postcode-check">
        <label className="sidebar-label-container postcode">
          <input onChange={handleChange} type="radio" value="" name="test3" />
          <span className="checkmark"></span>
          All
        </label>

        <Input
          handleChange={handleChange}
          value="matara"
          title="matara"
          name="test3"
        />

        <Input
          handleChange={handleChange}
          value="galle"
          title="galle"
          name="test3"
        />

        <Input
          handleChange={handleChange}
          value="colombo"
          title="colombo"
          name="test3"
        />

        <Input
          handleChange={handleChange}
          value="rathnapura"
          title="rathnapura"
          name="test3"
        />
      </div>
    </div>
  );
}
