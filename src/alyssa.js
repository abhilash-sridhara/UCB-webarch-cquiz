
import React from "react";
import ReactDOM from "react-dom";

//list of 20 colors 
var colorList = [ 
[347,100,80],
[217,100,81]
[267,73,40],
[12,95,83],
[204,59,51],
[44,73,96],
[249,69,24],
[343,71,85],
[215,57,68],
[249,40,52],
[355,28,90],
[200,11,83],
[173,30,87],
[200,30,83],
[34,94,99],
[30,40,98],
[194,64,95],
[145,46,81],
[271,64,88],
[146,78,59],
]; 

// Called from game_controller
class ColourIt extends React.Component {
  constructor(props)
  {
      super(props);
      this.id = this.props.id;
      this.getClicked = this.getClicked.bind(this);
  }

  // shuffle colorlist in the beginning of the game 
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

  //change Saturation 
  changeSaturation(id, seq) {

  var multiplier;
  var newColor;

  //figure out multipler from sequence
  if (seq < 5) {
    multiplier = 0.8;
  }
  else if (seq >= 5 && seq < 11) {
    multiplier = 0.85;
  }
  else if (seq > 15 && seq < 21) {
    multiplier = 0.9;
  }
  else {
    multiplier = 0.95;
  }

  //new color based on base color and multipler 
  newColor = 'hsl(colorList[seq-1][0],(colorList[seq-1][1])*multiplier + %,(colorList[seq-1][2] + %))';

  document.getElementById(id).style.color = newColor;
}

  
  colorTiles() {
    var newColor =  'hsl(colorList[seq-1][0],(colorList[seq-1][1] + %),(colorList[seq-1][2] + %)';
    document.getElementsByClassName("board-row").color = newColor;
  }

  render() {
    return (<diV></diV>
    );
  }
}



export {ColourIt}