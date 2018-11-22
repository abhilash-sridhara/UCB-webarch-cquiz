import React from "react";
import ReactDOM from "react-dom";
import {comm} from './script.js';
import {blog_com} from './load-comments.js';

class HomePage extends React.Component {
  // implement this class
  constructor(props)
  {
    super(props);
    this.state = {blogPostNum : this.props.postNo};
    this.pageNav = this.props.pageNav;
  }  
  render() {
    return (
      <div className='.body'>
      <div>
        <article>
        <h1>
            Welcome to Info 253 
        </h1>    

    </article>
    <section>
        <div>
            <h2>
                Select a page to navigate to
            </h2>
        </div>
        <br/>
        <div>
            <a href ='#' onClick={this.pageNav.bind(this,'Blog1')}>
                8 Experiments in Motivation
            </a> <br />
            <a href ='#' onClick={this.pageNav.bind(this,'Blog2')}>
                Develop an awesome sense of direction
            </a> <br />
            <a href ='#' onClick={this.pageNav.bind(this,'Blog3')}>
                Mindful shift of focus
            </a> <br />
            <a href ='#' onClick={this.pageNav.bind(this,'Blog4')}>
                Training to Be a Good Writer
            </a> <br /> 
            <a href ='#' onClick={this.pageNav.bind(this,"Blog5")}>
                What productivity systems won't solve
            </a>                              
        </div>
    </section>
    </div>
    <link rel="stylesheet" href="../css/style.css" type="text/css" />
    </div>
      
    );
  }
}

class AboutUsPage extends React.Component {
  // implement this class
  constructor(props){
      super(props);
  }
  render() {
    return (
      <div className='.body'>
        <article className="about-us">
        <section>
            <h1>
                Greetings
            </h1>
            <p>
                This section was supposed to provide a brief introduction about the webpage collection created for Assignment 1.
                I'm not sure what to fill in here so leaving this as sample text
            </p>
            <img src="../images/giphy.webp" alt="Gif_says_yes"/>
        </section>
        </article>
      </div>
    );
  }
}

class ContactUsPage extends React.Component {
    componentDidMount(){
        comm();
    }
  // implement this class
  render() {
    return (
      <div id='contact_div'>
        <article >
        <form className="message-form" id="contact_form">
           <table className="table">
            <tbody>
               <tr>
                   <td className="td">
                       Name
                   </td>
                   <td>
                        <input id="txt_name" type="text"  placeholder="name" />
                   </td>
               </tr>
               <tr>
                <td>
                    &nbsp;
                </td>                 
                </tr>
               <tr>
                   <td className="td">
                       Subject
                   </td>
                   <td>
                       <input type="text" id="txt_subj"  placeholder="subject" />
                   </td>
               </tr>
            </tbody>
           </table> <br/> <br/>
           <textarea className="msg-text" id="txt_msg"  placeholder="Enter yor message here" >
           </textarea> <br/> <br/>
           <input type="submit" />
        </form> <br/>
        <br />
        <div id="notify_div" className="message">

        </div>
        <script src="../js/script.js" type="text/javascript"></script>    
    </article>
    
    </div>
    );
  }
}

