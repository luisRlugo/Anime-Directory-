import React, { useState } from "react";
import axios from "axios";

const SearchBar = ({ setAnimeList }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = async (event) => {
    event.preventDefault();

    const response = await axios.get(
      `https://api.jikan.moe/v4/anime?q=${searchTerm}&limit=10`
    );
    setAnimeList(response.data.data);
  };

  return (
    <form onSubmit={handleSearch}>
      <input
        type="text"
        placeholder="Search for an anime"
        value={searchTerm}
        onChange={(event) => setSearchTerm(event.target.value)}
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchBar;
