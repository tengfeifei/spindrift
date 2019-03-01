import React from 'react'
import ReactSwipe from 'react-swipe';
import axios from 'axios'
import obj from './indexTwo.module.scss'
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.min.css'
import 'swiper/dist/js/swiper.min.js'
import BackTop from '../BackTop/backtop'
import store from '../../store/store'

class TWo extends React.Component{

	constructor(props) {
	  super(props);
	
	  this.state = {
	  	bannerList:[],
	  	dataList:[],
	  	productsList:[]
	  };
	}
	render(){
		return <div>
			{
				this.state.bannerList.length?
			<ReactSwipe
        className="carousel"
        swipeOptions={{ continuous: true, auto: 2000 ,stopPropagation: false,  disableScroll: false 	 }}
      >
      {this.state.bannerList.map((item)=>

      	<img src={item.bannerImgSrc} key={item.id}/>
      )}
     
      </ReactSwipe>

      :null
}
	<div className={obj.main}>
		<div className={obj.up}>
			<h1>{this.state.dataList.moduleName}</h1>
			<h3>{this.state.dataList.moduleDescription}</h3>
		</div>
		<div>
		{this.state.productsList?
			 <div className="swiper-container">
			    <div className="swiper-wrapper">
				   
				   	{this.state.productsList.map((item,index)=>
				   	 <div className="swiper-slide"  key={item.productId}>	
					   	<div  className={obj.middel}>
					     	<div onClick={this.jumpClick.bind(this,item.productId,item.parentProductId,index)}  > 
					    		<img src={item.productImg}/>
					    	
					    		<div>
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
		</div>
		<div className={obj.down}>
			<a href='javascript:;'>查看全部</a>
		</div>
	</div>
    <BackTop></BackTop>
    </div>
	}
	componentDidMount(){
		 
		axios({
			url:'/v2/page?pageId=1&tabId=10006&currentPage=1&pageSize=10&_=1551250803012'

		}).then(res=>{
			console.log(res.data.data.modules[1].moduleContent.products)
			this.setState({
				bannerList:res.data.data.modules[0].moduleContent.banners,
				dataList:res.data.data.modules[1],
				productsList:res.data.data.modules[1].moduleContent.products
			})
			store.dispatch({
            type:'products',
            payload:this.state.productsList
        })
		})

	}
	componentDidUpdate(){
			var swiper = new Swiper('.swiper-container', {
		      slidesPerView: 3,
		      spaceBetween: 30,
		      freeMode: true
		    });

	}

jumpClick(id,productId,index){

		this.props.history.push(`/detail/${id}/${productId}/${index}`)
	}


}

export default TWo