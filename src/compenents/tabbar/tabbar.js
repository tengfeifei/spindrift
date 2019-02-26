import React, { Component } from 'react';
import {Link , NavLink} from 'react-router-dom'
import obj from './tabbar.module.scss'



class Tabbar extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
      ulList:['推荐','家具','家居','活动'],
      color:0,
      active:{ borderBottom: '3px solid #202020',
               color: '#000',
               height:'42px',
               fontWeight:'600'}
    };
  }
  render() {
    return <div>
         		<ul className={obj.tabbar}>  
             {
               this.state.ulList.map((item,index)=>
                 <li onClick={this.showTime.bind(this,index)} key={index} style={this.state.color==index?this.state.active:null}>
                   {item}
                 </li>
                 )
             }
             </ul>
    		</div>
    
  }
  showTime(index){
    this.setState({
       color:index
    }) 
    this.props.handindex(index)
  }

}



export default Tabbar;
