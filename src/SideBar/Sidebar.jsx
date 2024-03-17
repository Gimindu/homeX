import React, { useState } from "react";
import "./Sidebar.css";
import Category from "./Category/Category";
import Price from "./Price/Price";
import Bed from "./Bed/Bed";
import Postcode from "./PostCode/Postcode";
import { FaFilter } from "react-icons/fa";
import { DatePicker } from "react-widgets/cjs";

export default function Sidebar({
  handleChange,
  handleStartDateChange,
  handleEndDateChange,
  startDate,
  endDate,
}) {
  const [sidebarOpen, setSidebaropen] = useState(false);

  return (
    <>
      <label
        className="filter"
        onClick={() => {
          setSidebaropen(!sidebarOpen);
        }}
      >
        <FaFilter className="FaFilter" />
      </label>

      <section className={sidebarOpen ? "" : "sidebar"}>

        <Category handleChange={handleChange} />
        <Price handleChange={handleChange} />
        <Bed handleChange={handleChange} />
        <h3>Date</h3>
        <h4>From</h4>
        <DatePicker onChange={handleStartDateChange} value={startDate} />
        <h4>To</h4>
        <DatePicker onChange={handleEndDateChange} value={endDate} />

        <Postcode handleChange={handleChange} />
      </section>
    </>
  );
}
