import React from 'react'
import ReactSwipe from 'react-swipe';
import axios from 'axios'
import Tabbar from '../../compenents/tabbar/tabbar'

class Index extends React.Component{

constructor(props) {
		  super(props);
		
		  this.state = {
		  	bannerList:[]
		  };
		}

	render(){
		return <div>
			<Tabbar></Tabbar>
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
		</div>
	}
	componentDidMount(){
		axios({
			url:'/v2/page?pageId=1&tabId=1&currentPage=1&pageSize=10&_=1551141913763'

		}).then(res=>{
			console.log(res.data)
			this.setState({
				bannerList:res.data.data.modules[0].moduleContent.banners
			})
		})
	}
}

export default Index