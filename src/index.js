import React from "react";
import ReactDOM from "react-dom";
import {GameCtrl} from "./game_controller.js"
import {WelcomePage} from "./welcome_page.js"
import {Display} from "./leaderboard.js"
import firebase from './firebase.js'

// let  timeOut =() =>{
//     let display = document.querySelector('#timer-area');
//     setInterval(function () {
//         display.textContent = '';
//         }, 10);
// }

class Timer extends React.Component{
    constructor(props){
        super(props);
        this.state = {disp_state:this.props.disp_state}
        this.disp_change.bind(this);
    }
    disp_change(disp_st){
        this.setState({disp_state:disp_st})
    }
    render(){
        if(this.state.disp_state ==true){
            return(<div>
                Timer On
            </div>
            );
        }
        return(<div></div>);
    }

}
class App extends React.Component {
  // This component contains the entirety of your application
  constructor(props){
    super(props);
    this.state = {pageId : this.props.pageId};
    this.pageNav = this.pageNav.bind(this);
    this.getUser = this.getUser.bind(this);
    this.userScore = 0;
  }
  pageNav(pageid){
   // console.log('App '+pageId);
    this.setState((state) => ({pageId :pageid, userName : state.username}));
    //console.log(this.state.navPage);
    // this.child.pageNav(pageId);
    // this.child3.pageNav(pageId);
  }
  getUser(username){
      this.setState((state) =>({userName:username, pageId: 2}));
      //console.log(username);
  }
  getScore(scr){
    const rsvpRef = firebase.database().ref('scores');
    rsvpRef.orderByKey().equalTo(this.state.userName).once('value').then((snapshot)=>{
        let c_arr=snapshot.val();
        console.log('c_arr',c_arr)
        if(c_arr){
            console.log(c_arr[this.state.userName]);
            this.userScore = c_arr[this.state.userName].score;
        }

    }).then(()=>{
        if(scr > this.userScore || this.userScore == 0){
            rsvpRef.child(this.state.userName).set({'name':this.state.userName,'score':scr});
        }
    })
      this.setState((state) =>{return{userName:state.userName, pageId:3, score:scr }});
  }
  render() {
    if(this.state.pageId==1){
        return (
            <WelcomePage getUser = {this.getUser.bind(this)} />

          );
    }
    else if(this.state.pageId == 2){
        //console.log(this.state.userName)
        return(
            <GameCtrl getScore = {this.getScore.bind(this)} username={this.state.username}/>
        );
    }
    else if(this.state.pageId == 3){
        return(
            <div>
            <Display userName = {this.state.userName} score = {this.state.score}/>
            {/* To do */}
            </div>
        );
    }
    return(
        <div>
            Sorry something went wrong !!!
        </div>
    );


 }
}

// Render the App component, which contains instances of your Add and Subtract Components
ReactDOM.render(
  <App pageId={1} />,
  document.getElementById('game-area'));

  ReactDOM.render(
    <Timer disp_state = {false}></Timer>,
    document.getElementById('timer-area'));
