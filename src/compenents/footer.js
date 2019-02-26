import React, { Component } from 'react';
import {Link , NavLink} from 'react-router-dom'
import obj from './footer.module.scss'



class Footer extends Component {
  render() {
    return <div>
         		<ul className={obj.footer}>  
             		 <li className=''>
             		 	<NavLink to='/index' activeClassName={obj.active} replace >             
                  			<span>首页</span>
              			</NavLink>
              		 </li>
              		 <li className=''>
             		 	<NavLink to='/class' activeClassName={obj.active} replace >             
                  			<span>分类</span>
              			</NavLink>
              		 </li>
              		 <li className=''>
             		 	<NavLink to='/shopping' activeClassName={obj.active} replace >             
                  			<span>购物车</span>
              			</NavLink>
              		 </li>
              		 <li className=''>
             		 	<NavLink to='/info' activeClassName={obj.active} replace >             
                  			<span>消息</span>
              			</NavLink>
              		 </li>
              		 <li className=''>
             		 	<NavLink to='/home' activeClassName={obj.active} replace >             
                  			<span>我</span>
              			</NavLink>
              		 </li>
              	</ul>
    		</div>
    
  }
}



export default Footer;
