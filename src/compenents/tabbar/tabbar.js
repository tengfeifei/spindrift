import React, { Component } from 'react';
import {Link , NavLink} from 'react-router-dom'
import obj from './tabbar.module.scss'



class Tabbar extends Component {
  render() {
    return <div>
         		<ul className={obj.footer}>  
             		 <li>
             		 	<a href='java'             
                  			推荐
              			</NavLink>
              		 </li> 
              		 <li>
             		 	<NavLink to='/class' activeClassName={obj.active} replace >             
                  		  家具
              			</NavLink>
              		 </li>
              		 <li>
             		 	<NavLink to='/shopping' activeClassName={obj.active} replace >             
                  			家居
              			</NavLink>
              		 </li>
              		 <li>
             		 	<NavLink to='/info' activeClassName={obj.active} replace >             
                  			活动
              			</NavLink>
              		 </li>
              	</ul>
    		</div>
    
  }

}



export default Tabbar;
