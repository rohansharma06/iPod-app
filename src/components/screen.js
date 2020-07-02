import React from 'react';

const Screen= (props) =>{
  const { menu, submenu } = props;
  //console.log("screen",props);
  //console.log('Screen menu:',menu);
  return (
    <div className="screen-container" id="screen-container">
      <a href="https://github.com/rohansharma06?tab=repositories">
        <img id="git" src="https://image.flaticon.com/icons/svg/733/733609.svg"/>
      </a>
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
      {
        !menu && submenu ?
        <div className="menu">
          <span className="heading">Music</span>
          <ul className="menu-list" id="menu-list">
            <li id="allsong" className = "" >All Song</li>
            <li id="album" className = "" >Album</li>
            <li id="artist" className = "" >Artist</li>
          </ul>
        </div>
        :null
      }
        
    </div>
  );
}

export default Screen;
