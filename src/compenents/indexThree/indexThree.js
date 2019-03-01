import React from 'react'
import ReactSwipe from 'react-swipe';
import axios from 'axios'
import obj from './indexThree.module.scss'
import BackTop from '../BackTop/backtop'
import store from '../../store/store'


class Three extends React.Component{
	constructor(props) {
	  super(props);
	
	  this.state = {
	  	bannerList:[],
	  	dataList:[],
	  	products:[],
	  	imgList:[],
	  	list:[]
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
		{
			this.state.dataList.length?
			this.state.dataList.map((item)=>
				<div className={obj.datalist} key={item.moduleId}>
					<div>
						<a href="javascript">
							<img src={item.moduleContent.bannerImgSrc}/>
						</a>
					</div>
				</div>
				)
			:null
		}
		{
			this.state.products.length?
			this.state.products.map(item=>
			<div key={item.moduleId} className={obj.list}>
					<div className={obj.one}>
						<h1>{item.moduleName}</h1>
					</div>
					<div className={obj.two}>
						<div>
							<div>
								{
									this.state.list.length?
									this.state.list.map((item,index)=>{
											if (index==6) {
												return
											}
										return	<div key={item.productId}>
													<div onClick={this.jumpClick.bind(this,item.productId,item.parentProductId,index)}  > 
														<img src={item.productImg}/>
														<div>
																<p>{item.productName}</p>
																<span>¥{item.sellPrice}</span>
														</div>
													</div>
											</div>
										}
									)
									
									:null
								}
							</div>
						</div>
					</div>
					<div className={obj.three}>
						<a href='javascript:;'>查看全部</a>
					</div>
					<div className={obj.last}>
			没有更多了
		</div>
			</div>
			)
			:null

		}
		
       <BackTop></BackTop>
		</div>
	}
	componentDidMount(){
		 
		axios({
			url:'/v2/page?pageId=1&tabId=10010&currentPage=1&pageSize=10&_=1551263481513'

		}).then(res=>{
			console.log(res.data.data.modules[6].moduleContent.products)
			this.setState({
				bannerList:res.data.data.modules[0].moduleContent.banners,
				dataList:res.data.data.modules.slice(1,6),
				products:[res.data.data.modules[6]],
				list:res.data.data.modules[6].moduleContent.products
				
			})
			store.dispatch({
            type:'products',
            payload:this.state.list
        })
		})
		
	

}
jumpClick(id,productId,index){

		this.props.history.push(`/detail/${id}/${productId}/${index}`)
	}
}
export default Three