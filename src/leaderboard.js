import React from "react";
import firebase from './firebase.js';

class Display extends React.Component{
    constructor(props){
        super(props);
        this.leaderBoard = []
    }
    render(){
        const rsvpRef = firebase.database().ref('scores').orderByChild('score').limitToLast(5);
        rsvpRef.once('value').then((snapshot)=>{
            let c_arr=snapshot.val();
            for (let e in c_arr){
                this.leaderBoard.push([e,c_arr[e]]);
            }
            this.leaderBoard.sort(function(a, b) {
                return a.score > b.score;
            });  
            this.leaderBoard = this.leaderBoard.sort();          
            //console.log('c_arr',c_arr)
        })
        console.log(this.leaderBoard);
        return(
            <div className=".body">
                <h1>Congratulations {this.props.userName} !!!!</h1>
                <h2> You Scored {this.props.score}</h2>
            </div>
        )
    }
}

export {Display}
