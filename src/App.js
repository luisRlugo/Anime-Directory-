import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";
import Header from "./compnents/Header";
import AnimeCard from "./compnents/AnimeCard";
import Form from "./compnents/Form";

function App() {
  // Set up state to hold the list of anime
  const [animeList, setAnimeList] = useState(null);

  // Define an async function to fetch the list of anime
  const getList = async (searchTerm) => {
    // If there is no search term, set the anime list to null and return
    if (!searchTerm) {
      setAnimeList(null);
      return;
    }
    // Make a GET request to the Jikan API with the search term
    const response = await axios.get(
      `https://api.jikan.moe/v4/anime?q=${searchTerm}&limit=16`
    );
    // Set the anime list state to the response data
    setAnimeList(response.data);
  };

  // Call getList once on component mount
  useEffect(() => {
    getList();
  }, []);

  // Render the Form and AnimeDisplay components with the anime list state
  return (
    <div className="App">
      <Header />
      <Form animesearch={getList} />
      <AnimeCard anime={animeList} />
    </div>
  );
}

export default App;
