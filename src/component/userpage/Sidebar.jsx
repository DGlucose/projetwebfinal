import React from 'react'
import TwitterIcon from '@material-ui/icons/Twitter';
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import MailOutlineIcon from '@material-ui/icons/MailOutlined';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import Sidebar_op from './Sidebar_op';
import "./Sidebar.scss"
import { Link } from 'react-router-dom';
import {Mainpage} from '../mainpage'
import App from '../../App';
import Profile from './Profile';
import Pageconnected from '../pageconnected';

export class Sidebar extends React.Component {
    constructor(props){
        super(props);
        this.state = {page:"default", connected:true,profile:false}
       
    }


   

    
    render(){
  return (
    <div  role='banner' className="sidebar">
        <div> 
            <TwitterIcon  className= "twittericon"/>
            <p></p>
            <button className="butt" onClick={()=>{this.props.handler("default")}}>
            <Sidebar_op 
                Icon ={HomeIcon}
                text="Home"/>
            </button>
<p></p>

            <button className="butt" onClick={()=>{this.props.handler("profile")}}>
                <Sidebar_op 
                Icon ={PermIdentityIcon}
                text="Profile"/> 
            </button>
           
                <p></p>
            <button className="butt">
            <Sidebar_op 
                Icon ={SearchIcon}
                text="Explore" />
            </button>
            <p></p>


            <button className="butt">    
            <Sidebar_op 
                Icon ={NotificationsNoneIcon}
                text="Notifications"/>
             </button>
<p></p>

            <button className="butt">
            <Sidebar_op 
                Icon ={MailOutlineIcon}
                text="Messages"/>
            </button>
        </div>
        
    
    </div>
  )}
}

export default Sidebar