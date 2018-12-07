import React from "react";
import ReactDOM from "react-dom";

class InputForm extends React.Component{
    constructor(props){
        super(props);
        this.state={username:this.props.userName};
        this.handleSubmit =this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.getUser = this.props.getUser;
    }
    handleChange(event) {
        //console.log(event);
        this.setState({username: event.target.value});
    }

    handleSubmit(event) {
    event.preventDefault();
    this.getUser(this.state.username);
    }
    render(){
        return(
            <div className="form">
            <form onSubmit={this.handleSubmit}>
                    <input type="text" name="userName" value={this.state.username} onChange={this.handleChange} required /><br/><br/>
                     <input type="submit" value="Play Now !"/>
                </form><br/>
            <div>
                <img src="./images/RubixCube.gif" alt="Doc face"  height="200px" width="auto"/>
            </div>

            </div>
        )
    }
}

class WelcomePage extends React.Component
{
    constructor(props){
        super(props);
        this.getUser = this.props.getUser;
        //console.log(props);
    }

    render(){

        return(

            <div className='.body'>
                <div>
                    <article>
                    <h1>
                        Welcome to Cuiz
                    </h1>

                </article>
                <section>
                    <div>
                        <h2>
                            Instructions
                        </h2>
                    </div>
                    <div>
                        <p>
                        Cuiz is a game that tests your observation skills and hand to eye co-ordination. You will be presented with <strong> 16 </strong> tiles.
                        One of the tile has a different shade than all others. Click on the tlies to submit your answer. There are a total of <strong>18 rounds </strong>
                         and <strong>4 </strong> levels of difficulty. Selecting the correct tile gets harder as the levels increase but so does the score.
                         </p>
                         <p> Once you begin,
                        you have <strong>2 minutes </strong> before the timer runs out and the game is over.
                        </p>

                        <p>
                            Remember, the score is calculated based on your correct answers, the difficulty level and time. It is up to you to come up with
                            the best strategy to get a high-score worthy of the leaderboard. So what are you waiting for!!
                            enter your <strong>Username</strong> and click "Play now" to start the game.
                        </p>

                        <p className ="tips">
                            <strong>Tip: The Username you enter appears in the leaderboard. So, please use caution while picking your Username</strong>
                        </p>
                        <br/>
                        <InputForm userName='' getUser={this.getUser}/>
                    </div>
                </section>
                </div>
                <link rel="stylesheet" href="../css/style.css" type="text/css" />
                </div>
        );
    }
}

export{WelcomePage};
