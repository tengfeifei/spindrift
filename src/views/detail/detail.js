import React from 'react'
import axios from 'axios'
import detail from './detail.module.scss';
import store from '../../store/store.js'
import BackTop from '../../compenents/BackTop/backtop'

class Detail extends React.Component{
	constructor(props){
		super(props);
		this.state={
			productList:[],
			itemDetailIntroVoList:[],
			itself:null,
			video:"",
			title:{},
			
		}
	}

	render(){
		return( 
		<div className={detail.detail}>
			<div className={detail.head}>
				<div>
					<a className={detail.homeIcon} href="/index">
						<img src="/static/home.png"/>
					</a>
				</div>
				<div>
					<span>商品详情</span>
				</div>
				<div>
					<a className={detail.searchIcon}>
						<img src="/static/search.png"/>
					</a>
				</div>
			</div>
			<div className={detail.soloDisplay}>
				<img src={this.state.title?this.state.title.productImg:""}/>
				<div>
					<p id={detail.headProductTitle}>{this.state.title?this.state.title.productTitle:""}</p>
					<span>￥{this.state.title?this.state.title.originalPrice:""}</span>
				</div>
			</div>
			<div id={detail.designerBrandDiv}></div>
			<div id={detail.productIntroduction}>
				{
					this.state.itemDetailIntroVoList.map((item,index)=>
						item.type===3?(
							<div className={detail.videoCon}>
							     <video src={this.state.video} controls="controls" key={this.state.video}>
									your browser does not support the video tag
								 </video>
							</div>
						):(item.type===2?(
							<img src={item.content} key={item.content} className="productIntroductionImg1"/>
						):(item.type===1?(
							<p className={detail.productIntroductionDec} key={index}>{item.content}</p>
						):(
							<p className={detail.productIntroductionSubTitle} key={index}>{item.content}</p>
						)
						))
					)
				}
			</div>
			<ul className={detail.youMaybeLike}>
	            {
	            	this.state.productList.map((item)=>
	                <li key={item.productId}>
	                	<a>
	                    	<img src={item.productImg}/>
	                    	<p className="complexProductTitle">{item.productTitle}</p>
	                    	<span className="productSalePrice  sale-price">￥{item.originalPrice}</span>	
	                    </a>                  
	                </li>
	            	)
	            }
			</ul>
{/*			<div className={detail.shopbar}>
				<ul>
					<li>icon</li>
					<li>加入购物车</li>
					<li>立即购买</li>
				</ul>
			</div>*/}
			<BackTop/>
		</div>
		);
	}




	componentDidMount(){

		 store.subscribe(()=>{
   			this.setState({
   				title:store.getState().products[this.props.match.params.index]

   			})
      
     
    })
		store.dispatch({
            type:'HideTabbar',
            payload:false
        })
		axios({
			url:`/recommend/item?skuId=${this.props.match.params.myid}&_=1551320586313`			
		}).then(res=>{
			
			this.setState({
				productList: res.data.data
			})
		})
		axios({
			url:`/itemdetail/spuInfos/${this.props.match.params.id}?_=1551320586283`
		}).then(res=>{
		
			this.setState({
				itemDetailIntroVoList:res.data.data.itemDetailIntroVoList,
				video: res.data.data.itemDetailIntroVoList[0].content.video
			})
		})
		// axios({
		// 	url:'/v2/page?pageId=1&tabId=10005&currentPage=1&pageSize=10&_=1551333834277'
		// }).then(res=>{
		// 	console.log(res.data);
		// 	console.log(res.data.data.modules[1].moduleContent.products[1].productImg);
		// 	this.setState({				
		// 			itself:res.data.data.modules[1].moduleContent.products[1]				
		// 	})
		// })
	}
		componentWillUnmount(){
        store.dispatch({
            type:'ShowTabbar',
            payload:true
        })
    }
}
export default Detail