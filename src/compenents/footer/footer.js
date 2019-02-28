import React, { Component } from 'react';
import {Link , NavLink} from 'react-router-dom'
import obj from './footer.module.scss'
import store from '../../store/store.js'



class Footer extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
      isShow:store.getState().tabbarReducer
    };
  }
  componentDidMount(){
    store.subscribe(()=>{
      console.log(store.getState())
      this.setState({
        isShow:store.getState().tabbarReducer
      })
     
    })
  }
  render() {
    return <div>
    {   this.state.isShow?
         		<ul className={obj.footer}>  
             		 <li>
             		 	<NavLink to='/index' activeClassName={obj.active} replace >             
                  			<img src='/static/home.png'/>
                  			<span>首页</span>
              			</NavLink>
              		 </li> 
              		 <li>
             		 	<NavLink to='/class' activeClassName={obj.active} replace >             
                  			<img src='/static/category.png'/>
                  			<span>分类</span>
              			</NavLink>
              		 </li>
              		 <li>
             		 	<NavLink to='/shopping' activeClassName={obj.active} replace >             
                  			<img src='/static/buy.png'/>
                  			<span>购物车</span>
              			</NavLink>
              		 </li>
              		 <li>
             		 	<NavLink to='/info' activeClassName={obj.active} replace >             
                  			<img src='/static/message.png'/>
                  			<span>消息</span>
              			</NavLink>
              		 </li>
              		 <li>
             		 	<NavLink to='/home' activeClassName={obj.active} replace >             
                  			<img src='/static/me.png'/>
                  			<span>我</span>
              			</NavLink>
              		 </li>
              	</ul>
                :null
              }
    		</div>
    
  }

}



export default Footer;
