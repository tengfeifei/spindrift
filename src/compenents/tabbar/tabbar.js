import React, { Component } from 'react';
import {Link , NavLink} from 'react-router-dom'
import obj from './tabbar.module.scss'



class Tabbar extends Component {
  render() {
    return <div>
         		<ul className={obj.tabbar}>  
             		 <li>
             		 	<NavLink to='#' activeClassName={obj.active} replace >             
                  			推荐
              			</NavLink>
              		 </li> 
              		 <li>
             		 	<NavLink to='#' activeClassName={obj.active} replace >             
                  		  家具
              			</NavLink>
              		 </li>
              		 <li>
             		 	<NavLink to='#' activeClassName={obj.active} replace >             
                  			家居
              			</NavLink>
              		 </li>
              		 <li>
             		 	<NavLink to='#' activeClassName={obj.active} replace >             
                  			活动
              			</NavLink>
              		 </li>
              	</ul>
    		</div>
    
  }

}



export default Tabbar;
