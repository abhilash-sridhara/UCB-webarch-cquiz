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
        if(res==true){
            this.setState((state)=>{return{score:state.score+1 , seq:state.seq+1}})
        }
        else{
            this.setState((state)=>{return{score:state.score , seq:state.seq+1}})
        }
        console.log('your score '+this.state.score);
        //alert('your score is '+this.state.score);
        console.log('your seq '+this.state.seq);
    }

    // This function should handle all the control statements for game flow
    startGame(){

    }

    render(){
        console.log('reload level');
        return(
            <div>
                Game begins now!!!!
                <RenderTiles clickHandle = {this.updateClick} seq={this.state.seq}/>
            </div>

        )
    }
}

export{GameCtrl};
