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
      background: "#191919",
      color:"white",
      height: "50px",
    }

    return(
      <div className="headerStyle" style={{...flexSpread, ...paddingSpread, ...headerbox}}>
        <h3>UABDP</h3>
        {/* <p style={{fontSize: "14px"}}><a href="">uponafterbefore.com</a></p>
        <a href=""><span style={{fontSize: "20px"}}>⇧</span></a> */}
      </div>
    )
  }
}

class Footer extends Component {
  render(){
    let footerBox= {
      display: "flex",
      background: "#191919",
      color:"white",
      height: "50px",
      fontStyle:"regular",
      fontSize: "14px",
      marginTop: ""
    }

    return(
      <div style={{...footerBox,...paddingSpread,...flexSpread}}>
        <p className="headerStyle">Copyright © 2024 | prayupon.com</p>
      </div>
    )
  }
}


class App extends Component {
  render() {
   
    
    return (
      <div style={{display:"flex", flexDirection:"column", justifyContent:"space-between"}} className="App">       
        <Header />
        <Content style={{marginBottom:"100px"}}/>
        <Footer />
      </div>
    );
  }
}

export default App;
