import React, { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import data from "../db/data";
import "./Post.css";
import 'react-tabs/style/react-tabs.css';
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";

export default function Post() {
  const { slug } = useParams();

  const post = data.filter(
    (item) => item.title.toLowerCase().split(" ").join("-") === slug
  )[0];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const prevBtn = useRef(null);
  const nxtBtn = useRef(null);

  // Custom function to switch slides
  function switchSlides(n) {
    let newIndex = currentImageIndex + n;
    if (newIndex < 0) {
      newIndex = post.postimgs.length - 1;
    } else if (newIndex >= post.postimgs.length) {
      newIndex = 0;
    }
    setCurrentImageIndex(newIndex);
  }

  // Define the event handler functions
  const handleNextClick = () => switchSlides(1);
  const handlePrevClick = () => switchSlides(-1);

  useEffect(() => {
    const nextButton = nxtBtn.current;
    const prevButton = prevBtn.current;

    if (nextButton && prevButton) {
      nextButton.addEventListener("click", handleNextClick);
      prevButton.addEventListener("click", handlePrevClick);
    }

    // Clean up function
    return () => {
      if (nextButton && prevButton) {
        nextButton.removeEventListener("click", handleNextClick);
        prevButton.removeEventListener("click", handlePrevClick);
      }
    };
  }, [currentImageIndex]); // Remove 'currentImageIndex' from dependency array

  return (
    <div className="post-container ">
      <h1>Post</h1>

      {post && (
        <div>
          <div className="container">
            <button ref={prevBtn} className="arrow-btns">
              &lt;
            </button>

            <img
              src={post.postimgs[currentImageIndex]}
              alt={`Post image ${currentImageIndex + 1}`}
            />
            <button ref={nxtBtn} className="arrow-btns">
              &gt;
            </button>
          </div>
          <h2>{post.title}</h2>

          <p>{post.reviews}</p>
          <p>Category: {post.category}</p>
          <p>Price: {post.newPrice}</p>
          <p>postcode: {post.postcode}</p>
          <p>beds: {post.bed}</p>
          <p>date: {post.date}</p>
          {/* <p>description: {post.description}</p> */}
          <Tabs>
            <TabList>
              <Tab>Description</Tab>
              <Tab>Map</Tab>
            </TabList>

            <TabPanel>
              <h3>Description</h3>
              {post.description}
            </TabPanel>
            <TabPanel>
              <h3>Map</h3>
              <img src={post.map} alt="map" loading="lazy" />
            </TabPanel>
          </Tabs>

        </div>
      )}
    </div>
  );
}