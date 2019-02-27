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
<<<<<<< HEAD
		return <div>
			<Tabbar></Tabbar>
=======
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
>>>>>>> 526665d8083a47fa64d9d19fbde8f34c624b3db6
			{
				this.showComponent(this.state.index)
			}
			   </div>
			}
			
showComponent(index){
	console.log(index)
		switch(index){
		      case 0:
		     	 return <Zero/>;
		      case 1:
		     	 return <One/>;
		      case 2:
		      	return  <Two/>;
		      case 3:
		     	 return <Three/>;
    }
		}
	}




export default Index