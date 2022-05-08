import React from 'react';
import AddAPhotoIcon from '@material-ui/icons/AddAPhoto';
import './Userbox.scss';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import Sidebar_op from './Sidebar_op';
import axios from 'axios'
import default_profile from "./default_background.jpg"



class Userbox extends React.Component {
  constructor(props){
    super(props);
    this.state={profileImg:default_profile,
                modified:false
                }
    this.send=this.send.bind(this)
  }


  send(){
         var data_to_send={newpost:this.refs.newpost.value}
         this.props.sendp(data_to_send);
         this.props.handler();
  }
  

  render(){
    const {profileImg}=this.state

  return (
    <div className='userbox' >
        <div className='img-holder'>
          <div className='img1'>
          <img src={profileImg} width="75px" height="75px"  />
          </div>
        </div>
        <button>Change photo</button>
        <div><input id="input" type="text" placeholder='Share something with the guys...' ref="newpost"/></div>
        
        
        <AddAPhotoIcon  className='addphoto'/>  
        <button className='tweetbutton' onClick={()=>{this.send(); document.getElementById("input").value=""}}>Tweet</button>
        
        
    
    </div>
  )
  }
}

export default Userbox; 