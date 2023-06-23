import React from "react";

export default function Refresh(){
    function refresh(){
        document.location.reload();
    }
    return(
        <div>
            <h2>No Tours Left</h2>
            <button onClick={refresh}>Refresh</button>
        </div>
    );
}