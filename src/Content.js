import React, { Component } from 'react';
import './App.css';
import Clock from './Clock.js';

//CSS import
let {paddingSpread} = require('./Css');

let url = './data/data.json';
// let url = 'http://localhost:3000/data/data.json'

class Prayer extends Component {
    constructor(props){
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            data: []
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
 
            return (
                <div><h1 style={{lineHeight:"100px",marginTop: "40px", marginBottom: "100px"}}>Prayer Being Loaded Please Wait...</h1></div>
            )

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
    
class Greeting extends Component{
    render(){
    const data = this.props.data;

    let hours = new Date();
    
        if(hours.getHours() >= 5 && hours.getHours() < 9){
            document.body.style.background = "linear-gradient(135deg, #6df8fc, 15%, #71f485,80%, #f7f733) fixed";
            return(
            <Read title={data.start.title} subtitle={data.start.subtitle} prayer={data.start.prayer} color={data.start.color} bar={data.start.bar}/>
            )
        } 

        else if(hours.getHours() > 11 && hours.getHours() <= 14){ 
            document.body.style.background = "linear-gradient(160deg, #fef734, 65%, #f39332) fixed";
            console.log("midday!")
            return(
                <Read title={data.midday.title} subtitle={data.midday.subtitle} prayer={data.midday.prayer} color={data.midday.color} bar={data.midday.bar}/>
            )
          } 

        else if(hours.getHours() >= 9 && hours.getHours() <= 19){ 
            document.body.style.background = "linear-gradient(160deg, #f39332, 65%, #fef734) fixed";
            return(
                <Read title={data.work.title} subtitle={data.work.subtitle} prayer={data.work.prayer} color={data.work.color} bar={data.work.bar}/>
            )
        } 
          
        else {
            document.body.style.background = "linear-gradient(160deg, #59d1e0, 65%, #1b1a63) fixed";
            return(
                <Read title={data.sleep.title} subtitle={data.sleep.subtitle} prayer={data.sleep.prayer} color={data.sleep.color} colorp={data.sleep.colorp} bar={data.sleep.bar}/>
            )
        }
    }
  }
  
class Read extends Component {
    render(){
        let timeStyle = {
            textAlign: "left",
            paddingTop: "40px",
            color: this.props.color
          }
      console.log(this.props.color)
      return(
   
        <div style={{display:"flex",flexDirection:"column",width: "90%",marginBottom:"100px"}}>
          <h1 style={{...timeStyle}}>It's </h1>
          <Clock color={this.props.color} barColor={this.props.bar}/>
          <h1 style={{textAlign: "left", width:"33%", marginTop: "40px", color: this.props.color}}>{this.props.title}</h1>
          <h2 style={{textAlign: "left",marginTop: "80px", color: this.props.bar}}>{this.props.subtitle}</h2>
          <p style={{lineHeight: "36px", marginTop: "80px", color: this.props.colorp}}>{this.props.prayer}
            <span style={{dispaly:"inline", fontStyle: "italic"}}> Amen.</span>
          </p>
        </div>
      )
   } 
  }

class Content extends Component {
    render(){   
      return(
        <div style={{...paddingSpread}}>
          <Prayer />
        </div>
      )
    }
  }

  export default Content;