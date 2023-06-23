import React from "react";
import './Show.css';

export default function Refresh({favourite}) {
    const show = favourite.map((place)=>{
        return(
            <li key={place.id}>{place.name}</li>
        );
    })
  return (
    <div className="Show">
        <h2>Your Choices</h2>
        {show}
    </div>
  );
}
