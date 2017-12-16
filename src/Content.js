import React, { Component } from 'react';
import './App.css';
import Clock from './Clock.js';

//CSS import
let {paddingSpread} = require('./Css');
let {flexSpreadColumn} = require('./Css');

let morning = "Are you Ready to Start?";
let work = "You Ready to Work?";
let subWork = "Prayer upon Beginning Ones Work or Study";
let prayer = "My good God, Father, and Saviour, grant me aid by your Holy Spirit to now work fruitfully in my vocation, which is from you, all in order to love you and the people around me rather than for my own gain and glory. Give me wisdom, judgment and prudence, and freedom from my besetting sins. Bring me under the rule of true humility. Let me accept with patience whatever amount of fruitfulness or difficulty in my work that you give me this day. And in all I do, help me to rest always in my Lord Jesus Christ and in his grace alone for my salvation and life. Hear me, merciful Father, by our Lord Jesus Christ, ";

//let url = './data/data.json';
let url = 'http://localhost:3000/data/data.json'

class Prayer extends Component {
    constructor(props){
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            data: [],
        };
    }

    componentDidMount() {
        fetch(url)
            .then((res) => res.json())
            .then(
                (result) => {
                    console.log(result.prayers)
                    
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

            for (let item of data){
                console.log(item)
            }

              return(
               
                <div>
                     {console.log(data)}
                    <Greeting data={data}/>

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
  
//   function Greeting(props){
    
//       let hours = new Date();
//       let greeting= ''
  
//       if(hours.getHours() > 25){
//         return(
//           <h1 >You Ready to Start?</h1>
//         )
//       } else if(hours.getHours() < 11){
//         return(
//             <div>
//             {console.log(props.data)}
//             {/* {Object.keys(props.after).map((item,i) => (
//                 <li key={i}>
//                     {props.after[item]}
//                 </li>
//             ))} */}
        
//             </div>
//         //   <Read />
//         )
//       } else {
//         return(
//           <h1 >You Ready to Sleep?</h1>
//         )
//       }
//   }


class Greeting extends Component{
    constructor(props){
        super(props);
    }

    render(){
        const data = this.props.data;
        console.log(data)
        let hours = newFunction();
    
    if(hours.getHours() > 25){
        return(
          <h1 >You Ready to Start?</h1>
        )
      } 
      else if(hours.getHours() < 11){ 
        return(
            <div>
               {/* {this.props.data} */}
                {/* <h1 >You Ready to Sleep?</h1> */}
                {/* <Read data={this.props.data}/> */}
            </div>
        )
      } 
      else {
        return(
              {/* <Read /> */}     
        )
      }
    }
  }
  
  class Read extends Component {
    render(){
     
      document.body.style.background = "linear-gradient(135deg, orange, 60%, yellow) fixed";
      console.log(this.props.title)
      return(
   
        <div style={{width: "75%",marginTop: "40px"}}>
          <h1 style={{textAlign: "center"}}>{this.props.title}</h1>
          <h2 style={{textAlign: "center",marginTop: "20px"}}>{this.props.subtitle}</h2>
          <p style={{marginTop: "40px"}}>{this.props.prayer}
            <p style={{dispaly:"inline", fontStyle: "italic"}}>Amen.</p>
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
        <div style={{...paddingSpread,...flexSpreadColumn}}>
          <h1 style={{...timeStyle}}>It's </h1>
          <Clock />
          <Bar value="3" />
          <Greeting />
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
