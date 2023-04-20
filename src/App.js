import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Header from "./compnents/Header";
import AnimeCard from "./compnents/AnimeCard";
import SearchBar from "./compnents/SearchBar";

function App() {
  const [animeList, setAnimeList] = useState(null);

  const getList = async () => {
    const response = await axios.get(
      `https://api.jikan.moe/v4/anime?q=naruto&limit=10`
    );
    // console.log(response.data);
    setAnimeList(response.data);
  };

  useEffect(() => {
    getList();
  }, []);

  return (
    <div className="App">
      <Header />
      <SearchBar setAnimeList={setAnimeList} />
    </div>
  );
}

export default App;
