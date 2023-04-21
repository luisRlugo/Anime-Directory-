import { useState } from "react";

export default function AnimeCard({ anime }) {
  const [selectedAnime, setSelectedAnime] = useState(null);

  // Open the modal with the clicked anime data
  const openModal = (animeData) => {
    setSelectedAnime(animeData);
  };

  // Close the modal
  const closeModal = () => {
    setSelectedAnime(null);
  };

  // Loaded component when anime data is fetched
  const loaded = () => {
    return (
      <div className="animeGrid">
        {/* Map through the anime data and display it */}
        {anime.data.map((animeData, index) => (
          <div key={index} className="animeCard">
            <h2>{animeData.title}</h2>
            <img
              className="animeCardImage"
              src={animeData.images.jpg.large_image_url}
              alt={animeData.title}
              // Call openModal function with clicked anime data
              onClick={() => openModal(animeData)}
            />
          </div>
        ))}
        {/* If a selected anime is clicked, show the modal */}
        {selectedAnime && (
          <div className="modal">
            <div className="modalContent">
              <span className="close" onClick={closeModal}>
                &times;
              </span>
              <h2>{selectedAnime.title}</h2>
              <p>{selectedAnime.synopsis}</p>
              <p>Episodes: {selectedAnime.episodes}</p>
              <p>Score: {selectedAnime.score}</p>
              <p>Rating: {selectedAnime.rating}</p>
              <p>Rank: {selectedAnime.rank}</p>
              <p>Popularity: {selectedAnime.popularity}</p>

              <p>
                More Details:{" "}
                <a href={selectedAnime.url} target="_blank" rel="noreferrer">
                  {selectedAnime.url}
                </a>
              </p>
            </div>
          </div>
        )}
      </div>
    );
  };

  // Loading component while fetching anime data
  const loading = () => {
    return <h1>Anime will Display below</h1>;
  };

  // If anime data exists, show the loaded component, otherwise show the loading component
  return anime ? loaded() : loading();
}
