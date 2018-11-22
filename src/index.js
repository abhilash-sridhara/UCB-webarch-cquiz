import React from "react";
import ReactDOM from "react-dom";
import {GameCtrl} from "./game_controller.js"
import {RenderTiles} from "./render_tiles.js"
import {WelcomePage} from "./welcome_page.js"
class App extends React.Component {
  // This component contains the entirety of your application
  constructor(props){
    super(props);
    this.state = {pageId : this.props.pageId};

  }
  pageNav(pageid){
   // console.log('App '+pageId);
    this.setState((state) => ({pageId :pageid, userName : state.username}));
    //console.log(this.state.navPage);
    // this.child.pageNav(pageId);
    // this.child3.pageNav(pageId);
  }
  getUser(username){
      this.setState((state) =>({userName:username, pageId: 2}))
  }
  render() {
    if(this.state.pageId==1){
        return (
                  
            <WelcomePage pageNav = {this.getUser.bind(this)} />
           
          );
    }
    else if(this.state.pageId == 2){
        return(
            <GameCtrl pageNav = {this.pageNav.bind(this)} username={this.state.username}/>
        );
    }
    else if(this.state.navPage == 3){
        return(
            <div>
                Summary page work in progress
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
  document.getElementById('root'));
