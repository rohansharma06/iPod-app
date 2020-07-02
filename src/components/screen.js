import React from 'react';

const Screen= (props) =>{
  const { menu, song, allmusic, games, setting } = props;
  //console.log("screen",props);
  //console.log('Screen menu:',menu);
  return (
    <div className="screen-container" id="screen-container">
      { menu ?
        <div className="menu">
          <span className="heading">Menu</span>
          <ul className="menu-list" id="menu-list">
            <li id="song" className = "" >Music</li>
            <li id="games" className = "" >Games</li>
            <li id="setting" className = "" >Setting</li>
            <li id="developer" className = "" >Developer</li>
          </ul>
       </div>
       : null
      }
        
    </div>
  );
}

export default Screen;
