import React from 'react'
import ReactSwipe from 'react-swipe';
import axios from 'axios';
import furnishing from './homefurnishing.module.scss';
import Tabbar from '../../compenents/tabbar/tabbar';
import Swiper from 'swiper';
import "swiper/dist/css/swiper.css";
class Homefurnishing extends React.Component{
	constructor(props){
		super(props);
		this.state={
			bannerlist:[],
			newDesign:{},
			designlist:[]
		}

	}
    componentDidMount(){

    	var swiper = new Swiper('.swiper-container', {
    	     slidesPerView: 3,
    	     spaceBetween: 30
    	   });
    	axios({
    		url:'/v2/page?pageId=1&tabId=10006&currentPage=1&pageSize=10&_=1551232986399'
    	}).then(res=>{
    		console.log(res.data.data.modules[1])
    		this.setState({
    			bannerlist:res.data.data.modules[0].moduleContent.banners,
    			newDesign:res.data.data.modules[1],
    			designlist:res.data.data.modules[1].moduleContent.products
    		})
    	})

    }

	render(){
		return <div>
		 <Tabbar> </Tabbar>
		 <div className={furnishing.homefurnishing}>
		   <ReactSwipe
		        key={this.state.bannerlist.length}
		        className="carousel"
		        swipeOptions={{ continuous: false ,auto:3000}}
		        
		      >
		      {
		      	this.state.bannerlist.map((item)=>
		            <img src={item.bannerImgSrc} key={item.bannerLinkTargetId} />
		      	)
		      }
		     
		      </ReactSwipe>

		      <div className={furnishing.newDesign}>
		          <h2>{this.state.newDesign.moduleName}</h2>
		          <h3>{this.state.newDesign.moduleDescription}</h3>
		          <div className="swiper-container">
		              <div className="swiper-wrapper">
		                {
		                	this.state.designlist.map((item)=>
		                    <div className="swiper-slide" key={item.productId}>
		                      <div className={furnishing.designImg}>
                                 <img src={item.productImg}/>
		                      </div>
		                      <p className={furnishing.productName}>{item.productName}</p>
		                      <p className={furnishing.productprice}>{item.sellPrice}</p>
		                    </div>
		                	)
		                }
		              </div>
		          </div>
		      </div>
		 </div>
	</div>
	}
}

export default Homefurnishing;