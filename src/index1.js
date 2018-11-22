import React from "react";
import ReactDOM from "react-dom";

// Note: I moved the React Components that represents content to its own js file
// pages.js
import {HomePage, AboutUsPage, ContactUsPage, BlogPostPage} from "./pages.js"
import { isNull } from "util";


class Header extends React.Component {
  constructor(props)
  {
    super(props);
    this.state={head:'HOME'};

  }
  update_h(isHome){
    if(isHome)
    this.setState({head:'HOME'});
    else
    this,this.setState({head:null})
  }
  render() {
    //console.log('header rndr');
    //console.log(this.state.head);
    if(isNull(this.state.head))
    return (
      <header className='header'> <a href='#' onClick={this.props.pageNav.bind(this,'HOME')}>{this.props.head}</a> </header>
    );    
    else
    return(<div></div>);
  }
}

class Footer extends React.Component {
  constructor(props){
    super(props);
    this.state = {page: this.props.page}
  }
  pageNav(pageId){
    this.setState({page:pageId});
  }
  render() {
    //console.log('footer');
    //console.log(this.state.footerLinks);
    if(this.state.page=='About Us')
    { return(
      <footer className="footer">
            <br/>
            <div>            
                <span> 
                  <a href='#' onClick={this.props.pageNav.bind(this,'Contact Us')}>Contact Us</a> 
                </span>
            </div>           
    </footer>);      
    }
    else if (this.state.page=='Contact Us'){
      return(
        <footer className="footer">
              <br/>
              <div>            
                  <span> 
                    <a href='#' onClick={this.props.pageNav.bind(this,'About Us')}>About Us</a> 
                  </span>
              </div>           
      </footer>);      
    }
    else{
      return (
        <footer className="footer">
                <br/>
                <div>            
                    <span>
                      <a href='#' onClick={this.props.pageNav.bind(this,'About Us')}>About Us</a> &nbsp;
                      <a href='#' onClick={this.props.pageNav.bind(this,'Contact Us')}>Contact Us</a> 
                    </span>
                </div>           
        </footer>);  
    }
      }
}

class PageContainer extends React.Component {
// For now, render the home page. However this container would need to switch
// between content pages in the pages.js file
constructor(props)
{
  //console.log(props);
  super(props);
  this.state = {dispPage: this.props.dispPage, blogNum : null};
}
pageNav(pageId)
{
  //console.log('PC '+pageId.substring(0,3));
  if(pageId!='HOME')
  {
    if(pageId.substring(0,4)=='Blog')
    {
      //console.log(pageId.substring(4));      
      this.props.changeHeader('Blog');
      this.setState({dispPage: 'Blog',blogNum : parseInt(pageId.substring(4))});
      
      console.log(this.state.dispPage);      
    }
    else if(pageId =='About Us'){      
      this.setState({dispPage:'About Us',blogNum:null});
      this.props.changeHeader('About Us');
    }
    else if(pageId=='Contact Us'){            
      this.setState({dispPage:'Contact Us',blogNum:null});
      this.props.changeHeader('Contact Us');
    }
  }
  else{
    this.setState({dispPage:'HOME',blogNum:null});
    this.props.changeHeader('HOME')
  }
  
}
  render() {
    console.log('PC rndr '+this.state.dispPage);
    if(this.state.dispPage == 'HOME')
    {
      return (

        <div>
          <HomePage pageNav={this.pageNav.bind(this)}/>
        </div>
      );
    }
    else if(this.state.dispPage == 'Contact Us')
    {
      //comm();
      return (
        
        <div>
          <ContactUsPage />
        </div>
        
      );
    }
    else if (this.state.dispPage == 'About Us')
    {
      return (

        <div>
          <AboutUsPage />
        </div>
      );    
    }
    else if (this.state.dispPage == 'Blog')
    {
      //console.log('Inside pgCn');
      //console.log(this.state.blogNum);

      return (
        <div>
          <BlogPostPage blogNo = {this.state.blogNum} />
        </div>
      );        
    }
    else{
      return(
        <div>
          Unk
        </div>
      )
    }
  }
}

class App extends React.Component {
  // This component contains the entirety of your application
  constructor(props){
    super(props);
    this.state = {navPage : this.props.navPage, isHome: this.props.isHome};

  }
  pageNav(pageId){
   // console.log('App '+pageId);
    this.setState((state) => ({navPage :pageId, isHome : state.isHome}));
    //console.log(this.state.navPage);
    this.child.pageNav(pageId);
    this.child3.pageNav(pageId);
  }
  changeHeader(head){
    if(head!='HOME')    
    //console.log(head);
    //this.setState((state) => ({navPage :state.navPage, isHome : false}));
    this.child2.update_h(false);
    else
    this.child2.update_h(true);
  }
  render() {
    //console.log('App rndr '+this.state.navPage);
    return (
      <div>      
       <Header head = 'Home' pageNav={this.pageNav.bind(this)} ref={child => {
        this.child2 = child;}}/>
       <PageContainer dispPage = {this.state.navPage} changeHeader={this.changeHeader.bind(this)} ref={child => {
           this.child = child;}}/>
       <Footer page={this.state.navPage} pageNav={this.pageNav.bind(this)}  ref={child => {
           this.child3 = child;}}/>
     </div>
    );  
 }
}

// Render the App component, which contains instances of your Add and Subtract Components
ReactDOM.render(

  <App navPage='HOME' isHome={true} />,
  document.getElementById('root'));
