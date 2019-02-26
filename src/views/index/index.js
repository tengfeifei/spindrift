import React from 'react'
import ReactSwipe from 'react-swipe';
import axios from 'axios'
import Tabbar from '../../compenents/tabbar/tabbar'
import Zero from '../../compenents/indexZero/indexZero'
import One from '../../compenents/indexOne/indexOne'
import Two from '../../compenents/indexTwo/indexTwo'
import Three from '../../compenents/indexThree/indexThree'

class Index extends React.Component{
	constructor(props) {
	  super(props);
	
	  this.state = {
	  	index:0
	  };
	}
	render(){
		return <div>
		
			Index
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