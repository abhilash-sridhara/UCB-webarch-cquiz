import React from "react";
import ReactDOM from "react-dom";
import {RenderTiles} from "./render_tiles.js"

class GameCtrl extends React.Component
{
    constructor(props)
    {
        super(props);
        this.username = this.props.username;
        this.pageNav = this.props.pageNav;
        this.state = {score:0, seq:1};
        this.updateClick = this.updateClick.bind(this);

    }

    updateClick(res){
        if(this.state.seq <= 20) {
            if(res==true){
                console.log('correct ans');
                this.setState((state)=>{return{score:state.score+1*(1+parseInt(state.seq/4)) , seq:state.seq+1}});
            }
            else{
                console.log('incorrect');
                this.setState((state)=>{return{score:state.score , seq:state.seq+1}});
            }
        } else {
        return <p>'Your score is' + {this.state.score}</p>;
        }
    }

    render(){
        console.log('your score '+this.state.score);
        //alert('your score is '+this.state.score);
        console.log('your seq '+this.state.seq);
        return(
            <div className="game-begin">
                Let's Play!
                <RenderTiles clickHandle = {this.updateClick} seq={this.state.seq}/>
            </div>

        )
    }
}

export{GameCtrl};