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

			<div id={detail.designerBrandDiv}>
				<div id={detail.brand} brandid="890">
				            <div id={detail.brandCountry}>
				                <img src="/static/icon-location.png" className={detail.brandLocationIcon}/>
				                <span id="brandCountryName"></span>
				            </div>
				            <div id={detail.brandLogoImg}>
				           		<img  src="/static/brand.jpg"/>
				            </div>
				            <div className={detail.brandInfo}>
				                <p id={detail.brandName}>Flototto</p>
				                <p id={detail.brandIntroduction}>Flototto 为一家族企业，目前为第四代经营。  
				1906年 Heinrich Flototto在德国中部城市Gütersloh成立Flototto 木业 
				1946年 Heinrich 的儿子Fritz与Franz接任，并开设锯板车间并发展家用及学校家具 
				1961-1991，Flototto 第三代三对夫妻（ Elmar &amp; Anna Flötotto, Reinhard &amp; Barbara Flötotto, Hubertus &amp; Ingrid Flötotto）开设继承Flototto公司，并发展了各类业务。 
				1990年，Flototto的品牌在德国也得到了广泛推广，平均每三个德国人就有一个人知道Flototto品牌。</p>
				            </div>
				</div>
			</div>
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








