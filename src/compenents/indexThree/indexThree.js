import React from 'react'
import ReactSwipe from 'react-swipe';
import axios from 'axios'
import obj from './indexThree.module.scss'


class Three extends React.Component{
	constructor(props) {
	  super(props);
	
	  this.state = {
	  	bannerList:[],
	  	dataList:[],
	  	products:[],
	  	imgList:[]
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

		</div>
	}
	componentDidMount(){
		 
		axios({
			url:'/v2/page?pageId=1&tabId=10010&currentPage=1&pageSize=10&_=1551263481513'

		}).then(res=>{
			console.log(res.data.data.modules.slice(1,2))
			this.setState({
				bannerList:res.data.data.modules[0].moduleContent.banners,
				dataList:res.data.data.modules.slice(1,6),
				
			})
		})
}
}
export default Three