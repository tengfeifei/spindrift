import React from 'react'
import ReactSwipe from 'react-swipe';
import axios from 'axios'
import obj from './indexZero.module.scss'


class Zero extends React.Component{

constructor(props) {
		  super(props);
		
		  this.state = {
		  	bannerList:[],
		  	imgList:null
		  };
		}

	render(){
		return <div>
			{
				this.state.bannerList.length?
			<ReactSwipe
        className="carousel"
        swipeOptions={{ continuous: true, auto: 3000 ,stopPropagation: false,  disableScroll: false 	 }}
      >
      {this.state.bannerList.map((item)=>
      	<img src={item.bannerImgSrc} key={item.id}/>
      )}
     
      </ReactSwipe>

      :null
}
	{
		this.state.imgList?
		
			this.state.imgList.map((item,index)=>
			<div className={obj.list}>
				<div className={obj.title}>
					<h1>{item.moduleName}</h1>
					<h3>{item.moduleDescription}</h3>
				</div>
				<div className={obj.banner}>
					<a href='javascript'>
					<img src={item.moduleContent.banners[0].bannerImgSrc}/>
					</a>
				</div>
			</div>
				)
		
		
		:null
	}
		</div>
	}
	
	componentDidMount(){
		axios({
			url:'/v2/page?pageId=1&tabId=1&currentPage=1&pageSize=10&_=1551141913763'

		}).then(res=>{
			console.log(res.data.data.modules)
			this.setState({
				bannerList:res.data.data.modules[0].moduleContent.banners,
				imgList:res.data.data.modules.slice(1)
			})
		})
	}
}

export default Zero