class BlogPostPage extends React.Component {
  // implement this class
  constructor(props)
  {
    super(props);
    this.state = {blogNum: this.props.blogNo};
    //console.log(this.props.blogNo);
  } 
  componentDidMount(){
     blog_com(this.state.blogNum);
  } 
  render() {
    //console.log('Inside Bpg');    
    //console.log(this.state.blogNum);
    if (this.state.blogNum == 1)
    {
      return (
        <div>
            <article className="main-article">
        <section>
            <h2>
                8 Experiments in Motivation
            </h2>
            <h1>
                By Leo Babauta
            </h1>
        </section>
        <section>
            <p>
                I was talking to a 19-year-old recently and he has been struggling with motivation.
            </p>
            <p>
                His problem goes like this: he gets excited about starting a project or plan, and is very motivated
                at
                the
                start...
                but after a few days, that feeling dies down, and he starts procrastinating.
            </p>
            <p>
                He really does want to do the project or follow through on the plan, but the motivation inevitably
                drops away.
            </p>
            <p>
                I told him this is something he should devote some effort to figuring out, because <strong>very few
                    problems
                    are as important to solve as this one.</strong>
            </p>
            <p>
                I suggested <strong>experiments in motivation.</strong> Every person is motivated differently (and
                in
                fact,
                that can shift), so finding methods that motivate you personally is a matter of experimenting.
            </p>
            <p>
                How does it work? You try <strong>each experiment for a week, and note the results.</strong> After
                a
                couple
                months of doing this, you know more about your personal motivation style than ever before.
            </p>
            <ol>
                <li>
                    <p><strong>Un-ignorable Consequences.</strong> Set a deadline for the task(s) you want to
                        complete,
                        and a
                        consequence you won't be able to ignore. It's best to share this deadline and consequence
                        with
                        an
                        accountability partner or publicly. Example: I post on Facebook I'm going to write 1,000
                        words
                        in my
                        book every day this week, or I can't watch TV for a week. (That only works if you really
                        care
                        about the
                        consequence.) Another example: if I don't write my first chapter by Saturday at midnight, I
                        have to
                        donate $200 to Donald Trump (or whichever candidate you don't like) and post about it
                        publicly.
                        The
                        idea is that the consequence should be embarrassing and something you can't just ignore.</p>
                </li>
                <li>
                    <p><strong>Completion Compulsion.</strong> Many people, myself included, have a strong desire
                        to
                        complete a
                        list. For example, if you've watched 15 out of 20 episodes of a show, you might really want
                        to
                        finish
                        watching the show. This is "completion compulsion," and I think everyone experiences it
                        sometime —
                        especially if finishing the list seems doable. So the method is this: make a list of 10
                        small
                        actions
                        (10 minutes or less to complete) that you want to finish this week on a certain project, or
                        5
                        small
                        actions you want to finish each day, and make it your goal to finish the list. You could
                        combine this
                        with the un-ignorable consequences method (if I don't finish my list each day, I can't have
                        wine).</p>
                </li>
                <li>
                    <p><strong>A Powerful "Why".</strong> Understand the deeper reasons you want to complete this
                        goal
                        or
                        accomplish this task. It should be a reason that really resonates with you, that you deeply
                        want to
                        achieve. Now write your "Why" in a phrase (like, "compassion for myself" or "to help others
                        in
                        pain"),
                        and post it somewhere visible, so you won't forget it.</p>
                </li>
                <li>
                    <p><strong>Get Excited Daily.</strong> It's easy to be excited about a project or goal when you
                        first
                        start, but that dies out. So renew it! Each day, start by setting a goal for the day that
                        you
                        can
                        accomplish and that you care about. Find inspiration, visualize your accomplishment, find
                        some
                        music
                        that motivates you, find an inspirational quote or video … anything to get you excited to
                        accomplish
                        your goal for the day!</p>
                </li>
                <li>
                    <p><strong>Focus on Being True to Your Word.</strong> One of the most important things in life
                        is
                        to be
                        trusted, to have people believe that when you say you're going to do something, you'll do
                        it.
                        If people
                        don't trust in that, you won't have good relationships, romantically, with friends, or at
                        work.
                        Imagine
                        hiring someone and not knowing if they're going to show up, or do the work if they do show
                        up.
                        So you
                        should make it one of your priorities in life to live the motto, "Be True to Your Word."
                        That
                        starts
                        with small things: tell someone you're going to do a small task that will only take 10-30
                        minutes. Then
                        do it. Repeat this several times a day, building other people's trust in you and your own
                        trust
                        in
                        yourself. Post the motto somewhere you won't forget it.</p>
                </li>
                <li>
                    <p><strong>Find a Group.</strong> Humans are social animals, and you can use that to your
                        advantage. Create
                        an accountability group of friends or colleagues who want to achieve a goal or finish a
                        project. Agree
                        to set daily or weekly targets, and check in with each other daily or weekly (form a
                        Facebook
                        group or
                        subreddit, perhaps). Set rewards and/or embarrassing consequences for hitting or missing
                        the
                        targets.
                        Have weekly "winners" for those who did the best at their targets. Encourage each other and
                        help each
                        other when someone is faltering.</p>
                </li>
                <li>
                    <p><strong>Focus on a Sense of Achievement.</strong> With every task you complete, pause at the
                        end
                        of it
                        to savor your feeling of accomplishment. This is a great feeling! Share your victory with
                        others. Savor
                        the feeling of building trust in yourself. As you start a task, think about how good you'll
                        feel when
                        you accomplish it.</p>
                </li>
                <li>
                    <p><strong>Small Starts, Quick Rewards.</strong> Create a system where you have to do short
                        tasks
                        (just 10
                        minutes) and you get a small reward at the end of it. For example, I just need to write for
                        10
                        minutes,
                        then I get to have my first coffee of the day. Or I clear my email inbox for 10 minutes,
                        and
                        then I get
                        to check my favorite sites for 5 minutes. Don't let yourself have the reward unless you do
                        the
                        task!
                        The smaller the task, the better, so you won't delay starting.</p>
                </li>
            </ol>
            <p>
                OK, these are eight experiments, but you might think of others, like the Seinfeld Method or the
                Pomodoro
                Technique. All that matters is that you try the experiments, and note the results. At the end of
                each
                weekly
                experiment, write a brief review of how it went. Rate your productivity on a scale of 10. Then try
                another
                experiment.
            </p>
            <p>
                At the end of these, you'll have tried a bunch of great methods, and figured out what helps you
                most.
                You might
                combine methods, or use different ones at different times. And maybe after all of this, you'll have
                a
                trust in
                yourself that's so strong, you don't need any methods!
            </p>
        </section>
        <section >
            <div>
                <h3>
                   Readers Comments
                </h3>
            </div>
            <div id="msg_sec">

            </div>
        </section>
        <section>
            <br/>
            <h1>
                    Comment 
            </h1>
            <br/>
            <form id='msg_form' className="message-form">                
                <input type="text" id='txt_name' required placeholder="Name"></input> <br/> &nbsp; <br/>
                <textarea className ="msg-text" id="txt_message" required placeholder="Enter yor message here"></textarea> <br/> &nbsp; <br/>
                <input type="submit" name="submit" value="SUBMIT"></input>
            </form>
        </section>
        </article>
    </div>
    );  
    }
    else if(this.state.blogNum == 2)
    {
      return (
        <div>
            <article className="main-article">
        <section>
            <h1>
                How to Develop an Awesome Sense of Direction
            </h1>
            <h2>
                By Leo Babauta
            </h2>
        </section>
        <section>
            <p>
                But I've also found out that many other people don't have this good sense of direction,
                and it can make things difficult for them when they travel to a new place.
            </p>
            <p>
                It's strange, but I've discovered I have a better sense of direction than many people -- when I travel,
                it doesn't take that long for me to
                figure out the lay of the land, and soon I'm walking around almost like a local.
            </p>
            <p>
                I used to think maybe it was something you were born with or not, but I'm now convinced that it's a set
                of skills you can learn. For me, it always seemed instinctive, until a friend asked me what i do when I
                get to a new place. I've done a lot of analyzing of
                what I do since then, and I've broken the skill into a series of steps.
            </p>
            <p>
                I hope this helps those who feel lost.
            </p>
            <p>
                Here's what I recommend, whenever you get to a new city or area you're not totally familiar with:
            </p>
            <ol>
                <li>
                    <p><strong>First, look at a map for a few minutes.</strong> I will open Google Maps and look at the
                        city and
                        its major landmarks and features. Is there a river, lake, harbor, sea shore? Is there a big
                        central park,
                        or several big parks? Where is the downtown area? What are the major neighborhoods? Major
                        roads? Famous
                        buildings, like the Sydney Opera house? What's to the north or south?</p>
                </li>
                <li>
                    <p><strong>Walk around a lot.</strong> When I first get to a city, I like to walk around a lot.
                        This is the
                        best way to get to know a city, to wander and start to develop a sense of where things are and
                        how the city
                        looks. But read on to understand how you need to walk around -- it's not just aimless.</p>
                </li>
                <li>
                    <p><strong>Orient to some landmarks.</strong> I like to find a major building, mountain, hill,
                        bridge, that I
                        can keep in view as I walk around. That way when I turn left, I can say, "Oh, the Empire State
                        Building is
                        now over there." This helps me have a point of reference, so I always know where I am relative
                        to that
                        point. Sometimes I have two or more landmarks.</p>
                </li>
                <li>
                    <p><strong>Form a mental map.</strong> This is the key. When you look at a map for a few minutes,
                        then walk
                        around, what you're doing is forming a mental map of the city. At first, it's real vague, but
                        as you walk,
                        you're adding to the map. See how the streets line up in reality compared to how you thought
                        they line up
                        after you first looked at the map.</p>
                </li>
                <li>
                    <p><strong>Look at a map a lot in the beginning, but don't rely on it completely.</strong> As you
                        form your
                        mental map, get in the habit of looking at the paper map in your hand, or the map on your
                        phone, so you can
                        fill in your mental map... but then put away the map and walk without it. Then look at the map
                        again after
                        a little while to fill in your mental map some more. It's a process of learning the map by
                        looking at it
                        every now and then, but not relying on it. If you just follow the map all the time, you don't
                        ever rely on
                        your mental map.</p>
                </li>
                <li>
                    <p><strong>Keep your orientation as you walk around.</strong> When you walk to a destination, or
                        even wander
                        aimlessly, it's easy to forget where you are or what direction you're facing. This is not
                        useful. Instead,
                        if you make a left turn, think, "Oh, now I'm going west," and also remember where your landmark
                        is in
                        relation to where you are. For example, if I start out heading straight for the Eiffel Tower,
                        but then turn
                        left, that means the Eiffel Tower is now on my right. Your mental map should rotate a bit too
                        so you're now
                        facing south instead of west (for example). In this way, you should always know which way to go
                        to get home
                        (to your apartment or hotel).</p>
                </li>
                <li>
                    <p><strong>Don't just follow someone else or rely on taxis -- figure it out yourself.</strong> One
                        of the
                        biggest mistakes a lot of people make is to just follow their spouse or a guide or let taxis
                        take them
                        places. You will never figure out the lay of the land this way. Instead, figure out how to get
                        places
                        yourself. Yes, you'll make mistakes, but you'll eventually get it. Get lost, then check a map,
                        and figure
                        out how to get where you want to go. It's the only way.</p>
                </li>
                <li>
                    <p><strong>Continually work on your mental map, and test it.</strong> As you walk around,
                        continually update
                        the mental map. Look at the map again, close it, and test out how well you know the city. It's
                        a constant
                        process.</p>
                </li>
                <li>
                    <p><strong>Keep an eye on the names of streets.</strong> I like to look at street names as I walk
                        around. Then
                        I'll look at the street names on a map. Eventually, I get to know which streets head east and
                        west, and
                        which go north and south, and what order they're in.</p>
                </li>
                <li>
                    <p><strong>Mark the major streets in your mental map.</strong> Every neighborhood has its major
                        streets, with
                        shopping and restaurants and the like. Get to know where those are, and put them prominently on
                        your mental
                        map. You should get to the point where you can point the direction of these major streets, and
                        even know
                        generally how many blocks to get to them. Same with major parks and marketplaces and water
                        features like
                        rivers. And metro stops.
                        That might seem like a lot, but after awhile, this all becomes second nature. Navigate. Use but
                        don't rely
                        on a map. Walk around a lot, but know where you are when you walk around. Form a mental map and
                        make it
                        better and better as you walk around.</p>
                </li>
            </ol>
            <p>
                I find that people can develop this with practice, and it's also something to teach your kids as you
                travel. Let them navigate even if it takes a bit longer -- it's a great skill for them to learn.
                If you have a spouse, take turns navigating so one person doesn't have an underdeveloped sense of
                direction.
            </p>
            <p>
                In my experience, this is a key skill for traveling, and it makes every trip so
                much more fun when you can really figure out a city and start to understand it like a local does. Happy
                wandering, my friends.
            </p>
        </section>
        <section>
            <div>
                <h3>
                    Readers Comments
                </h3>
            </div>
            <div id="msg_sec">

            </div>
        </section>
        <section>
            <br />
            <h1>
                Comment
            </h1>
            <br />
            <form id='msg_form' className="message-form">
                <input type="text" id='txt_name' required placeholder="Name" /> <br /> &nbsp; <br />
                <textarea className="msg-text" id="txt_message" required placeholder="Enter yor message here"></textarea>
                <br /> &nbsp; <br />
                <input type="submit" name="submit" value="SUBMIT" />
            </form>
        </section>
    </article>
        </div>
      );

    }
    else if (this.state.blogNum==3){
        return(
            <div>
                <article className="main-article">
        <section>
            <h1>
                A mindful shift of focus
            </h1>
            <h2>
                By Leo Babauta
            </h2>
        </section>
        <section>
            <p>Throughout the day, we get frustrated, irritated, angry.</p>
            <p>
                We are frustrated in traffic, when a loved one doesn't behave the way we like, when someone tells us
                we're
                wrong, when technology doesn't
                work the way we want, when dinner is ruined, among many other daily stresses.
            </p>
            <p>These frustrations can build up into unhappiness, relationship problems, work problems, built up stress,
                blowing your top at someone when you lose your cool. Not always helpful stuff!
            </p>
            <p>
                I'm going to suggest a mindful shift in focus to deal with frustrations.
            </p>
            <p>
                It's a mindfulness practice, and I highly recommend it. We'll start by talking about where frustration
                comes from, then how to mindfully shift.
            </p>
            <h3>
                Mindfulness of Frustration
            </h3>
            <p>
                The next time you experience frustration, just notice it. Just be mindful that you're unhappy with
                something or someone, that you're feeling frustration in your body somehow.
            </p>
            <p>
                The next time you experience frustration, just notice it. Just be mindful that you're unhappy
                with something or someone, that you're feeling frustration in your body somehow.
            </p>
            <p>
                Now notice what it is in this moment that you wish were different. What is missing from this moment
                that is
                frustrating you?
                <strong>Frustration stems from what you don't have.</strong>
            </p>
            <p>
                What do I mean by this? There's something you don't have right now, that you wish you had, and that
                lack of
                what you want
                is frustrating you. A few examples:
            </p>
            <ul>
                <li>
                    My child isn't behaving the way I want her to... what I don't have is "ideal" behavior from her.
                    (Actually,
                    it's my ideal, not hers.)
                </li>
                <li>
                    My computer keeps crashing, and I'm frustrated... what I don't have is a computer that behaves
                    ideally.
                </li>
                <li>
                    People are saying things online that irritate me... what I don't have is a bunch of people who
                    agree
                    with me or
                    behave in the way I want.
                </li>
                <li>
                    Traffic backed up and stressing me out... what I don't have is a stress-free, peaceful drive home.</li>
                <li>
                    My spouse criticized me... what I don't have is someone who thinks I'm an awesome husband right
                    now, or
                    their
                    praise.
                </li>
            </ul>
            <p>
                Those are just examples, but in all cases, there's something that's missing that I want. Usually it's
                an
                ideal.
            </p>
            <p>
                To start with, just be mindful that you're frustrated, try to experience the feeling in your body, and
                then
                notice what it is you're
                missing that's frustrating you.
            </p>
            <h3>
                Mindfulness of Your Story
            </h3>
            <p>
                When we're missing something we want, and we're frustrated, irritated, angry... we often spin the story
                around in our heads for awhile.
                "It's so irritating when he acts this way," or "Why can't she just be more..."
            </p>
            <p>
                We get caught up in this story, stuck on it, attached to it. We wish things were different, wish other
                people would behave differently,
                wish people could see that we're right.
            </p>
            <p>
                It's easy to get caught up. It's not so easy to notice that we're caught up, when it happens. But if
                you
                can notice it, just notice that
                you're telling yourself a story about this situation.
                It's a story about how you wish things were different, how things aren't how you want them to be.
            </p>
            <p>
                Sit and watch yourself get caught up in this story. Sit and stay with the feelings it produces.
            </p>
            <p>Then see if you can notice that the story isn't so solid. It's not so real. It's more of a dream that
                you're
                in.
                Can things lighten up if you notice the dreamlike nature of this story?
            </p>
            <h3>
                Mindfulness of What Is Already Here
            </h3>
            <p>
                If we're focusing on what we don't have, and it's frustrating us... then the opposite just might help
                us.
            </p>
            <p>
                The antidote to frustration is appreciating what's already here, in this moment.
            </p>
            <p>
                That might not seem true when frustration arises, because the truth is, we just want things to be our
                way.
                We just
                want other people to act the way we think they should act, or want life to go the way we want it to go.
            </p>
            <p>
                Unfortunately, that is usually not going to be the case. Sometimes we can force people to act the way
                we
                want, if we
                have power over them, but that will create a bad relationship with them, and in the end, neither person
                will be
                happy.
            </p>
            <p>
                What I've found to work is focusing on what I can appreciate about this moment. Let's take the examples
                from above:
            </p>
            <ul>
                <li>I'm frustrated by my child's behavior... I can breathe, and appreciate things about this moment: my
                    child is
                    actually a wonderful person, who might not behave perfectly all the time (who does?), who is alive!
                    And
                    in my
                    life! And I love her deeply.
                </li>
                <li>My computer keeps crashing... I can breathe, and appreciate the fact that I have a computer at all,
                    that all my
                    needs are met, that I have people in my life who love me. I can appreciate the break from the
                    computer
                    and
                    stretch, notice the awesome things around me.
                </li>
                <li>People say irritating things online... I can breathe, and appreciate: I get to read amazing things
                    online! I'm
                    alive! People are diverse and interesting and messy, and I love humanity for that precious fact.
                </li>
                <li>Traffic is backed up... I can breathe, and appreciate the fact that I can listen to some beautiful
                    music in the
                    car, or that I have some transition time between work and home when I can reflect on life, or that
                    I
                    have a
                    home to come back to, or that I'm driving past some beautiful scenery.
                </li>
                <li>My spouse criticized me... I can breathe, and appreciate: she's a great spouse, and a person with a
                    different
                    way of doing things, and I'm happy to have her in my life. And maybe she's frustrated herself, and
                    could use a
                    hug.
                </li>
            </ul>
            <p>
                This doesn't mean we should only "think positive thoughts"... quite the contrary, noticing our negative
                thoughts and
                staying present with them is important. We can't avoid the frustration, but we can be mindful of it,
                and
                this
                mindful shift to appreciation of what is can be helpful.
            </p>
            <h3>
                Frustration in the Midst of Injustice
            </h3>
            <p>
                I should note that none of this means we should accept abuse or injustice as "OK." I know that there
                are
                incredibly
                frustrating things about the world today, and that violence, protests, anger, and strife are all around
                us.
            </p>
            <p>
                This mindful shift I'm suggesting isn't a solution to all of that. It isn't a suggestion that you
                should
                just be
                happy with your lot, or accept the world as it is without wanting change.
            </p>
            <p>
                No, I think if there is abuse or injustice, we should compassionately try to correct these tragedies.
                But
                learning
                to deal with our frustrations, in the midst of all this, can actually help the situation. If we can't
                deal
                with our
                frustrations, then we're increasingly likely to act in anger and violence, and that isn't useful.
            </p>
            <p>
                There's another way: recognize the injustice, be mindful of your frustrations, appreciate life in the
                present moment
                to calm your frustrations... then compassionately engage with everyone else to work on righting the
                injustice. Have
                a love-driven dialogue with everyone else, rather than fear-based or anger-driven interactions. Stand
                up to
                abuse,
                but that doesn't mean throw a brick in anger.
            </p>
            <p>
                I don't have the answers, and my heart goes out to all who are grieving, afraid, hurt, feeling
                helpless,
                fed up,
                frustrated or angry. My only hope is that in the middle of all this sorrow, we can appreciate the gift
                of
                life that
                we've been given, and find love for our fellow human beings despite all their flaws and messiness.
            </p>
        </section>
        <section >
            <div>
                <h3>
                   Readers Comments
                </h3>
            </div>
            <div id="msg_sec">

            </div>
        </section>
        <section>
            <br/>
            <h1>
                    Comment 
            </h1>
            <br/>
            <form id='msg_form' className="message-form">
                <input type="text" id='txt_name' required placeholder="Name" /> <br/> &nbsp; <br/>
                <textarea className ="msg-text" id="txt_message" required placeholder="Enter yor message here"></textarea> <br/> &nbsp; <br/>
                <input type="submit" name="submit" value="SUBMIT" />
            </form>
        </section>
    </article>
            </div>
        );
    }
    else if (this.state.blogNum==4){
        return(
            <div>
                <article className="main-article">
        <section>
            <div>
                <h2>
                    Training to be a Good Writer
                </h2>
            </div>
            <div>
                <h1>
                    By Leo Babauta
                </h1>
            </div>
        </section>
        <section>
            <p>
                I'm not going to claim to be the world's greatest writer, but I do think I'm reasonably competent. 
                I've been training for 25 years, and I make a living as a writer.
            </p>
            <p>
                For those who are just starting out as writers, I'd like to share my training.
                I didn't wake up and suddenly know how to write -- I've been training for most of my life.
            </p>
            <p>
                A short background on my writing career: I started out as a sportswriter, as a senior in high school, and eventually became a full-time reporter and then editor for my local paper on Guam. I went on to do freelance writing for magazines and other publications, worked for awhile as a bill writer for lawmakers and a speechwriter for the Guam governor. Eventually I started my own blog while doing freelance blogging for about 5 different blogs. 
                Finally, I've written my blog for almost 10 years now, and have written numerous books and courses.
            </p>
            <p>
                Here are the most important aspects of my training, in no particular order:
            </p>
            <ul>
                <li>
                    <p><strong>Write every day.</strong> I write pretty much every single day. Not just once or twice a week, but
                        every day. In various forms: for my blog, for my Sea Change Program, or for a new book or course I might be
                        creating. This is perhaps the most important thing I've done in these 25 years, because constant practice
                        has smoothed out the rough edges a bit, and made the difficult obstacles a lot less scary. I recommend
                        doing a daily or every-other-day blog.
                    </p>
                </li>
                <li>
                    <p><strong>Learn to overcome the resistance.</strong> Every writer faces the resistance that keeps them from
                        writing, the procrastination urge that pushes them toward distraction and busywork. I'm not immune, but
                        I've learned to face the resistance instead of running from it. I've learned not to be so scared of it.
                        I've learned to just get started without thinking too much about it. If resistance is stopping you from
                        writing every day, face it down and don't back away.
                    </p>
                </li>
                <li>
                    <p><strong>See writing as a mindfulness practice.</strong> I see writing as a form of meditation, where I can
                        let everything else fall away for a few moments and just stay with this one activity. It means I need to
                        get my mind into the writing space, notice when the urge to go to distraction comes up, and not just
                        automatically follow the urge. I can look within myself and let feelings flow out through the written word,
                        or see the truths within me and try to channel those onto the page.
                    </p>
                </li>
                <li>
                    <p><strong>Do timed writing sessions.</strong> Just as you might set a timer for meditation, it's beautifully
                        helpful to set a timer for writing sessions. For example, you might do a 10-minute session, just letting
                        the words flow and trying to stay mindful during that 10 minutes. Know it's a limited time allows you to
                        let go of some of your fears and just be present with the writing.
                    </p>
                </li>
                <li>
                    <p><strong>Learn to deal with the fears.</strong> All writers grapple with fears -- fears of failure and not
                        being good enough, fear of discomfort and uncertainty and going into places that scare us. Some let the
                        fears stop them from starting, or keep them away from the writing, or running to distraction. But I've
                        found it useful to learn to stay with the fears, and write anyway. Yes, you can be very uncomfortable and
                        filled with uncertainty, and still write. You can sit with the fear for a minute, and then start writing.
                        These fears are scary, but they're not so bad when you allow yourself to face them.
                    </p>
                </li>
                <li>
                    <p><strong>Care about the craft.</strong> A writer crafts words, and so should care about them. That means
                        trying to get good at spelling and grammar, the basics of writing. That doesn't mean you'll never have
                        typos, but it does mean you'll constantly try to get better at the basics. You wouldn't be a carpenter
                        without learning how to hammer and saw, would you? When you're done writing, run it through a spell check
                        and try to learn the words you missed. Look up words often in a dictionary. Let a friend proofread your
                        work and try not to make the same mistakes over and over again. Pick up the AP or Chicago style manual and
                        learn some of the more common styles, and try to be consistent.
                    </p>
                </li>
                <li>
                    <p><strong>But get over perfectionism.</strong> That said, don't let your lack of knowledge of the basics of
                        writing stop you. Just write. You'll learn as you go, with constant practice and care. In the meantime, you
                        want to let go of any ideals you might be holding for yourself, ideals that might be holding you back. Dive
                        in, and just do it. Publish your first or second drafts, without needing it to be perfect. Typos aren't
                        such a big deal.
                    </p>
                </li>
                <li>
                    <p><strong>Learn to type.</strong> This isn't required, of course, but knowing how to touch-type is a good
                        skill for a writer. It doesn't take long to master -- there are programs online that will teach you the
                        basics and drill it into you, and within a month you'll be not so horrible. After a year, you'll be a
                        master. It helps you to get the words out of your head faster if you can type at a decent rate.
                    </p>
                </li>
                <li>
                    <p><strong>Learn to write on deadline.</strong> One of the most valuable skills I learned as a newspaper
                        reporter was how to write on deadline. Every day, we had to submit one or more articles (sometimes five or
                        six of them!), and we had an editor breathing down our necks, trying to meet her own submissions deadlines.
                        There's pressure, but what you learn is that you can get the article done on time, if you focus. You learn
                        not to worry about perfection, not to let the fears get in the way, and just to get the words out. And how
                        to revise quickly. If you don't work for a newspaper, set a deadline for yourself, tell it to someone else,
                        send them your writing by the deadline or suffer a consequence.
                    </p>
                </li>
                <li>
                    <p><strong>Read a lot.</strong> The best writers (those far better than me) read voraciously. I read all the
                        time -- fiction is my favorite, but I also read non-fiction books and long-form articles online. Reading
                        good writing shapes your own writing, giving you inspiration and expanding your use of language. Read a
                        lot!
                    </p>
                </li>
                <li>
                    <p><strong>Steal from others.</strong> When you find a writer who does something beautifully, rip them off. Try
                        it in your own writing, mix it in with what you already do, remix it with what you find elsewhere, and make
                        it your own.
                    </p>
                </li>
                <li>
                    <p><strong>Keep notes on writing.</strong> When you find something worth stealing, add it to a text doc or put
                        it in a writing notebook. When you have ideas for a novel, a blog post, a character, an insight... add it
                        to the notebook. Mine it regularly.
                    </p>
                </li>
                <li>
                    <p><strong>Find fellow writers.</strong> If you're having trouble sticking to a writing schedule, find other
                        writers in your area or online, and meet with them regularly. Share your writing with each other, discuss
                        problems you're having, read other writers in your genre. A small writing group is a time-tested tool, and
                        helps you see that you're not in this alone.
                    </p>
                </li>
                <li>
                    <p><strong>Understand the reader.</strong> Another of the most important things I learned as a newspaper
                        reporter was to understand the mindset of the reader. Many beginning writers just write whatever is in
                        their heads, but then it might not be so understandable or interesting to the reader. These days I think in
                        terms of how the reader will understand the article, what context they need, how clear my sentences are,
                        what experience I'm creating for the reader.
                    </p>
                </li>            
            </ul>
            <p>
                So that might seem like a lot to take on! It's doable, though, if you just keep churning away, 
                every day, and learn all of this a little at a time.
            </p>
            <p>
                A few points I'd like to make for those who'd like to write:
            </p>
            <ul>
                <li>
                    <p><strong>Anyone can write, and everyone should.</strong> You don't have to be James Joyce to write. Even if
                        you never want to be a pro, you can write in a journal every day, or write letters to a loved one (and send
                        them or not). You don't have to be polished. And it's a great practice, to learn to focus and overcome
                        fears and procrastination, and learn to allow the words to flow from the mind.
                    </p>
                </li>
                <li>
                    <p><strong>Start where you are.</strong> Whether you've been writing for a few years or you're just starting
                        out, whether you have a talent for words or you struggle, that is the place to start. It doesn't matter
                        where you are, or how you compare to others -- just write, working with whatever you're struggling with.
                        You'll get better over the course of time, and more comfortable with what you're doing.
                    </p>
                </li>
                <li>
                    <p><strong>You get good by doing it a lot, and caring.</strong> You'll never be perfect at it -- goodness knows
                        I'm far from perfect -- but the only way to get better is to practice. And to care about what you're doing.
                        Do that every day, and every step of the struggle will be an amazing one.
                    </p>
                </li>            
            </ul>
        </section>
        <section >
            <div>
                <h3>
                   Readers Comments
                </h3>
            </div>
            <div id="msg_sec">

            </div>
        </section>
        <section>
            <br/>
            <h1>
                    Comment 
            </h1>
            <br/>
            <form id='msg_form' className="message-form">
                <input type="text" id='txt_name' required placeholder="Name"/> <br/> &nbsp; <br/>
                <textarea className ="msg-text" id="txt_message" required placeholder="Enter yor message here"></textarea> <br/> &nbsp; <br/>
                <input type="submit" name="submit" value="SUBMIT" />
            </form>
        </section>
    </article>
            </div>
        );
    }
    else if (this.state.blogNum ==5){
        return(
            <div>
                <article className="main-article">
        <section>
            <h1>
                What productivity systems won't solve
            </h1>
            <h2>
                By Leo Babauta
            </h2>
        </section>
        <section>
            <p>
                If you're like me, you're always looking for the perfect productivity system. Unfortunately, it doesn't
                exist.
            </p>
            <p>
                The problem isn't with the productivity system — the problem is that
                none of them can solve a few really important (and related) problems:
            </p>
            <ol>
                <li>Procrastination</li>
                <li>Fear of uncertainty</li>
                <li>Fear of discomfort</li>
            </ol>
            <p>
                For example, at the top of my to-do list today is "write Zen Habits post" and "write intro to declutter
                course"... pretty simple, right? Two fairly straightforward tasks. But as I started this post, I went
                to check and respond to email, sent a message to my wife, checked on my finances, cleaned the kitchen a
                little.
                I'm super productive at the little things when I'm putting off the big tasks!
            </p>
            <p>
                No matter how good the productivity system is, <em>it falls apart when I start procrastinating.</em>
            </p>
            <p>
                When a task is uncomfortable, I procrastinate, just like most people. When I'm facing a lot of
                uncertainty with a task, I procrastinate. Like most of us.
            </p>
            <p>
                Often, we'll work on a new productivity system, try out a new to-do list app, start organizing, or
                start getting our email
                inbox to zero, or start reading about a new way to be productive (like you are now). <em>
                    all as a way to procrastinate on uncertain or uncomfortable tasks.</em>
            </p>
            <p>
                And it's so much easier to follow the path of distractions and little tasks, than to face a big
                important but scary task.
                It's easy to go to your bank's website to check your balance, check on your favorite blogs and news
                sites,
                pop open your favorite social media network, and so on. These have no barrier to entry, and always give
                you some reward, while
                difficult tasks give you negative feedback and have obstacles to getting started. Not a fair fight,
                huh?
            </p>
            <p>
                So how do we deal with this? A few important methods:
            </p>
            <ol>
                <li>
                    <p><strong>Take a step back.</strong> You have to get away from the distractions and little tasks.
                        Step away from the computer, and go outside, go for a walk, take a shower, meditate, or just
                        sit doing nothing for one minute. That's all it takes. Step back and think about what you
                        should be doing right now, rather than what's easiest and most tempting.</p>
                </li>
                <li>
                    <p><strong>Remember who you're doing this for.</strong> As you step back, think about the person
                        who will benefit from you doing this important task. Is it a co-worker, client, customer, loved
                        one? Is it you? How will it make their life better? Maybe it'll make something easier for them,
                        but maybe it'll solve a real pain point or meet an important need. I've found that I
                        procrastinate when I'm focused on my own comfort, but push through procrastination when I'm
                        focused on helping others.</p>
                </li>
                <li>
                    <p><strong>Let yourself dive into the discomfort.</strong> Clear away distractions, just have what
                        you need to do this one task, and allow yourself to be uncomfortable for a few minutes. Yes, it
                        sucks, but it's actually not that bad once you get started. It's like diving into cold water —
                        just dive in, don't think about it. Once you're in, relax into the discomfort, and see that
                        it's not as bad as you feared.</p>
                </li>
                <li>
                    <p><strong>Embrace the uncertainty.</strong> A lot of time it's a fear of uncertainty that holds us
                        back. We don't know how to do something, or how things will turn out, and that freaks us out a
                        bit. We don't want to work on something like that, or even think about it. We avoid and
                        procrastinate and rationalize. Instead, see uncertainty as a necessary part of life (who wants
                        a life where you know how everything would turn out? super boring)... and see it as an exciting
                        part of life, one that is filled with wonder, curiosity, learning, exploration and adventure.
                        Instead of looking at uncertainty as a bad thing, embrace it and see if you can get good at
                        exploring it. Like discomfort, dive in and relax into it.</p>
                </li>
                <li>
                    <p><strong>Do it in little bits.</strong> Yes, uncertainty and discomfort can be difficult. So
                        don't kill yourself trying to master them... just do it in small doses. Work on the task for
                        just a few minutes, then walk around and take a break. Then sit down and focus again, relaxing
                        into the discomfort and uncertainty. Repeat.</p>
                </li>
            </ol>
            <p>
                With this kind of mindful practice, you're training yourself to get good at
                discomfort and uncertainty. This is a wonderful skill to get good at!
            </p>
            <p>
                And in the end, not only will you be facing down the most difficult aspect of productivity,
                you'll be doing something good for others in the process.
            </p>
        </section>
        <section >
            <div>
                <h3>
                   Readers Comments
                </h3>
            </div>
            <div id="msg_sec">

            </div>
        </section>
        <section>
            <br/>
            <h1>
                    Comment 
            </h1>
            <br/>
            <form id='msg_form' className="message-form">
                <input type="text" id='txt_name' required placeholder="Name" /> <br/> &nbsp; <br/>
                <textarea className ="msg-text" id="txt_message" required placeholder="Enter yor message here"></textarea> <br/> &nbsp; <br/>
                <input type="submit" name="submit" value="SUBMIT" />
            </form>
        </section>
    </article>
            </div>
        );
    }
    else{
        return(<div>
            Unknown blogpost
        </div>);
    }    
  }
}

export {HomePage, AboutUsPage, ContactUsPage, BlogPostPage};
