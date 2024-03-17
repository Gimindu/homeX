import React from "react";
import "./Category.css";
import Input from "../../components/Input";

export default function Category({ handleChange }) {
  return (
    <div>
      <h2 className="sidebar-title">Category</h2>
      <div>
        <label className="sidebar-label-container">
          <input onChange={handleChange} type="radio" value="" name="test" />
          <span className="checkmark"></span>All
        </label>

        <Input
          handleChange={handleChange}
          value="house"
          title="house"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="flats"
          title="Flats"
          name="test"
        />
       
      </div>
    </div>
  );
}
