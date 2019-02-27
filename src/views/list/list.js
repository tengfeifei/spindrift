import React from 'react'
import list from './list.module.scss'
import axios from 'axios'

class List extends React.Component{
    constructor(props){
    	super(props);
    	this.state={
    		productlist:[]
    	}

    }
    componentDidMount(){
    	axios({
    		url:'/topic/1151/products?_=1551165782907'
    	}).then(res=>{
    		console.log(res.data);
    		this.setState({
    			productlist:res.data.lists
    		})
    	})

    }
	render(){

		return <div className={list.list}>
			 <div className={list.bannerImg}>
			    <img src="/static/listimg/b4189a73-8d51-448a-9da5-0dff93131829_2dimension_750x500.jpg"/>
			 </div>
			 <h2>竹语伞优惠价</h2>
			 <h3>竹语伞优惠清仓</h3>	
			 <ul className={list.productlist}>
			   {
			   this.state.productlist.map((item)=>
			   		<a key={item.productId}>
			   		  <li>
			   		  	<div className={list.productImg}>
			   		  	  <img src={item.productImg} />
			   		  	</div>
			   		  	<p className={list.productdescription}>{item.productTitle}</p>
			   		  	<p className={list.productprice}>
			   		  		<span>￥{item.sellPrice} </span>
			   		  		<span className={list.originprice}>￥{item.originalPrice}</span>
			   		  	</p>
			   		  </li>
			   	</a>
			   	)
			  
			}
			   

			 </ul>
		</div>
	}
   
}

export default List