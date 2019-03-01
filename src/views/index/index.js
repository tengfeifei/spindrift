import React from 'react'
import ReactSwipe from 'react-swipe';
import axios from 'axios'
import Tabbar from '../../compenents/tabbar/tabbar'
import Zero from '../../compenents/indexZero/indexZero'
import One from '../../compenents/indexOne/indexOne'
import Two from '../../compenents/indexTwo/indexTwo'
import Three from '../../compenents/indexThree/indexThree'
import index from './index.module.scss'

class Index extends React.Component{
	constructor(props) {
	  super(props);
	
	  this.state = {
	  	index:0
	  };
	}
	render(){
		return <div className={index.container}>
		
			<div className={index.header}>
				<img src='/static/titleView.png'/>
				<div className={index.search}>
					<img src='/static/search.png'/>
					<input placeholder='搜索我的尖叫好物' type='text'></input>
				</div>
			</div>


			<Tabbar handindex={(index)=>{
				 this.setState({
					index:index
				})
			}
			}></Tabbar>
			{
				this.showComponent(this.state.index)
			}
			   </div>
			}
			
showComponent(index){
		switch(index){
		      case 0:
		     	 return <Zero {...this.props}/>;
		      case 1:
		     	 return <One {...this.props}/>;
		      case 2:
		      	return  <Two {...this.props}/>;
		      case 3:
		     	 return <Three {...this.props}/>;
    }
		}
	}




export default Index