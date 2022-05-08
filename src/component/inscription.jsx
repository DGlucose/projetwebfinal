import React from "react";
 export class Inscription extends React.Component{
     constructor(props){
         super(props);
         this.send=this.send.bind(this);
     }


     send(event){
         var data_to_send={firstname: this.refs.firstname.value,
                        lastname:this.refs.lastname.value,
                        login:this.refs.login.value,
                        password:this.refs.password.value}
        this.props.sendi(data_to_send);
    }


     render(){
         return <div className="base-container"ref={this.props.containerRef}>
             <div className="topcontainer">
             <div className="backdrop"></div>
             <div className="header">
             <div className="header">Create</div>
             <div className="header">Account</div>
             <div className="smalltext">Please sign-up to continue!</div>
             </div>
             </div>
             <div className="content">
                 <div className="form">
                 <div className="formgroup">
                         <label htmlFor="Name">Name</label>
                         <input type="text" name="name" placeholder="Name..." ref="firstname"/>
                     </div>
                     <div className="formgroup">
                         <label htmlFor="Last Name">Last Name</label>
                         <input type="text" name="Last Name" placeholder="Last Name..." ref="lastname"/>
                     </div>
                     <div className="formgroup">
                         <label htmlFor="username">Username</label>
                         <input type="text" name="username" placeholder="Username..." ref="login"/>
                     </div>
                     <div className="formgroup">
                         <label htmlFor="email">Email</label>
                         <input type="email" name="email" placeholder="Email..." ref="email"/>
                     </div>
                     <div className="formgroup">
                         <label htmlFor="password">Password</label>
                         <input type="password" name="password" placeholder="Password..." ref="password"/>
                     </div>
                 </div>
             </div>
             <div className="footer">
                 <button type="button" className="btn" onClick= {this.send}>Inscription</button>
             </div>
         </div>

         
     }
 }