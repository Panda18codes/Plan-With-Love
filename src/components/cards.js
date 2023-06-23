import React from 'react';
import Card from './card';
import './Cards.css';

export default function Cards({ Tours, removeTour ,addTofavourite}) {
  const places = Tours.map((place) => {
    return <Card key={place.id} place={place} removeTour={removeTour} addTofavourite={addTofavourite} />;
  });

  return (
    <div>
      <div className="Cards">{places}</div> 
    </div>
  );
}

