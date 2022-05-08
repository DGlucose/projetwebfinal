import React from 'react';
import './Post.scss';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import RepeatIcon from "@material-ui/icons/Repeat";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import PublishIcon from "@material-ui/icons/Publish";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import axios from 'axios';

const api =axios.create({
    baseURL:'http://localhost:4000/api',
    timeout:1000,
    headers:{
        'Customheader':"header",
        'Access-Control-Allow-Origin':'*',
        'Content-type':'application/json; charset=utf-8'
    }
  })

export class Post extends React.Component{

    constructor(props){
        super(props);
    }


    render(){
        return(
            <div className="post1">
                <AccountCircleIcon className='accounticon' />
                <div className="postUsername">
                        {this.props.name}
            </div>
                
                <p>{this.props.newpost}</p>
                <div className="post__footer">
                        <ChatBubbleOutlineIcon fontSize="small" />
                        <RepeatIcon fontSize="small" />
                        <FavoriteBorderIcon fontSize="small" />
                        <PublishIcon fontSize="small" />
                </div>
            </div>)
       
    }


    }