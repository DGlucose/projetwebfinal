import React, { Component } from 'react'
import default_profile from "./default_background.jpg"
import cover from "./3.jpeg";
import './Profile.scss'
import axios from 'axios';
import Contacts from '../Contacts';
import Friends from './Friends';

const api =axios.create({
  baseURL:'http://localhost:4000/api',
  timeout:1000,
  headers:{
      'Customheader':"header",
      'Access-Control-Allow-Origin':'*',
      'Content-type':'application/json; charset=utf-8'
  }
})

class Profile extends Component {
  constructor(props){
    super(props);
    this.state={data:[],id:"",login:"",contatcs:[]}
    this.searchbyidcontacs=this.searchbyidcontacs.bind(this);
  }
  componentDidMount(){
    api.get("/user/allusers")
        .then((response)=>{setTimeout(()=>{
                                    this.setState({data:response.data});
                                    this.setState({id:this.props.id});
                                    this.setState({login:this.state.data.filter(item=>item._id.includes(this.state.id))[0].login});
                                    this.setState({contatcs:this.state.data.filter(item=>item._id.includes(this.state.id))[0].contatcs});
                                    console.log(this.state.data);
                                    console.log(this.state.id);
                                    console.log(this.state.contatcs);
                                    console.log(this.state.data.filter(item=>item._id.includes(this.state.id))[0].contacts.map((user)=>user));
                                    },1000)})
        .catch((err)=>{console.log(err)})
  }
  searchbyidcontacs(data){
    return (data.filter(item=>item._id.includes(this.state.id))[0]).contacts
  }
  
  render() {
  
    return (
      <div className="profile" id="prof"     width= "700px">
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
            <img
                className="profileCoverImg"
                src={cover}
                alt=""
              />
              <img className="profileUserImg" src={default_profile} width= "350"
                height= "350"
                borderRadius= "150 / 2"
                overflow= "hidden"
                borderWidth= "3" 
                rounded/>
                </div>
                
                <div className="profileInfo">
                  <h4 className="profileInfoName">{ this.state.login}</h4>
                <span className="profileInfoDesc">Hello my friends!</span>
              </div>
              </div>
                </div>
      </div>
    )
  }
}

export default Profile