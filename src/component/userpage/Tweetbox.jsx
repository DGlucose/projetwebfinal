import React from 'react'
import { Post } from './Post';
import axios from 'axios';
import { useState,useEffect } from 'react';
import "./Tweetbox.scss"
import RepeatIcon from "@material-ui/icons/Repeat";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import PublishIcon from "@material-ui/icons/Publish";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";




const api =axios.create({
    baseURL:'http://localhost:4000/api',
    timeout:1000,
    headers:{
        'Customheader':"header",
        'Access-Control-Allow-Origin':'*',
        'Content-type':'application/json'
    }
})



class Tweetbox extends React.Component {

  constructor(props){
    super(props);
    this.state={posts:[],modified:false,data:[]}

  }

componentDidMount(){
  api.get("/post/allposts")
      .then((response)=>{setTimeout(()=>{
                                  this.setState({posts:response.data});
                                  console.log(response)
                                  },500);this.setState({modified:true});this.setState({modified:false})})
      .catch((err)=>{console.log(err)});
      this.props.handler();
  api.get("/user/allusers")
      .then((response)=>{setTimeout(()=>{
                                  this.setState({data:response.data});
                                  console.log(this.state.data)
                                  },1000)})
      .catch((err)=>{console.log(err)});
      
}
  
  render(){

    return (
      <div className='post'>
        <div className='post__body'>
          <div className='post__headerDescription'>
          <div className='tweetbox' id='tweetbox'>
          {this.state.posts.sort((a,b)=>(a.date>b.date) ? -1:1).map((p)=><Post newpost={p.newpost} name={this.state.data.filter(item=>item._id.includes(p.userid)).map((user)=>user.login)}/>)}
          </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Tweetbox;

