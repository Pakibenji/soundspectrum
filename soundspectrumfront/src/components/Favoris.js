import React from "react";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";

const Favoris = () => {
  const favorites = JSON.parse(localStorage.getItem("favorites"));
  // fonction qui supprime la station des favoris
  const deleteFavorite = (station) => {
    const favoritesList = JSON.parse(localStorage.getItem("favorites"));
    const index = favoritesList.findIndex(
      (station) => station.id === favorites.id
    );
    favoritesList.splice(index, 1);
    localStorage.setItem("favorites", JSON.stringify(favoritesList));
    alert("Station supprimée des favoris");
  };
  return (
    <div className="favorites">
      {favorites &&
        favorites.map((station) => {
          return (
            <div className="station" key={station.id}>
              <div className="stationName">
                <div className="name">{station.name}</div>
              </div>
              <AudioPlayer
                className="player"
                src={station.urlResolved}
                showJumpControls={false}
                layout="stacked"
                customProgressBarSection={[]}
                customControlsSection={["MAIN_CONTROLS", "VOLUME_CONTROLS"]}
                autoPlayAfterSrcChange={false}
              />
              <div className="favorite-icon" onClick={deleteFavorite}>
                <i className="fa-solid fa-star fa-lg"></i>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default Favoris;
