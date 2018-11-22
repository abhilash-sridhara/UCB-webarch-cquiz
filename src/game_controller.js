import React from "react";
import ReactDOM from "react-dom";

class GameCtrl extends React.Component
{
    constructor(props)
    {
        super(props);
        this.username = this.props.username;
        this.pageNav = this.props.pageNav;
    }

    // This function should handle all the control statements for game flow
    startGame(){

    }
    render(){
        return(
            <div>
                Game begins now!!!!
            </div>
        )
    }
}

export{GameCtrl};