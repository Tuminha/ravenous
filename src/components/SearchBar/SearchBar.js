import React, { useState } from "react";
import styles from "./SearchBar.module.css";
import Yelp from "../../utils/Api"; // Assuming Yelp.js is the module that interacts with Yelp API

const sortByOptions = {
  "Best Match": "best_match",
  "Highest Rated": "rating",
  "Most Reviewed": "review_count",
};

const SearchBar = () => {
  const [term, setTerm] = useState("");
  const [location, setLocation] = useState("");
  const [sortBy, setSortBy] = useState("best_match");

  const getSortByClass = (sortByOption) => {
    if (sortBy === sortByOption) {
      return styles.active;
    }
    return "";
  };

  const handleSortByChange = (sortByOption) => {
    setSortBy(sortByOption);
  };

  const handleTermChange = (event) => {
    setTerm(event.target.value);
  };

  const handleLocationChange = (event) => {
    setLocation(event.target.value);
  };

  const handleSearch = async (event) => {
    event.preventDefault();
    try {
      const businesses = await Yelp.search(term, location, sortBy);
      // ...
    } catch (error) {
      console.error("Error occurred while searching Yelp:", error);
    }
  };

  const renderSortByOptions = () => {
    return Object.keys(sortByOptions).map((sortByOption) => {
      let sortByOptionValue = sortByOptions[sortByOption];
      return (
        <li
          className={getSortByClass(sortByOptionValue)}
          key={sortByOptionValue}
          onClick={() => {
            handleSortByChange(sortByOptionValue);
          }}
        >
          {sortByOption}
        </li>
      );
    });
  };

  return (
    <div className={styles.SearchBar}>
      <div className={styles.SearchBarSortOptions}>
        <ul>{renderSortByOptions()}</ul>
      </div>
      <form onSubmit={handleSearch}>
        <div className={styles.SearchBarFields}>
          <input placeholder="Search Businesses" onChange={handleTermChange} />
          <input placeholder="Where?" onChange={handleLocationChange} />
        </div>
        <div className={styles.SearchBarSubmit}>
          <button type="submit">Let's Go</button>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
