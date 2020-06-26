import React from 'react';
import '../css/wheel.css';

const Wheel= () =>{
  return (
    <div className="container">
      <div className="outer-circle">
        <span className="menu-btn">Menu</span>
        <span className="play-pause-btn">&#9199;</span>
        <span className="prev-btn">&#9198;</span>
        <span className="next-btn">&#9197;</span>
        
        <div className="inner-circle"></div>
      </div>
    </div>
  );
}

export default Wheel;
