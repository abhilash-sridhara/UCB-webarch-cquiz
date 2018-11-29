import React from "react";
import ReactDOM from "react-dom";
import Click from "./abhi.js"
import ColourIt from "./alyssa.js"
//import TileGen from "./anu.js"


// We will club the code of this with game_controller
function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10)
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds + ' Minutes';

        if (--timer < 0) {
            timer = 0;
            display.textContent ="Time Over!"
        }
    }, 1000);
}

class Square extends React.Component {
  constructor(props)
  {
      super(props);
      this.id = this.props.id;
  }

  render() {
    return (
      <button className="square" onClick={this.props.getClicked.bind(this,this.id)}>
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
  }
  componentDidMount(){
    console.log('did mount unq'+this.unq_id);
  }
  componentDidUpdate(){
    this.unq_id = Math.floor(Math.random() * 16);
    console.log('did update unq'+this.unq_id);
  }
  getClicked(clickedId){
    console.log('correct tile '+this.unq_id);
    console.log(' you clicked on '+clickedId);
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
    var twoMinutes = 60 * 2,
      display = document.querySelector('#timer-area');
    startTimer(twoMinutes, display);
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
