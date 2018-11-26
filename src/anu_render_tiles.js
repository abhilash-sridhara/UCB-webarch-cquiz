// WORKING CODE. DO NOT touch
// MOVE THIS TO render_tiles.js if render_tiles.js gets corrupted

import React from "react";
import ReactDOM from "react-dom";
import Click from "./abhi.js"
import ColourIt from "./alyssa.js"
//import TileGen from "./anu.js"


// We will club the code of this with game_controller
class Square extends React.Component {
  constructor(props)
  {
      super(props);
      this.id = this.props.id;
  }

  render() {
    return (
      <button className="square" onClick={() => alert(this.id)}>
        {/* TODO */}
      </button>
    );
  }
}

class RenderTiles extends React.Component
{
  renderSquare(i) {
    return <Square id={i}/>;
  }
  render() {
    const status = 'Game begins now!';
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
