
import './page.scss';
import MainArea from './userpage/MainArea';
import Sidebar from './userpage/Sidebar';



import React, { Component } from 'react'
import Widgets from './userpage/Widgets';
import Profile from './userpage/Profile';

export class Page extends Component {
  constructor(props){
    super(props);
    this.state={modified:false,page:"default"};
    this.handlerPage=this.handlerPage.bind(this);
  }
  
  handlerPage=(newpage)=>{
    this.setState({page:newpage});
  }

  render() {
    return (
      <div className="Page" >
     {this.state.page==="default" && <div className="Page">
            <Sidebar handler={this.handlerPage}/>
            <MainArea  id = {this.props.datafrommain}/>
            <Widgets id = {this.props.datafrommain}/>
            </div>}
            {this.state.page==="profile" && <div className="Page">
            <Sidebar handler={this.handlerPage}/>
            <Profile  id={this.props.datafrommain}/>
            <Widgets id={this.props.datafrommain}/>
            </div>}
    </div>
    )
  }
}

export default Page




