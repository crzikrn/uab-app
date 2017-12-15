import React, { Component } from 'react';
import './App.css';
import Content from './Content.js';

//CSS import
let {paddingSpread} = require('./Css');
let {flexSpread} = require('./Css');

class Header extends Component {
  render(){
    let headerbox= {
      display: "flex",
      background: "black",
      color:"white",
      height: "50px",
    }

    return(
      <div className="headerStyle" style={{...flexSpread, ...paddingSpread, ...headerbox}}>
        <h3>UABDP</h3>
        <p><a href="">uponafterbefore.com</a></p>
        <a href=""><span style={{fontSize: "20px"}}>⇧</span></a>
      </div>
    )
  }
}

class Footer extends Component {
  render(){
    return(
      <div style={{marginBottom : "100px"}}></div>
    )
  }
}


class App extends Component {
  render() {
    
    return (
      <div className="App">       
        <Header />
        <Content />
        <Footer />
      </div>
    );
  }
}

export default App;