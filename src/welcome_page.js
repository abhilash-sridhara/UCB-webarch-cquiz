import React from "react";
import ReactDOM from "react-dom";

class WelcomePage extends React.Component
{
    constructor(props){
        super(props);
        this.pageNav = this.props.pageNav;
        console.log(props);
    }

    render(){
        return(
            <div className='.body'>
                <div>
                    <article>
                    <h1>
                        Welcome to cquiz
                    </h1>    

                </article>
                <section>
                    <div>
                        <h2>
                            Instructions
                        </h2>
                    </div>
                    <br/>
                    <div>
                        <p>
                        Cquiz is a game that tests your observation skills and hand to eye co-ordination. You will be presented with n number of tiles. 
                        One of the tile has a different shade than all others. You click on the tlies to submit your answer. There are a total of 25 rounds
                        with 4 levels of difficulty. Selecting the correct tile getts harder as the levels increase but so does the score. Once you begin, 
                        you have 2 minutes before the timer runs out and the game is over. Try to beat other players from the leaderboard.
                        </p>

                        <p>
                            Remember, the score is calculated based on your correct answers, the difficulty level and time. It is up to you to come up with 
                            the best strategy to get a high-score worthy of the leaderboard. So what are you waiting for!!
                            enter your <strong>Username</strong> and click play to start the game.
                        </p>

                        <p>
                            <strong>Tip: The Username you enter appears in the leaderboard. So, please use caution while picking your Username</strong>
                        </p>
                        <br/>
                        <button onClick={this.pageNav.bind(this,2)}>PLay Game</button>
                    </div>
                </section>
                </div>
                <link rel="stylesheet" href="../css/style.css" type="text/css" />
                </div>
        );
    }
}

export{WelcomePage};