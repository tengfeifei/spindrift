import React from 'react'
import Swiper from 'swiper'
import ReactSwipe from 'react-swipe';
import 'swiper/dist/css/swiper.min.css'
import home from './indexOne.module.scss'
import axios from 'axios'
import BackTop from '../BackTop/backtop'
import {Link , NavLink} from 'react-router-dom'
import store from '../../store/store'
class One extends React.Component{
	constructor(props){
       super(props);
       this.state={
       	bannerlist:[],
       	decription:{},
       	products:[],
       	hotproducts:[],
       	hottopic:''
       }
	}
	render(){
		return <div className={home.furniture}>
		{
			this.state.bannerlist.length?
				<ReactSwipe
			        className="carousel"
			        swipeOptions={{ continuous: true, auto: 2000 ,stopPropagation: false,  disableScroll: false 	 }}
			      >
			      {this.state.bannerlist.map((item)=>

			      	<img src={item.bannerImgSrc} key={item.id}/>
			      )}
			     
			      </ReactSwipe>      
			      :null
		}
		<div className={home.gonglue}>
		    <h2>{this.state.decription.moduleName}</h2>
		    <h3>{this.state.decription.moduleDescription}</h3>
    		<div>
    		{this.state.products.length?
    			 <div className="swiper-container">
    			    <div className="swiper-wrapper">	   
    				   	{this.state.products.map((item,index)=>
    				   	<div className="swiper-slide" key={item.productId}>
    				   	  	<div   className={home.middel}>
    				   	   	<div onClick={this.jumpClick.bind(this,item.productId,item.parentProductId,index)}  > 
    				   	   		<img src={item.productImg}/>
    				   	   		<div className={home.productdetail}>
    				   	   			<p>{item.productTitle}</p>
    				   	   			<span>￥{item.sellPrice}</span>
    				   	   		</div>
    				   	   	</div>
    				   	   </div>
    				   		
    				   	</div>
    				   
    				   	)}				    			
    			    </div>
     			</div>
    			:null}
    			<div className={home.lookmore}>查看全部> </div>
    		</div>
		</div>
		<div className={home.hotclassify}>
		     <h2>{this.state.hottopic}</h2>
		     <ul className={home.hotproducts}>
		       {
		       	this.state.hotproducts.map((item)=>
		       		<li key={item.id}>
		       			<div className={home.hotImg}>
		       				<img src={item.bannerImgSrc}/>
		       			</div>
		       		</li>	
		       		)
		       }	 
		     </ul>
			
		</div>
		<div className={home.nomore}>
			<h3>没有更多了</h3>
		</div>
		<BackTop></BackTop>
	</div>
	}
	componentDidMount(){        
		axios({
			url:'/v2/page?pageId=1&tabId=10005&currentPage=1&pageSize=10&_=1551265422223'
		}).then(res=>{
			this.setState({
				bannerlist:res.data.data.modules[0].moduleContent.banners,
				decription:res.data.data.modules[1],
				products:res.data.data.modules[1].moduleContent.products,
				hotproducts:res.data.data.modules[2].moduleContent.banners,
				hottopic:res.data.data.modules[2].moduleName
			})
			store.dispatch({
            type:'products',
            payload:this.state.products
        })
		})

	}
	componentDidUpdate(){
		var swiper = new Swiper('.swiper-container', {
		     slidesPerView: 3,
		     spaceBetween: 30,
		     freeMode: true
		   })
	}

jumpClick(id,productId,index){

		this.props.history.push(`/detail/${id}/${productId}/${index}`)
	}
}

export default One