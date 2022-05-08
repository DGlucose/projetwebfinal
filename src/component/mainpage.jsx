import React from "react";
import  Page  from "./page";
import { Login } from "./login";
import axios from "axios"
import { Inscription } from "./inscription";
import { Pageconnected } from "./pageconnected";


const api =axios.create({
    baseURL:'http://localhost:4000/api',
    timeout:1000,
    headers:{
        'Customheader':"header",
        'Access-Control-Allow-Origin':'*',
        'Content-type':'application/json'
    }
})



 export class Mainpage extends React.Component{
     constructor(props){
         super(props);
         this.state={login:false,_id:""};
         this.changestate=this.changestate.bind(this)
         this.sendtoserver=this.sendtoserver.bind(this)
     }
     changestate(){
        this.setState((prev)=>({login: !prev.login}));

    }

    sendtoserver(data){
          api.post("/user/login",{login: data.login, password: data.password})
          .then((response)=>{this.setState({login:true,_id:response.data._id});console.log(this.state._id)})
          .catch((err)=>{console.log(err)})

    }




     render(){
        const current = this.state.login ? "Page" : "Inscription";
         return <div >
        
             {this.state.login && <Page datafrommain={this.state._id}/>}
             
             {!this.state.login && <Login send={this.sendtoserver }  change={this.changestate} />}
             {current=== "Inscription" && 
            <div className="MutedLink" href="#">
                  Don't have an account ?{" "}
                  <div className="BoldLink" href="#" onClick={this.props.changes}>
                  {current}
                  </div>
            </div>}

         </div>
     }
 }
