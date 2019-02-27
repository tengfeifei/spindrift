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
<<<<<<< HEAD
             		 <li>
             		 	<NavLink to='/index' activeClassName={obj.active} replace >             
                  			推荐
              			</NavLink>
              		 </li> 
              		 <li>
             		 	<NavLink to='#' activeClassName={obj.active} replace >             
                  		  家具
              			</NavLink>
              		 </li>
              		 <li>
             		 	<NavLink to='/homefurnishing' activeClassName={obj.active} replace >             
                  			家居
              			</NavLink>
              		 </li>
              		 <li>
             		 	<NavLink to='#' activeClassName={obj.active} replace >             
                  			活动
              			</NavLink>
              		 </li>
              	</ul>
=======
             {
               this.state.ulList.map((item,index)=>
                 <li onClick={this.showTime.bind(this,index)} key={index} style={this.state.color==index?this.state.active:null}>
                   {item}
                 </li>
                 )
             }
             </ul>
>>>>>>> 526665d8083a47fa64d9d19fbde8f34c624b3db6
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
