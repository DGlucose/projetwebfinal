import React from 'react';
import './MainArea.scss';
import Tweetbox from './Tweetbox';
import Userbox from './Userbox';
import axios from 'axios'


const api =axios.create({
    baseURL:'http://localhost:4000/api',
    timeout:1000,
    headers:{
        'Customheader':"header",
        'Access-Control-Allow-Origin':'*',
        'Content-type':'application/json'
    }
})




class MainArea extends React.Component{

  constructor(props){
    super(props);
    this.state={modified:false,didpost:false}
    this.sendpost=this.sendpost.bind(this);
    this.handlerRefresh1=this.handlerRefresh1.bind(this);
     this.handlerRefresh2=this.handlerRefresh2.bind(this);
  }

  
  sendpost(data){
    api.put("/post",{newpost:data.newpost, date:Date.now()})
      .then((response)=>{console.log(response.data)})
      .catch((err)=>{console.log(err)})
  }

  handlerRefresh1=()=>{
   this.setState({didpost:true})
  }

  handlerRefresh2=()=>{
   this.setState({didpost:false})
  }

  render(){
    return (
      <div id= 'main'>
          <h1> Nice to see you!</h1>
          <Userbox  sendp={this.sendpost} id={this.id} handler={this.handlerRefresh1}/>
          <Tweetbox handler={this.handlerRefresh2} />            
      </div>
    )
  }
}

export default MainArea;