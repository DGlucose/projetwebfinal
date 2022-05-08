import React from "react";
import App from "../App";
import { Page } from "./page";



 export class Login extends React.Component{
     constructor(props){
        super(props);
        this.send=this.send.bind(this);
         
     }

     send(event){
         var data_to_send={login: this.refs.login.value, password:this.refs.password.value}
         this.props.send(data_to_send);
    }
    
    render(){
        
         return(
             
            <div className="base-container" ref={this.props.containerRef}>
                <div className="topcontainer">
                    <div className="backdrop"></div>
                    <div className="header">
                    <div className="header">Welcome</div>
                    <div className="header">Back</div>
                    <div className="smalltext">Please login to continue!</div>
                    </div>
                </div>
                
                <div className="content">
                    <div className="form">
                        <div className="formgroup">
                            <label htmlFor="username">Username</label>
                            <input type="text" name="username" placeholder="username..."  ref="login"/>
                        </div>
                        <div className="formgroup">
                            <label htmlFor="password">Password</label>
                            <input type="password" name="password" placeholder="password..." ref="password"/>
                        </div>
                    </div>
                </div>

                <div className="footer">
                    <button type="button"  className="btn" onClick= {this.send} >Login</button>
                 
                </div>
            </div>)
     }
 }