import React from 'react';
import Wheel from './Wheel';
import Screen from './screen';
import ZingTouch from 'zingtouch';

class App extends React.Component {

  //---- initializing the state
  constructor(){
    super();

    this.state = {
      menu : false,
      song : false,
      games : false,
      setting : false,
      developer : false,
      submenu : false,
      allsong : false,
      album : false,
      artist : false
    }
  }

  //---- manage how to make rotake function
  handleRotate = (props) => {
    // console.log('roate');
    const target = document.getElementById('outer-circle');
    const zt = new ZingTouch.Region(target);
    let angle = 0;
    //console.log("rotae",menu);
    zt.bind(target, 'rotate', (e) => {
      
      angle = angle + e.detail.distanceFromLast;
      //console.log(angle);

      
      //--- if menu and submenu id not selected then dont do rotation
      if(!this.state.menu && !this.state.submenu){
        return;
      }

      //---- select songs
      if(((angle <= 30 && angle >= 0)||(angle <= 0 && angle > -30)) && (this.state.menu && !this.state.submenu)){

          console.log('song selected');

          //---- selecting the all list element  
          let song = document.getElementById('song');
          let developer = document.getElementById('developer');
          let games = document.getElementById('games');
          let setting = document.getElementById('setting');
          
          //---- changing css style (select the particular element)
          song.classList='select';
          games.classList='unselect';
          setting.classList='unselect';
          developer.classList='unselect';
          
          //---- chaging the state
          this.setState({
            song : true,
            games : false,
            setting : false,
            developer : false,
            submenu : false
          })
      }

      //---- select games
      if(((angle <= 60 && angle>=30)||(angle <= -30 && angle > -60)) && (this.state.menu && !this.state.submenu)){
        console.log('games selected');
        //---- selecting the all list element
        let song = document.getElementById('song');
        let developer = document.getElementById('developer');
        let games = document.getElementById('games');
        let setting = document.getElementById('setting');
        
        //---- changing css style (select the particular element)
        song.classList='unselect';
        games.classList='select';
        setting.classList='unselect';
        developer.classList='unselect';
        
        //---- chaging the state
        this.setState({
          song : false,
          games : true,
          setting : false,
          developer : false,
          submenu : false
        })
      }

      //---- select setting
      if(((angle <= 90 && angle>=60)||(angle <= -60 && angle > -90)) && (this.state.menu && !this.state.submenu)){
        console.log('setting selected');
        //---- selecting the all list element
        let song = document.getElementById('song');
        let developer = document.getElementById('developer');
        let games = document.getElementById('games');
        let setting = document.getElementById('setting');
        
        //---- changing css style (select the particular element)
        song.classList='unselect';
        games.classList='unselect';
        setting.classList='select';
        developer.classList='unselect';
        
        //---- chaging the state
        this.setState({
          song : false,
          games : false,
          setting : true,
          developer : false,
          submenu : false
        })
      }

      //---- select developer
      if(((angle <= 120 && angle>=90)||(angle <= -90 && angle > -120)) && (this.state.menu && !this.state.submenu)){
        console.log('developer selected');
         //---- selecting the all list element
        let song = document.getElementById('song');
        let developer = document.getElementById('developer');
        let games = document.getElementById('games');
        let setting = document.getElementById('setting');
        
        //---- changing css style (select the particular element)
        song.classList='unselect';
        games.classList='unselect';
        setting.classList='unselect';
        developer.classList='select';
        
        //---- chaging the state
        this.setState({
          song : false,
          games : false,
          setting : false,
          developer : true,
          submenu : false
        })
      }

      //----- handling sub-menu rotation
      //console.log("show",this.state.submenu,menu);
      if(this.state.submenu){
       
        if(((angle <= 30 && angle >= 0)||(angle <= 0 && angle > -30))){
          console.log('all songs selected');
          //---- selecting the all list element
          let allsong = document.getElementById('allsong');
          let album = document.getElementById('album');
          let artist = document.getElementById('artist');
          
          //---- changing css style (select the particular element)
          allsong.classList='select';
          album.classList='unselect';
          artist.classList='unselect';
          
          //---- chaging the state
          this.setState({
            allsong : true,
            album : false,
            artist : false
          })
        }
        //---- select album
        if(((angle <= 60 && angle>=30)||(angle <= -30 && angle > -60))){
          console.log('album selected');
          //---- selecting the all list element
          let allsong = document.getElementById('allsong');
          let album = document.getElementById('album');
          let artist = document.getElementById('artist');
          
          //---- changing css style (select the particular element)
          allsong.classList='unselect';
          album.classList='select';
          artist.classList='unselect';
          
          //---- chaging the state
          this.setState({
            allsong : false,
            album : true,
            artist : false
          })
        }
  
        //---- artist
        if(((angle <= 90 && angle>=60)||(angle <= -60 && angle > -90))){
          console.log('artist selected');
          //---- selecting the all list element
          let allsong = document.getElementById('allsong');
          let album = document.getElementById('album');
          let artist = document.getElementById('artist');
          
          //---- changing css style (select the particular element)
          allsong.classList='unselect';
          album.classList='unselect';
          artist.classList='select';
          
          //---- chaging the state
          this.setState({
            allsong : false,
            album : false,
            artist : true
          })
        }
      }

    });
  }

