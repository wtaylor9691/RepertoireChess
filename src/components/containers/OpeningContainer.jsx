import React from 'react'; 
import { useState } from 'react'; 
import Chessboard from 'chessboardjsx'; 



function OpeningContainer(props) {
    //fetches for the openings to the backend (may) go here in the container 
    return (
        <div>
            <div>Opening Box</div>
            <p id="demo" onclick="myFunction()">click here </p>
        </div>
    );
}

export default OpeningContainer; 