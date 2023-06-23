import React, { useState } from "react";
import "./App.css";
import Cards from "./components/cards";
import data from "./data";
import Refresh from "./components/Refresh";
import Favouriteplaces from "./components/Favouriteplaces";
import Show from './components/Show';

function App() {
  const [favourite, setFavourite] = useState([]);
  const [refresh, setRefresh] = useState(false);
  const [Tours, setTour] = useState(data);
  const [favour, setFavour] = useState(false);
  const [choice , setChoice] = useState(false);

  function removeTour(id) {
    const newTours = Tours.filter((place) => place.id !== id);
    if (newTours.length === 0 && favourite.length === 0) {
      setRefresh(true);
    }
    else if(newTours.length === 0 && favourite.length > 0){
      setChoice(true);
    }
    setTour(newTours);
  }

  function addTofavourite(place) {
    if (!favour) {
      setFavour(true);
    }
    const newfavourite = favourite;
    newfavourite[newfavourite.length] = place;
    setFavourite(newfavourite);
  }

  return (
    <div className="container">
      <h1 className="title">Plan With Love</h1>
      <Cards
        Tours={Tours}
        removeTour={removeTour}
        addTofavourite={addTofavourite}
      />
      {refresh ? <Refresh /> : null}
      {choice ? <Show favourite={favourite} /> : null}
      <br />
      <hr />
      <div className="favourite">
        <Favouriteplaces
          favour={favour}
          favourite={favourite}
          removeTour={removeTour}
          addTofavourite={addTofavourite}
        />
      </div>
    </div>
  );
}

export default App;
