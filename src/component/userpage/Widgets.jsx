import React, { useEffect, useState } from "react";
import "./Widgets.scss";
import SearchIcon from "@material-ui/icons/Search";
import Contacts from "../Contacts";
import axios from 'axios';
import Table from "./Table";


const api =axios.create({
  baseURL:'http://localhost:4000/api',
  timeout:1000,
  headers:{
      'Customheader':"header",
      'Access-Control-Allow-Origin':'*',
      'Content-type':'application/json; charset=utf-8'
  }
})



class Widgets extends React.Component {

  constructor(props){
    super(props);
    this.state={data:[],serach:"",id:""}
    this.search=this.search.bind(this);
    this.searchbyid=this.searchbyid.bind(this);
    this.senduser=this.senduser.bind(this);
  }
  componentDidMount(){
    api.get("/user/allusers")
        .then((response)=>{setTimeout(()=>{
                                    this.setState({data:response.data});
                                    this.setState({id:this.props.id})
                                    console.log(this.state.data);
                                    console.log(this.state.id);
                                    console.log(this.state.data.filter((user)=>user._id!==this.state.id));
                                    console.log(this.state.data.filter(item=>item._id.includes(this.state.id))[0].contacts);
                                    },1000)})
        .catch((err)=>{console.log(err)})
  }

  senduser(data){
    console.log(data[0])
    var test= data[0]
    var id=this.state.id
    console.log(test)
    api.put(`/user/follow/${id}`,test)
      .then((response)=>{console.log(response)})
      .catch((err)=>{ console.log(data)})
  }

  search(data){
    return data.filter(item=>item.login.toLowerCase().includes(this.state.serach))
  }
  searchbyid(data){
    return data.filter(item=>item._id.includes(this.state.id))[0].contacts
  }
  render() {
  return (
    
    <div className="widgets">
      <div className="widgets__input">
        <button className="btn2"  onClick={()=>this.senduser(this.search(this.state.data))}><SearchIcon className="widgets__searchIcon" /></button>
        <input placeholder="Search Birdy" type="text" onChange={(e)=>this.setState({serach:e.target.value.toLowerCase()})} />
        
        
      </div>
      <div className="widgets__widgetContainer">
        <h2>Contact</h2>
        {this.state.data.filter((user)=>user._id!==this.state.id).map((user)=>{if ((this.searchbyid(this.state.data)).includes(user.login)) return (<Contacts key={user.id}  name={user.login}/>)})}
      </div>
      
    </div>
  );
}
}

export default Widgets;