import React from "react";
import firebase from './firebase.js';

class LeaderBoardItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
    // 
      <tr>
        <td>{this.props.name}</td>
        <td>{this.props.score}</td>
      </tr>
    // </table>
      // <li>
      //   {this.props.name}: {this.props.score}
      // </li>
   
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
            <div id="congrats">
                <div>
                <img src="./images/trophy.jpg" alt="Doc face" height="400px" className="center"/>
                </div>
                <div id="congratsh1">Congrats, {this.props.userName}!</div>
                <br></br>
                <div id="congratsh1">Your Score: {Math.round(this.props.score)}</div>
                <br></br>
                <br></br>
                <div id="congratsScore">Top 5 Scores</div>
                <br></br>
                <table>
                  <thead>
                  <tr>
                    <th>Username</th>
                    <th>Score</th>
                </tr>
                  </thead>
                
                <tbody>
                {leaderBoardItems}
                </tbody>                  
                </table>
            </div>
        );
    }
}

export {Display}
