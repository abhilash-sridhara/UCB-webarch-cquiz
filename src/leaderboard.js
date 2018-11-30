import React from "react";

class Display extends React.Component{
    constructor(props){
        super(props);
        
    }
    render(){
        return(
            <div>
                <p>Congradulations {this.props.userName}</p>
                <p> You Scored {this.props.score}</p>
            </div>
        )
    }
}

export {Display}