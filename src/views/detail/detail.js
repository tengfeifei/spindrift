import React from 'react'
import axios from 'axios'
import detail from './detail.module.scss';
class Detail extends React.Component{
	constructor(props){
		super(props);
		this.state={
			productList:[],
			itemDetailIntroVoList:[],
			itself:null,
			video:""
		}
	}
	render(){
		return( 
		<div className={detail.detail}>
			<div className={detail.head}>商品详情</div>
			<div className={detail.soloDisplay}>
				<img src={this.state.itself?this.state.itself.productImg:""}/>
				<div>
					<p id={detail.headProductTitle}>{this.state.itself?this.state.itself.productTitle:""}</p>
					<span>￥{this.state.itself?this.state.itself.originalPrice:""}</span>
				</div>
			</div>
			<div id={detail.designerBrandDiv}></div>
			<div id={detail.productIntroduction}>
				<div className={detail.videoCon}>
				     <video src={this.state.video} controls="controls" key={this.state.video}>
						your browser does not support the video tag
					 </video>
				</div>
			{
				this.state.itemDetailIntroVoList.map((item,index)=>
					item.type===1?
					<p className="productIntroductionDec" key={index}>{item.content}</p>
					:
					<img src={item.content} className="productIntroductionImg1"/>
					
				)
			}
			 <img src="https://img.wowdsgn.com/product/introduction/c9c8d862-09df-465c-a92f-628921c7a201_2dimension_900x600.jpg?imageslim" className="productIntroductionImg1"/>
			<p className="productIntroductionDec">Flototto 家族从 50 年代就开始生产学校家具，在很短的时间里，Flototto 品牌就意味着富有活力的座椅概念，这要归功于那灵活的、人体工学舒适度极强的胶合板 PRO 椅椅身。这张 Flototto 的座椅陪伴了一代又一代人，它依然是当今文化的一部分，同时它也使得 Flototto 品牌在设计历史上拥有一席之地。PRO 胶合板椅从 50 年代至今已经销售了 2100 万张。</p>

			{/*<!-- 前3张图片不使用懒加载 -->*/}
			 
			 <img data-src="https://img.wowdsgn.com/product/introduction/8de53a43-3342-45bd-ad06-0b6a90ee261a_2dimension_900x600.jpg?imageslim" className="productIntroductionImg1 lazy" src="https://img.wowdsgn.com/product/introduction/8de53a43-3342-45bd-ad06-0b6a90ee261a_2dimension_900x600.jpg?imageslim"/>
			<p className="productIntroductionDec">PRO 椅，它集合了最新针对于活跃坐姿的研究：这张全 PP 椅板座身获奖的座椅包装了不间断的移动空间，它也使得使用者变得更加活跃，它也是万能的——用在家里、办公室、学校。PRO 椅符合健康座椅的同时带给你自由、摆 pose 以及符合所需要的一切设计标准。</p>
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
		</div>
		);
	}
	componentDidMount(){
		axios({
			url:'/recommend/item?skuId=10319&_=1551320586313'			
		}).then(res=>{
			console.log(res.data);
			console.log(res.data.data);
			this.setState({
				productList: res.data.data
			})
		})
		axios({
			url:'/itemdetail/spuInfos/7621?_=1551320586283'
		}).then(res=>{
			console.log(res.data);
			
			console.log(res.data.data.itemDetailIntroVoList);
			console.log(res.data.data.itemDetailIntroVoList[0].content.video);
			this.setState({
				itemDetailIntroVoList:res.data.data.itemDetailIntroVoList,
				video: res.data.data.itemDetailIntroVoList[0].content.video
			})
		})
		axios({
			url:'/v2/page?pageId=1&tabId=10005&currentPage=1&pageSize=10&_=1551333834277'
		}).then(res=>{
			console.log(res.data);
			console.log(res.data.data.modules[1].moduleContent.products[1].productImg);
			this.setState({				
					itself:res.data.data.modules[1].moduleContent.products[1]				
			})
		})
	}
}
export default Detail