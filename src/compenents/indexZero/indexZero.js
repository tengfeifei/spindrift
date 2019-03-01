import React from 'react'
import ReactSwipe from 'react-swipe';
import axios from 'axios'
import obj from './indexZero.module.scss'
import ReactDOM from 'react-dom'
import { PullToRefresh, Button } from 'antd-mobile';
import {Link , NavLink} from 'react-router-dom';
import BackTop from '../BackTop/backtop';

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
		      count:2,
		      isShow:false
		  };
		}

	render(){
		return <div>
      
		<PullToRefresh
        damping={80}
        ref={el => this.ptr = el}
        style={{
          height: this.state.height,
          overflow: 'auto',
        }}
        indicator={{activate:"正在刷新",deactivate: '',finish:"" }}
        direction={'up'}
        refreshing={this.state.refreshing}
        onRefresh={() => {
          this.setState({ refreshing: false });
         axios({
         	url:`/v2/page?pageId=1&tabId=1&currentPage=${this.state.count}&pageSize=10&_=1551182718385`
         }).then((res)=>{
         	if(res.data.data.modules.length==0){
         		this.setState({
         			refreshing:false,
         			isShow:true,
         			count:this.state.count+1

         		})
         	}
         	this.setState({
         		imgList:[...this.state.imgList,...res.data.data.modules],
         		refreshing:false,
         		count:this.state.count+1
         	})
         }
                  	
         
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
       this.state.imgList.map((item,index)=>{
       	if (item.moduleType==401) {
       		return
       	}
			else{
				return <div className={obj.list} key={item.moduleId}>
				<div className={obj.title}>
					<h1>{item.moduleName}</h1>
					<h3>{item.moduleDescription}</h3>
				</div>
				<div className={obj.banner}>
					<NavLink to='/list'  replace >  
					<img src={item.moduleContent.banners[0].bannerImgSrc}/>
					</NavLink>
				</div>
			</div>
				}
			})
     
		
		:null
	}
	{
	this.state.isShow?
	<div className={obj.down}>
	<div>没有更多了</div>
	</div>
	:null
}

	 </PullToRefresh>
	
		</div>
	}
	
	componentDidMount(){
		 
		axios({
			url:'/v2/page?pageId=1&tabId=1&currentPage=1&pageSize=10&_=1551141913763'

		}).then(res=>{
			this.setState({
				bannerList:res.data.data.modules[0].moduleContent.banners,
				imgList:res.data.data.modules.slice(1)
			})
		})
	}
}

export default Zero