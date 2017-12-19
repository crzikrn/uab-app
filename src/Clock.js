import React, { Component } from 'react';
import './App.css';

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
      return (
        <div>
          <h1 style={{color: this.props.color}}>{this.state.date.toLocaleTimeString([], {hour12: false})}</h1>
          {/* <h1>{this.state.date.toLocaleTimeString()}</h1> */}
        </div>
      );
    }
  }

  export default Clock;