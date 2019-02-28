import React from 'react';
import top from './backtop.module.scss'
 class BackTop extends React.Component{
 	constructor(props){
 		super(props);
 		this.state={
 			isShow:false
 		}
 	}
 	render(){
 		return <div>
 		 {
 		 	this.state.isShow?
 		 	<div className={top.backtop} onClick={this.handleClick.bind(this)}>
 		 	   <img src="/static/backTop.png"/>
 		 	</div>:null
 		 }
 		</div>
 	}
 	componentDidMount() {
 	    window.addEventListener('scroll', this.handleScroll.bind(this));
 	  }
 	componentWillUnmount() {
 	    window.removeEventListener('scroll', this.handleScroll.bind(this));
         
 	  }
 	handleScroll(e){
 		var scrollTop = document.documentElement.scrollTop||document.body.scrollTop;
 		if(scrollTop>300){
 			this.setState({
 				isShow:true
 			})
 		}else{
 			this.setState({
 				isShow:false
 			})
 		}
 	}
 	handleClick(){
 	var id=setInterval(function(){
 		if(((document.body.scrollTop ||document.documentElement.scrollTop)===0)){
 			clearInterval(id);
 		}
 		document.body.scrollTop = document.body.scrollTop-100;
 		document.documentElement.scrollTop = document.documentElement.scrollTop-100;

 	},50)
 	


 	}

 }
 export default BackTop;