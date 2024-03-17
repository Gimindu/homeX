// export default Postlist;
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import NavBar from "./Navigation/NavBar";
import Product from "./Products/Product";
import Sidebar from "./SideBar/Sidebar";
import products from "./db/data";
import Card from "./components/Card";
import Post from "./components/Post";
import Favourite from "./page/Favourite";
import { ShopContextProvider } from "./context/context";
import "react-widgets/styles.css";

function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [query, setQuery] = useState("");

  //---------buttons Filter-------------
  const handleClick = (event) => {
    setSelectedCategory(event.target.value);
  };

  //---------input Filter-------------

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const handleStartDateChange = (date) => {
    setStartDate(date);
  };

  const handleEndDateChange = (date) => {
    setEndDate(date);
  };

  const filteredData = (products, selected, query, startDate, endDate) => {
    // Combine all filters in a single step for efficiency
    return products
      .filter((product) => {
        // Filter by 'selected', if it is specified
        if (selected) {
          const matchesSelected =
            product.allocation === selected ||
            product.category === selected ||
            product.bed === selected ||
            product.newPrice === selected ||
            product.title === selected ||
            product.date === selected ||
            product.postcode === selected;
          if (!matchesSelected) return false;
        }

        if (
          query &&
          !product.title.toLowerCase().includes(query.toLowerCase())
        ) {
          return false;
        }

        // Filter by date range, if 'startDate' and/or 'endDate' are specified
        if (startDate || endDate) {
          const productDate = new Date(product.date);
          if (startDate && productDate < startDate) return false;
          if (endDate && productDate > endDate) return false;
        }

        // If all checks pass, include the product
        return true;
      })
      .map(({ itemId, img, title, newPrice, allocation }) => (
        <Card
          itemId={itemId}
          key={itemId}
          img={img}
          title={title}
          newPrice={newPrice}
          allocation={allocation}
        />
      ));
  };

  const result = filteredData(products, selectedCategory, query, startDate, endDate);

  return (
    <div className="App">
        <NavBar query={query} handleInputChange={handleInputChange} />
        <Sidebar
          handleChange={handleCategoryChange}
          handleStartDateChange={handleStartDateChange}
          handleEndDateChange={handleEndDateChange}
          startDate={startDate}
          endDate={endDate}
        />

        <Product result={result} handleClick={handleClick} />
    
    </div>
  );
}

function Postlist() {
  return (
    <>
      <ShopContextProvider>
        <Router>
          <Routes>
            <Route path="/favourite" element={<Favourite />} />
            <Route path="/:slug" element={<Post />} />
            <Route path="/" exact element={<App />} />
          </Routes>
        </Router>
      </ShopContextProvider>
    </>
  );
}

export default Postlist;
