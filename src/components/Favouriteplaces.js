import React from 'react';
import Card from "./card";

export default function Favouriteplaces({ favour, favourite, removeTour, addTofavourite }) {
    const added = true;
  const Favouriteplaces = favourite.map((place) => {
    return (
      <Card
        key={place.id}
        place={place}
        removeTour={removeTour}
        addTofavourite={addTofavourite}
        added={added}
      />
    );
  });

  return (   
    <>
      {favour ? Favouriteplaces : <h2>No Favourites Added.</h2>}
    </>
  );
}