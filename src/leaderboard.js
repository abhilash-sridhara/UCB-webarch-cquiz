import React from "react";

class Display extends React.Component{
    constructor(props){
        super(props);

    }
    render(){
        return(
            <div className=".body">
                <h1>Congratulations {this.props.userName} !!!!</h1>
                <h2> You Scored {this.props.score}</h2>
            </div>
        )
    }
}

export {Display}