  //---- handle click on menu button
  handleMenuClick = (props) => {
    console.log("handleMenu Click");
    //console.log("menu before",this.state.menu);
    const { menu } = this.state;
    this.setState({
      menu : !menu,
      submenu: false
    })
    let display = document.getElementById('screen-container');
    display.style.backgroundImage="url('https://i.pinimg.com/originals/6a/96/b2/6a96b2d2771c2c80139ef67545cccf6b.jpg')";
  }

  //---- to hide menu when select the particular list item
  handlechangestate = () =>{
    const { menu } = this.state;
    this.setState({
      menu : !menu
    })
  }

  //---- handle state of submenu 
  handleSubMenuState = () => {
    this.setState({
      submenu: false
    })
  }


  //---- handle click on inner circle (selecting list items)
  handleInnerCirlceClick = (props) =>{
    
    //--- stop propagation to outer div
    props.stopPropagation(onclick);
    
    const { menu, song, games, setting, developer, submenu, allsong, album, artist } = this.state;
    console.log(this.state);
    let display = document.getElementById('screen-container');

    //----- if MENU is open
    if(menu){
      if(song){
        // let list=document.getElementById('menu-list');
        // list.innerHTML=`<li>Artist</li>`;
        display.style.backgroundImage="url('https://media.idownloadblog.com/wp-content/uploads/2018/03/Apple-Music-icon-002.jpg')";
        this.handlechangestate();
        this.setState({
          submenu : !submenu
        })
      }
      else if(games){
        //console.log('here');
        display.style.backgroundImage="url('data:image/png;base64,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')";
        this.handlechangestate();
      }
      else if(setting){
        //console.log('here');
        display.style.backgroundImage="url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANgAAADpCAMAAABx2AnXAAAAwFBMVEX///8AAAAREiTa2tsODyL7+/vq6ur29vbe3t4AABrz8/Pn5+fv7+9cXFyOjo5qamqrq6s5OTnAwMBhYWF2dnZUVFTLy8sAABcXFxfFxcXS0tKUlJSenp62trYbGxt/f38jIyNJSUlMTEwsLCxCQkKJiYlycnIAABiampqkpKQ2NjYvLy8QEBAeHh4AABKUlJofIC96e4QpKTaMjZRBQUxtbnYAAB8vLzyDhItMTVdbW2Y6PEdiY2sZGiypqa9xcXjF+zWWAAALSUlEQVR4nO2diXqiOhSAJ4ALLnWru9ba6rS2VgT0gor6/m91QbZsLJ0qYL/895u5LQbNMcnJ2cL8+cNgMBgMBoPBYDAYDAaDwWAwGAwGg8FgMBgMBoPBYDAYDMZVqRRzxLVSJYWOXBe+ugSvZeziovc0G6fSnavRBBa9EnKxfrnYSqlL16FxkQG8wLOxb18Dg9R6dQVeHSGq/qWBcwk00+vWz/lypXgpOFea4FcItvTEWM6Ho9H7sOVdAHetPkAI9bQ79wNKYYKN0u7dDxiECfY37d79gMcwwUDavft3wuUCr8W0O/hvlF/D5QJ3phhLjpVRfIqUC4BFun39BoUqePpovY+b7zHEMhmWC/nB+L32txT93qkyjScPyVO2PZl+UL+rwz5fLPLNh2pQi2xr/wA9uICGozJa0hvl0+t2NDVaj9/xVguqYJk2sYpkfz8ou1W+TREs27q/jnf3hYx4WJBz9iXhnn6XCdrddsx24DXr+j73iXS3ENgQW47ZN68Qi54Pbld4hhtmWnM4QIrhIaxdB5KrGtYwKzx43e2FrxvoG7iLiFUt3oAhkxYPqWYSf+1EKYRGnLWYGXJebz+imvqTNtubs42vE+ZRTf25GDFpM8Ei/jDkvabZNu0vQBt0J7Kx1/YpgZ79jPyLr+qijQlfe2Q9RjCGNt1vCZbt8Cn/AssVQ4fDdmU1u47mHKBEplMqPaR9Vu1FIp4duW547IZpsC+QJk1csEBfzIUIEWRzoRGCgaiIGhGxyuY+XSYEi1g0eeIGIuyTDf7i/WyEt8eVTWa9l9yohuUhQo2qCiFXhiskCuVxC+5qmJrDgh6zST2bStEjP/V7G6IY4UDd5+geHDJEKQS6LvCuN0mydz/hPVoyeG9+TrJvPwM2lWq0UDBiLEe7N4lQ7ndowadCsehfRvbqT6LjJSTAnQ0nc2DFzJakSVEyFf3TxLvegHsOaogDU1igSdxMWPXOUBCR68KH/YIrAb5XzxbOK6Umno54TLL/gbihNVyNu7HPqfM7LW/50a7OKDm/YdIyUPEmUQ257O21X/bvoaVGGDXKxyRPj9of34ZwgjIdmgQBPKcgBkEOmkpTdz0VZ/7Fnn0poiQHJQtGRwlZI7N2tVVtT+FLS7vdd+TKhHdJulw4l2akyxlGFnK0oWV6Fy47WcyqHJcMpFqih+LiKnq1A9VxsUm4nxaz+dxfmRnYoallHAj2gnEq6231Uqp/Yo2GlzHqOOZJZO7i9hC1DiRL2zDszECVp9/Y63uXx8+ZkCsXT4k7ARl0fkHFD3BcIzeapB/mqDSChUGgmRL50FdTIFcquHWVvRBZUKYUD8wb7WzUc/RNZ6RRm9c7g1FssSzJipVSvjioz2tDV0Z3o8hG3UPEttWezB8mrS/aS09fS0wQx3wmEhUPH41J4tEpXE1DVMeeU5nrT0KmqRu1tof8C/+Iy86YtEsWPGBDbE/NjaeBbZ0vIPdojmGDiBJcNFIvCWkggratR5qpMA6oG/WTSaW8fV997t/vfETCGiXAgAoIKhWothOh3/PWmnRD365RnXTKj+bgN4ItO3pFLGZZ2O9ZM42qymDojvLsxoLglJ6Jbs7C6r7GRHNTXWAqz42OVNtwrGruqiJ6PerVwXOp4DlcM1Mkw5fPkDqsAEysb6xoml592htfHVx/RLlOhCdGdDOwMh88zD/ot9wEtMAhupYLW5ZkbI2YBASNRKYjUm8ewx5C069TskF0dAFflTcCzuPF2W4Qo5ISgAqeii4JJaIhJyyWx1EIH+E8qWhxEqpThxZNvACgX11JswGnsAjt4aK+mGDnzBLyqKEi8siCURtoEZHJckjZv9ZdJVFEXPOEzCtIGcStLvE97Rmk30qDfv0BWrAPsO4rQsr3mr0PAbIX40YnoLno59FwZYhvHL6hmVB+E5o7ccN/kN7z93OkSIK2IXqRvYSKPfw5EnvfzNP6jypDilbJeTM4kfgplA+KHa2AKm58DYeW7NC24A550+2AjdrYU6QACeGpuDKs1OlJTO9ECNWRvSZocj92QBAWbOlpnBK0IdJNaUhPtca3PGM7RnfO2CNWQu7zs1+eevik35dDPu5m2xk/AyiR9aIuWFXbzOuiG/QKCkohgbxbRa7ICNVnXKObOIDq7sWusxakHRAX6VaRVUpkJu6SJoNbjvfiGv5BJgxy1PZWhWOU87xxH95DScrYKsQN9gSN2Ad0R/tW2qNF9i7urCfvdL4TdyiD1BD0UberJKAlIeKZHrQajw76nvQbvaDB7JYGPllhHff0GmWsbd/RL9ehh2tcs3R5W0+zToasn+PcRzmUb+/tJd+doRZAeMUxt05RlPjFI+bHx4lEU/LvH5YiqMD7Ik0PeX5EIuG38js8cJQ6RRw8VtMeji8GVA75jihPJfE2zl5S2TJYe0fumgX4e+g9+L4pJvAHvo7y3o0RpxCuCJzViwoPwNtfA+48roywRzfx/oAuE8tvIl92+DJDHvmA7kVE5gYOHyIB/eRONbbifiwiF+Z05f62W602bFyAB76U+5Mr8VieIsZKvhKoBg90cHPIF/BK386xHNrshVJNm9z5AtQintL9xAHq/QdZlvTsIEpi5XB4hmROru8K5g5Q0hEOQQkyiMTK4Uj76gFVagP8QTFh5tcL8W4uDXvQk6uOoNVFzIZ9e8YUm3NKlVWI+UCeh3Pekc8VyvUq+JtQuvZPrHI+nJBtIUCwNM6uBz7WLJgQzUZM2wtp1HJXgmpTwgh+O3dX+IQrmlI5xUircogk2Fm0N+lny44sdFwpUzm1/g8zMSzherGqvQciO5KlUWhKnn6NQ3CxTW4CnxlzUrtpnDuNLranEhK4KMCmxSVGQpT7JQHkIzaGnTEtpmFTbcHqIHZExlT/03RKnt24U9sONuXrePTbomblEQr9qSdl/Pcvp3ZU4iIZXEQ5wMyir4XnVPbt8Q15ml2WKCxqmLWORIrRqJP1KM/H5MyiK4MkyzFrvNLJwDGcfwYKs2XjlOW1gHy0bD/h99t4qvFunhQQE8/Hz8IZy2viutXJBTiTwgkR3/U/5kFnYZoZ1V8oF4PBYDAYDAaDwWAwGAwGg8FgMBgMBoPBYDAYDAaDwWAwMgX/S/nev2FxR/zhfilMsHvDEUxw/nDQ/zlOFDnB/838SRD9XzOOLZhwEDhBOdo/a+5r3f2+qx1cUY47QVD22r1IZgsmGobYVburLve2AupRXK3exBWon06n8wisABBEALQBAAd9c1+CCWt1tZZlSQeydNYlTZLkjbTjdwBs83uVHygbnt/1N7yyOSQpmMiJ5lIQrD/mKrD+slaD1V/OvmYiWv+J3H/WTwJn/QALxq1Ubrs9d89bAwD9P5UD5/N+tRkU9a2kdIBxah6AkudFUUhULh3oItfVNEVYC0d9uxHXgrjWV0dhfTweBcXsy1bWV9JaVYF62Eqaqul7eSfAgonGXt9LxlbeiF1dGK26hr4zJ+N/vCztxuAw7qxWSnmwTnYeioa8P0nyXjVUWTJk47TT9a2xULm1av4kyyfd0DR1J+8NYydvOHOabU/n3V6EBROEk7xWBUWRhLVhbPectN+Jo7Pa2fAaf27K0ljedHb8KlHBBGUsnHZWzyX5dNxL0l6X9N1JPxzUva7KnDTccqfD9rQzXzkZ0kbeSqpqbBHBOHG7FpX5WVTU88oAhrrWNGEn6W+r/e4/yVitzCm5BedEV5glmbjWVjtRO2prQdNERTu+bRThcNQURVlzirIRrQEyx+NNOG723EZUFG2DTEVTMnMtvpmNuqK1ZrvWihW7b4K1fM1L1hVrKScqF6IkOFeNuBfsX0XRbsTZyuNyHRXst8EEuzd+rWD/A8es043LqGUdAAAAAElFTkSuQmCC')";
        this.handlechangestate();
      }
      else if(developer){
        //console.log('here');
        display.style.backgroundImage="url('https://avatars3.githubusercontent.com/u/46551210?s=400&v=4')";
        this.handlechangestate();
      }
    }

    //---- if SUB-MENU is open
    if(submenu){
      if(allsong){
        display.style.backgroundImage="url('https://lh3.googleusercontent.com/GMpK_XSbZyr8pM-XDrYJ7IzS1MkXOab9JWMEasyWYX5CFjHTngoja9eYqwwPhmN5mzY=w412-h220-rw')";
        this.handleSubMenuState();
      }
      if(album){
        display.style.backgroundImage="url('https://community.spotify.com/t5/image/serverpage/image-id/80164iEB9345FE9C8A7BA1/image-size/large?v=1.0&px=999')";
        this.handleSubMenuState();
      }
      if(artist){
        display.style.backgroundImage="url('https://resize.indiatvnews.com/en/resize/newbucket/1200_-/2020/02/pjimage-1582246037.jpg')";
        this.handleSubMenuState();
      }
    }
  
  }

  render(){
    const { menu, submenu } = this.state;
    //console.log("app Menu",menu);
    return (
      <div className="App">
        < Screen menu ={ menu} submenu= { submenu } />
        < Wheel 
          onMenuClick = {this.handleMenuClick}
          onhandleRotate = {this.handleRotate}
          handleInnerCirlceClick = {this.handleInnerCirlceClick}
        />
      </div>
    );
  }
}

export default App;
