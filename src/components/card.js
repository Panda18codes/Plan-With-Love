import React from 'react';
import { useState } from 'react';
import './Card.css';

function Card({place,removeTour,addTofavourite,added}){
    //console.log(place.id);
    // const [desc, setDesc] = useState(place.info.substring(0,200));
    // const [descDisplay,setdescDisplay] = useState(false); 
    // function setChange(){
    //     if(!descDisplay){
    //         setDesc(place.info);
    //         setdescDisplay(true); 
    //     }
    //     else{
    //         setDesc(place.info.substring(0, 200));
    //         setdescDisplay(false);
    //     }
    // }
    const info = place.info;
    const [readmore,setReadmore]= useState(false);
    const desc = readmore ? info : info.substring(0, 200);
    function setSpan(){
        setReadmore(!readmore);
    }
    return (
      <div className="Card">
        <h2>{place.name}</h2>
        <img src={place.image} alt={place.info} className="image" />
        <div>{place.price}</div>
        <div>
          {desc}
          <span onClick={setSpan}>
            {readmore ? "...See Less" : "...Read More"}
          </span>
        </div>
        <br/>
        {added ? null :
          <div className='Choice'>
          <button onClick={()=>{
            removeTour(place.id);
            addTofavourite(place);
          }}>
            Add To Favourites
          </button>
          <button
            onClick={() => {
              removeTour(place.id);
            }}
            >
            Not Intersted...!
          </button>
          </div>
          }
      </div>
    );
}

export default Card;

