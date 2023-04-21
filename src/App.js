import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";
import Header from "./compnents/Header";
import AnimeCard from "./compnents/AnimeCard";
import Form from "./compnents/Form";

function App() {
  const [animeList, setAnimeList] = useState(null);

  const getList = async (searchTerm) => {
    if (!searchTerm) {
      setAnimeList(null);
      return;
    }
    const response = await axios.get(
      `https://api.jikan.moe/v4/anime?q=${searchTerm}&limit=10`
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
      <Form animesearch={getList} />
      <AnimeCard anime={animeList} />
      {/* <SearchBar setAnimeList={setAnimeList} /> */}
    </div>
  );
}

export default App;
