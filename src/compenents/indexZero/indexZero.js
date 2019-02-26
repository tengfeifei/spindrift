import React from 'react'
import ReactSwipe from 'react-swipe';
import axios from 'axios'
import obj from './indexZero.module.scss'
import ReactDOM from 'react-dom'
import { PullToRefresh, Button } from 'antd-mobile';


class Zero extends React.Component{

constructor(props) {
		  super(props);
		
		  this.state = {
		  	bannerList:[],
		  	imgList:null,
		  	 refreshing: false,
		      up: true,
		      height: document.documentElement.clientHeight,
		      data: [],
		  };
		}

	render(){
		return <div>
		<PullToRefresh
        damping={180}
        ref={el => this.ptr = el}
        style={{
          height: this.state.height,
          overflow: 'auto',
        }}
        
        direction={'up'}
        refreshing={this.state.refreshing}
        onRefresh={() => {
          this.setState({ refreshing: true });
         axios({
         	url:'/v2/page?pageId=1&tabId=1&currentPage=2&pageSize=10&_=1551182718385'
         }).then((res)=>
                  	this.setState({
         		imgList:[...this.state.imgList,...res.data.data.modules],
         		refreshing:false
         	})
         
         )
        }}
      >
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
			<div className={obj.list} key={item.moduleId}>
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
	 </PullToRefresh>
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