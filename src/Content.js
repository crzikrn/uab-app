import React, { Component } from 'react';
import './App.css';

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
            data: []
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
              return(
              <div>
               {console.log(data.after)}
               {console.log(this.state.data)}
               <Greeting array={data.after}/>
              </div>
              )
          }
    }
}

class Clock extends React.Component {
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
          <h1>{this.state.date.toLocaleTimeString([], {hour12: false})}</h1>
          {/* <h1>{this.state.date.toLocaleTimeString()}</h1> */}
        </div>
      );
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

    render(){
      let hours = new Date();
      let greeting= '';
      let text = this.props.data;
    //   JSON.parse(text);
    //   let jsonObject = JSON.parse(jsonString);

      let obj = {text:"4",text1:"456g"}
    console.log(text);
     
    
    if(hours.getHours() > 25){
        return(
          <h1 >You Ready to Start?</h1>
        )
      } 
      else if(hours.getHours() < 11){
        console.log(typeof(obj));
        console.log(obj);
        // const content = this.props.data.map((d) =>
        //     <div key={d.title}>
        //     {d.subtitle}
        //     </div>
        
        // );

    //     Object.keys(text).map((item,i) => 
    
    // )
        return(
                        <div>
                       {/* {content} */}
                        {/* {Object.keys(text).map((item,i) => (
                            <li key={i}>
                                {text[item]}
                            </li>
                        ))}
                     */}
                         <Read />
                        </div>
                   
                    )
      } 
      else {
        return(
            <div>
                <h1 >You Ready to Sleep?</h1>
                <Read />
            </div>
        )
      }
    }
  }
  
  class Read extends Component {
    render(){
     
      document.body.style.background = "linear-gradient(135deg, orange, 60%, yellow) fixed";
  
      return(
        <div style={{width: "75%",marginTop: "40px"}}>
          <h1 style={{textAlign: "center"}}>{work}</h1>
          <h2 style={{textAlign: "center",marginTop: "20px"}}>{subWork}</h2>
          <p style={{marginTop: "40px"}}>{prayer}
            <span style={{fontStyle: "italic"}}>Amen.</span>
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
          {/* <Prayer /> */}
        </div>
      )
    }
  }

  export default Content;