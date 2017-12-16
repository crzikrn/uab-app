import React, { Component } from 'react';
import './App.css';
import Clock from './Clock.js';

//CSS import
let {paddingSpread} = require('./Css');
let {flexSpreadColumn} = require('./Css');

let url = './data/data.json';
// let url = 'http://localhost:3000/data/data.json'

class Prayer extends Component {
    constructor(props){
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            data: [],
            sendData: null
        };
    }

    componentDidMount() {
        fetch(url)
            .then((res) => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        data: result.prayers
                    });
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    })
                }
            )
    }

    render(){
        const {error, isLoaded, data} = this.state;

        if (error) {
            return <div> Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
          } else {
            // let pray =[];
            // const morning = Object.keys(data.morning).map(key =>
            //     pray.push(data.morning[key])
            //     // morning.push(data.morning[key])
            //     // <div value={key}>{data.morning[key]}</div>
            // )
            // const after = Object.keys(data.after).map(key =>
            //     <div value={key}>{data.after[key]}</div>
            // )
            // console.log(data);
            // for(let item of data){
            //     console.log(item.morning)
            // }
              return(   
                <div>
                    <Greeting data={data}></Greeting>
                </div>
              )
            
        }
    }
}
  


function Bar(props){
  
      let width = props.value*50;
  
      return(
        <div style={{
          background: "black",
          width: width+"px",
          height: "30px",
          marginTop: "40px"
        }}>{props.value} 
        
        </div>
      )
    
  }
  
class Greeting extends Component{
    render(){
        const data = this.props.data;
        console.log(data)
    let hours = newFunction();
    
    if(hours.getHours() > 6 && hours.getHours() <12){
        document.body.style.background = "linear-gradient(135deg, cyan, 30%, yellow) fixed";
        return(
            <Read title={data[0].morning.title} subtitle={data[0].morning.subtitle} prayer={data[0].morning.prayer}/>
        )
      } 
      else if(hours.getHours() < 11){ 
        return(
            <div>
         
            </div>
        )
      } 
      else {
        document.body.style.background = "linear-gradient(135deg, orange, 60%, yellow) fixed";
        return(
            <Read title={data[1].after.title} subtitle={data[1].after.subtitle} prayer={data[1].after.prayer}/>
        )
      }
    }
  }
  
class Read extends Component {
    render(){
     
     
      console.log(this.props.title)
      return(
   
        <div style={{display:"flex",flexDirection:"column",width: "90%",marginTop: "40px"}}>
          <h1 style={{textAlign: "left"}}>{this.props.title}</h1>
          <h2 style={{textAlign: "left",marginTop: "20px"}}>{this.props.subtitle}</h2>
          <p style={{lineHeight: "33px", marginTop: "40px"}}>{this.props.prayer}
            <span style={{dispaly:"inline", fontStyle: "italic"}}> Amen.</span>
          </p>
        </div>
      )
   } 
  }

class Content extends Component {
    render(){
      let timeStyle = {
        textAlign: "left",
        paddingTop: "30px"
      }
      
      return(
        <div style={{...paddingSpread}}>
          <h1 style={{...timeStyle}}>It's </h1>
          <Clock />
          <Bar value="3" />
          {/* <Greeting /> */}
          <Prayer />
        </div>
      )
    }
  }

  export default Content;

function newFunction() {
    let hours = new Date();
    let greeting = '';
    return hours;
}
