import React from "react";
import firebase from './firebase.js';

class LeaderBoardItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <li>
        {this.props.name} has score {this.props.score}
      </li>
    );
  }
}

class Display extends React.Component{
    constructor(props){
        super(props);
        this.state = {
          leaderBoard : []
        };
    }

    componentDidMount(){
      const rsvpRef = firebase.database().ref('scores').orderByChild('score').limitToLast(5);
      let leaderBoard = [];
      rsvpRef.once('value').then((snapshot)=>{
          let c_arr=snapshot.val();
          for (let e in c_arr){
            leaderBoard.push(c_arr[e]);
          }

          leaderBoard.sort(function(a, b) {
              var keyA = a.score,
                  keyB = b.score;
              if(keyA < keyB) return 1;
              if(keyA > keyB) return -1;
              return 0;
          });

          this.setState({
            leaderBoard : leaderBoard
          });
      });
    }

    render(){
        console.log('Leaderboard render',this.state.leaderBoard);
        const leaderBoardItems = this.state.leaderBoard.map((leader) =>
        <LeaderBoardItem name={leader.name} score={leader.score} />
        );
        return(
            <div className=".body">
                <h1>Congratulations {this.props.userName} !!!!</h1>
                <h2>You Scored {this.props.score}</h2>
                <h2>Cuiz Leaderboard (Top 5 Scores)</h2>
                <ul>
                  {leaderBoardItems}
                </ul>
            </div>
        );
    }
}

export {Display}
