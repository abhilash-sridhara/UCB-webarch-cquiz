import React from "react";
import ReactDOM from "react-dom";
import {RenderTiles} from "./render_tiles.js"
var intl;
var timer;
let  startTimer = (duration, display,obj) => {
    let minutes;
    let seconds;
    timer = duration;
    var ob = obj;
    intl = setInterval(function () {
        minutes = parseInt(timer / 60, 10)
        seconds = parseInt(timer % 60, 10);
  
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;
        if(ob.gameState){
            display.textContent =  '' + minutes + ":" + seconds ;

            if (--timer < 0) {
                timer = 0;
                display.textContent = ''
            }
        }
        else{display.textContent = ''}
        
        
    }, 1000);
  }
let stopTimer =() =>{
    clearTimeout(intl);
    document.querySelector('#timer-area').textContent = '';
}

class GameCtrl extends React.Component
{
    constructor(props)
    {
        super(props);
        this.username = this.props.username;
        this.getScore = this.props.getScore;
        this.state = {score:0, seq:1};
        this.updateClick = this.updateClick.bind(this);
        this.gameState = true;

    }

   

    updateClick(res){
        console.log('gc updateclick seq '+this.state.seq)
        if(this.state.seq < 18) {
            if(res==true){
                console.log('correct ans');
                this.setState((state)=>{return{score:state.score+1*(1+Math.floor(state.seq/4)) , seq:state.seq+1}});
            }
            else{
                console.log('incorrect');
                this.setState((state)=>{return{score:state.score , seq:state.seq+1}});
            }
        } else { 
            this.gameState = false;
            //console.log('scoring timer'+String(timer));
            this.getScore(this.state.score*(Math.log10(timer+1)).toFixed(2));
            stopTimer();
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
    gtScore(){
        console.log('gt score '+this.state.score);
        return this.state.score;
    }
    componentDidMount(){
        var twoMinutes = 60 * 2,
        display = document.querySelector('#timer-area');      
      startTimer(twoMinutes, display,this); 
      setTimeout(function(obj){
        if(this.gameState){
            obj.getScore(obj.state.score);
        }
        
            
      }, 1000*60*2-1,this);     

    }
}

export{GameCtrl};