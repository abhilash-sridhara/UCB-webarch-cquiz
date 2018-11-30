import React from "react";
import ReactDOM from "react-dom";
// import Click from "./abhi.js"
// import ColourIt from "./alyssa.js"
//import TileGen from "./anu.js"
//import startTimer from './script.js'




// We will club the code of this with game_controller

class Square extends React.Component {
  constructor(props)
  {
      super(props);
      this.id = this.props.id;
  }

  render() {
    return (
      <button id={this.id} className="square" onClick={this.props.getClicked.bind(this,this.id)}>
        {/* TODO */}
      </button>
    );
  }
}



class RenderTiles extends React.Component
{
  constructor(props){
    super(props);
    console.log(props);
    this.seq = props.seq;
    this.getClicked = this.getClicked.bind(this);
    this.unq_id = Math.floor(Math.random() * 16);
    this.colorList = [ 
      [347,100,80],
      [300,90,35],
      [217,100,81]
      [267,73,40],
      [12,95,83],
      [204,59,51],
      [249,69,24],
      [343,71,85],
      [215,57,68],
      [249,40,52],
      [173,30,87],//light
      [145,46,81],//light
      [271,64,88], //light
      [146,78,59],
      [246,80,64],
      [0,63,92], //light
      [328,87,80], //light
      [176,73,61],
      [14,95,91],
      [266,94,85]
      ];

    this.colorListLight = [
      [173,30,87],
      [145,46,81],
      [0,63,92],
      [271,64,88],
      [14,95,91],
    ];

    this.colorListDark = [
      [347,100,80],
      [300,90,35],
      [217,100,81]
      [267,73,40],
      [12,95,83],
      [204,59,51],
      [249,69,24],
      [343,71,85],
      [215,57,68],
      [249,40,52],
      [146,78,59],
      [246,80,64],
      [328,87,80],
      [176,73,61],
      [14,95,91],
      [266,94,85]
    ];


  }
  shuffleArray(array) {
    let i = array.length - 1;
    for (; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  }
  colorTiles() {
    //console.log(this.colorListDark[this.seq -1]);
    console.log(this.seq);
    let newColor;
    this.colorListDark = this.colorListDark.filter(function (el) {
      return el != null;});
      this.colorListLight = this.colorListLight.filter(function (el) {
        return el != null;});
    //newColor = 'hsl('+String(this.colorList[this.seq-1][0])+','+String(this.colorList[this.seq-1][1])+'% ,'+String(this.colorList[this.seq-1][2])+'%)';
    
    if (this.seq < 15) {
    newColor = 'hsl('+String(this.colorListDark[this.seq-1][0])+','+String(this.colorListDark[this.seq-1][1])+'% ,'+String(this.colorListDark[this.seq-1][2])+'%)';
    }
    else {
    newColor = 'hsl('+String(this.colorListLight[this.seq-14][0])+','+String(this.colorListLight[this.seq-14][1])+'% ,'+String(this.colorListLight[this.seq-14][2])+'%)';
    }
    
    let tiles = document.getElementsByClassName("square");
    console.log(newColor);
    for (var i = 0; i < tiles.length; i++) {
      //console.log(i);
      tiles[i].style.backgroundColor = newColor;
      tiles[i].style.color = newColor;
      //tiles[i].innerHTML='ch';
      //console.log(tiles[i].value);
      }
  }
  changeSaturation(id) {

    let multiplier;
    let newColor;
  
    //figure out multipler from sequence
    if (this.seq < 5) {
      multiplier = 0.6;
    }
    else if (this.seq >= 5 && this.seq < 11) {
      multiplier = 0.7;
    }
    else if (this.seq > 10 && this.seq < 16) {
      multiplier = 0.75; 
    }
    else {
      multiplier = 0.8;
    }
  
    //new color based on base color and multipler 
    //newColor = 'hsl('+this.colorList[this.seq-1][0]+','+String(this.colorList[this.seq-1][1]*multiplier)+'% , '+String(this.colorList[this.seq-1][2])+'%)';
    
    if (this.seq < 15) {
    newColor = 'hsl('+this.colorListDark[this.seq-1][0]+','+String(this.colorListDark[this.seq-1][1]*multiplier)+'% , '+String(this.colorListDark[this.seq-1][2])+'%)';
    }  

    else {
    newColor = 'hsl('+this.colorListLight[this.seq-14][0]+','+String(this.colorListLight[this.seq-14][1]*multiplier)+'% , '+String(this.colorListLight[this.seq-14][2])+'%)';
    }

    console.log('unq col '+newColor + multiplier);
    document.getElementById(id).style.backgroundColor = newColor ;
    document.getElementById(id).style.color = newColor ;
  }
  
  
  componentDidMount(){
    this.colorList = this.shuffleArray(this.colorList).filter(function (el) {
      return el != null;});
    // this.colorListDark = this.shuffleArray(this.colorListDark).filter(function (el) {
    //   return el != null;});
    // this.colorListLight = this.shuffleArray(this.colorListLight).filter(function (el) {
    //   return el != null;});
    console.log(this.colorList);
    console.log('did mount unq'+this.unq_id);
    this.colorTiles();
    this.changeSaturation(this.unq_id);
  }

  componentDidUpdate(){
    this.colorTiles();
    this.unq_id = Math.floor(Math.random() * 16);
    console.log('did update unq'+this.unq_id);
    this.changeSaturation(this.unq_id);
  }
  getClicked(clickedId){
    console.log('correct tile '+this.unq_id);
    console.log(' you clicked on '+clickedId);
    this.seq+=1;
    if(clickedId==this.unq_id){
      this.props.clickHandle(true);
    }
    else{
      this.props.clickHandle(false);
    }
  }

  renderSquare(i) {
    return <Square id={i} getClicked={this.getClicked}/>;
  }
  render() {
    const status = 'Game on!';
    return (
      <div>
        <br/>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
          {this.renderSquare(3)}
        </div>
        <div className="board-row">
          {this.renderSquare(4)}
          {this.renderSquare(5)}
          {this.renderSquare(6)}
          {this.renderSquare(7)}
        </div>
        <div className="board-row">
          {this.renderSquare(8)}
          {this.renderSquare(9)}
          {this.renderSquare(10)}
          {this.renderSquare(11)}
        </div>
        <div className="board-row">
          {this.renderSquare(12)}
          {this.renderSquare(13)}
          {this.renderSquare(14)}
          {this.renderSquare(15)}
        </div>
      </div>
    );
  }

}


export{RenderTiles};
