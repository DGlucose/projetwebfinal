
import React from "react";
import {Inscription} from "./component"
import "./App.scss";
import { Mainpage } from "./component/mainpage";
import axios from 'axios'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import User from "./component/User";

const api =axios.create({
    baseURL:'http://localhost:4000/api',
    timeout:1000,
    headers:{
        'Customheader':"header",
        'Access-Control-Allow-Origin':'*',
        'Content-type':'application/json'
    }
})

class App extends React.Component {
  constructor(props){
    super(props);
    this.state={loginactive :true,
                currentpage : 'mainpage', id:""}
    this.changestates=this.changestates.bind(this)
    this.sendtoserver=this.sendtoserver.bind(this)
  }
  
  
  changestates(){
    const{loginactive}= this.state;
    this.setState((prev)=>({loginactive: !prev.loginactive}));
  }


  sendtoserver(data){
          api.put("/user",{login: data.login, password: data.password, firstname: data.firstname, lastname: data.lastname })
          .then((response)=>{this.setState({loginactive:true});this.setState({id:response.data}); console.log(response.data)})
          .catch((err)=>{console.log(err)})

    }

  render(){
    
    const loginactive = this.state.loginactive;
    const current = loginactive ? "Inscription" : "Login";
    const currentActive = loginactive ? "Login" : "Inscription";
    return (
    <div className="App">
      <div className="login">
        <div className="container">
            {loginactive &&  <Mainpage changes={this.changestates} containerRef={(ref)=>this.current =ref}  />}
            {!loginactive && <Inscription sendi={this.sendtoserver} containerRef={(ref)=>this.current =ref} /> }
            

            
            {current=== "Login" && 
            <div className="MutedLink" href="#">
                  You have an account ?{" "}
                  <div className="BoldLink" href="#" onClick={this.changestates.bind(this)}>
                  {current}
                  </div>
            </div>}

        </div>
        
      </div>
      {!(this.id==="" && <User myid={this.id}/>)}
    </div>

    
  );
}
}

export default App;
