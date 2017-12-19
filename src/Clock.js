import React, { Component } from 'react';
import './App.css';

function Bar(props){
  
  let width = props.value*50;

  return(
    <div style={{
      background: props.color,
      width: width+"px",
      height: "30px",
      marginTop: "40px"
    }}>
    
    </div>
  )
}

class Clock extends Component {
    constructor(props) {
      super(props);
      this.state = {date: new Date()};
    }
    componentDidMount() {
      this.timerID = setInterval(
        () => this.tick(),
        1000
      );
    }
    componentWillUnmount() {
      clearInterval(this.timerID);
    }
    tick() {
      this.setState({
        date: new Date()
      });
    }
    render() {
      let hour = this.state.date.getHours();
      let hours = (hour + 24) % 12 || 12;
      let minutes = this.state.date.getMinutes();
      let ampm = hour >= 12 ? 'PM' : 'AM';
      
      return (
        <div>
          <h1 style={{color: this.props.color}}>{hours}:{minutes}{ampm}</h1>
          {/* <h1 style={{color: this.props.color}}>{this.state.date.toLocaleTimeString([], {hour:'2-digit', minute:'2-digit'})}</h1> */}
          {/* <h1>{this.state.date.toLocaleTimeString()}</h1> */}
          <Bar value={this.state.date.getSeconds()/60*3} color={this.props.barColor}/>
        </div>
      );
    }
  }

  export default Clock;