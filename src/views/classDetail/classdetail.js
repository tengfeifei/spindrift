import React,{Component} from "react";
import Narbar from '../../compenents/navbar/navbar'
import claobj from './classdetail.module.scss';
import Swiper from 'swiper';
import "swiper/dist/css/swiper.css";
import axios from 'axios'

class classNameDetail extends Component{
    constructor(props){
        super(props);
        this.state={
            addClass:false,
            classlist:[]

        }
    };
    
    componentDidMount(){
        var swiper = new Swiper('.swiper-container', {
          slidesPerView: 4,
          spaceBetween: 30
        });
        axios({
            url:`/pages/category/${this.props.match.params.myid}?currentPage=1&sort=onShelfTime&order=desc&_=1551263551296`
        }).then(res=>{
            console.log(res.data.data)
            this.setState({
                classlist:res.data.data,
            })
        })
    };
    render(){
        var add = this.state.addClass?"caldiv":"calcli";
        return <div>
            <Narbar></Narbar>    
            <div className={claobj.swipercal}>
                <div className="swiper-container">
                    {
                        this.classNamelunbo()                  
                    }
                </div> 

            </div>
            <div className={claobj.imgli}>
                <ul className={claobj.imgul}>
                    {
                        this.state.classlist?
                        this.state.classlist.map((item)=>
                            <li key={item.parentProductId} onClick={this.handleClickClass.bind(this)}>
                                <img src={item.productImg}/>
                                <p>{item.productTitle}</p>
                                <p>{item.sellPrice}</p>
                            </li>
                            )
                        :null
                    }
                </ul>
            </div>
        </div>
    };
    classNamelunbo(){
        switch(this.props.match.params.myid){
                case "20":return (<div className="swiper-wrapper">
                    <div className="swiper-slide">
                        <div className={this.state.currentIndex===1?claobj.calcli:claobj.caldiv}  onClick={this.handleClick.bind(this,1)}>All</div>
                    </div>
                     <div className="swiper-slide">
                        <div className={this.state.currentIndex===2?claobj.calcli:claobj.caldiv}  onClick={this.handleClick.bind(this,2)}>沙发</div>
                     </div>
                     <div className="swiper-slide">
                        <div  className={this.state.currentIndex===3?claobj.calcli:claobj.caldiv}  onClick={this.handleClick.bind(this,3)}>椅凳</div>
                     </div>
                     <div className="swiper-slide">
                        <div  className={this.state.currentIndex===4?claobj.calcli:claobj.caldiv}  onClick={this.handleClick.bind(this,4)}>桌几</div>
                     </div>
                     <div className="swiper-slide">
                        <div  className={this.state.currentIndex===5?claobj.calcli:claobj.caldiv}  onClick={this.handleClick.bind(this,5)}>床</div>
                     </div>
                     <div className="swiper-slide">
                        <div  className={this.state.currentIndex===6?claobj.calcli:claobj.caldiv}  onClick={this.handleClick.bind(this,6)}>柜架</div>
                     </div>
                     <div className="swiper-slide">
                        <div  className={this.state.currentIndex===7?claobj.calcli:claobj.caldiv}  onClick={this.handleClick.bind(this,7)}>餐桌</div>
                     </div>
                     <div className="swiper-slide">
                        <div  className={this.state.currentIndex===8?claobj.calcli:claobj.caldiv}  onClick={this.handleClick.bind(this,8)}>茶几和边桌</div>
                     </div>
                     <div className="swiper-slide">
                         <div  className={this.state.currentIndex===9?claobj.calcli:claobj.caldiv}  onClick={this.handleClick.bind(this,9)}>书桌</div>
                     </div>
                     <div className="swiper-slide">
                        <div  className={this.state.currentIndex===10?claobj.calcli:claobj.caldiv}  onClick={this.handleClick.bind(this,10)}>隔断</div>
                     </div>
                </div>);
                 case "21":return (<div className="swiper-wrapper">
                    <div className="swiper-slide">
                        <div className={this.state.currentIndex===1?claobj.calcli:claobj.caldiv}  onClick={this.handleClick.bind(this,1)}>All</div>
                    </div>
                     <div className="swiper-slide">
                        <div className={this.state.currentIndex===2?claobj.calcli:claobj.caldiv}  onClick={this.handleClick.bind(this,2)}>沙发</div>
                     </div>
                     <div className="swiper-slide">
                        <div  className={this.state.currentIndex===3?claobj.calcli:claobj.caldiv}  onClick={this.handleClick.bind(this,3)}>椅凳</div>
                     </div>
                     <div className="swiper-slide">
                        <div  className={this.state.currentIndex===4?claobj.calcli:claobj.caldiv}  onClick={this.handleClick.bind(this,4)}>桌几</div>
                     </div>
                     <div className="swiper-slide">
                        <div  className={this.state.currentIndex===5?claobj.calcli:claobj.caldiv}  onClick={this.handleClick.bind(this,5)}>床</div>
                     </div>
                     <div className="swiper-slide">
                        <div  className={this.state.currentIndex===6?claobj.calcli:claobj.caldiv}  onClick={this.handleClick.bind(this,6)}>柜架</div>
                     </div>
                     <div className="swiper-slide">
                        <div  className={this.state.currentIndex===7?claobj.calcli:claobj.caldiv}  onClick={this.handleClick.bind(this,7)}>餐桌</div>
                     </div>
                     <div className="swiper-slide">
                        <div  className={this.state.currentIndex===8?claobj.calcli:claobj.caldiv}  onClick={this.handleClick.bind(this,8)}>茶几和边桌</div>
                     </div>
                     <div className="swiper-slide">
                         <div  className={this.state.currentIndex===9?claobj.calcli:claobj.caldiv}  onClick={this.handleClick.bind(this,9)}>书桌</div>
                     </div>
                     <div className="swiper-slide">
                        <div  className={this.state.currentIndex===10?claobj.calcli:claobj.caldiv}  onClick={this.handleClick.bind(this,10)}>隔断</div>
                     </div>
                </div>);
                 case "22":return (<div className="swiper-wrapper">
                     <div className="swiper-slide">
                        <div className={this.state.currentIndex===1?claobj.calcli:claobj.caldiv}  onClick={this.handleClick.bind(this,1)}>All</div>
                    </div>
                     <div className="swiper-slide">
                        <div className={this.state.currentIndex===2?claobj.calcli:claobj.caldiv}  onClick={this.handleClick.bind(this,2)}>沙发</div>
                     </div>
                     <div className="swiper-slide">
                        <div  className={this.state.currentIndex===3?claobj.calcli:claobj.caldiv}  onClick={this.handleClick.bind(this,3)}>椅凳</div>
                     </div>
                     <div className="swiper-slide">
                        <div  className={this.state.currentIndex===4?claobj.calcli:claobj.caldiv}  onClick={this.handleClick.bind(this,4)}>桌几</div>
                     </div>
                     <div className="swiper-slide">
                        <div  className={this.state.currentIndex===5?claobj.calcli:claobj.caldiv}  onClick={this.handleClick.bind(this,5)}>床</div>
                     </div>
                     <div className="swiper-slide">
                        <div  className={this.state.currentIndex===6?claobj.calcli:claobj.caldiv}  onClick={this.handleClick.bind(this,6)}>柜架</div>
                     </div>
                     <div className="swiper-slide">
                        <div  className={this.state.currentIndex===7?claobj.calcli:claobj.caldiv}  onClick={this.handleClick.bind(this,7)}>餐桌</div>
                     </div>
                     <div className="swiper-slide">
                        <div  className={this.state.currentIndex===8?claobj.calcli:claobj.caldiv}  onClick={this.handleClick.bind(this,8)}>茶几和边桌</div>
                     </div>
                     <div className="swiper-slide">
                         <div  className={this.state.currentIndex===9?claobj.calcli:claobj.caldiv}  onClick={this.handleClick.bind(this,9)}>书桌</div>
                     </div>
                     <div className="swiper-slide">
                        <div  className={this.state.currentIndex===10?claobj.calcli:claobj.caldiv}  onClick={this.handleClick.bind(this,10)}>隔断</div>
                     </div>
                </div>);
                 case "2310":return (<div className="swiper-wrapper">
                    <div className="swiper-slide">
                        <div className={this.state.currentIndex===1?claobj.calcli:claobj.caldiv}  onClick={this.handleClick.bind(this,1)}>All</div>
                    </div>
                     <div className="swiper-slide">
                        <div className={this.state.currentIndex===2?claobj.calcli:claobj.caldiv}  onClick={this.handleClick.bind(this,2)}>沙发</div>
                     </div>
                     <div className="swiper-slide">
                        <div  className={this.state.currentIndex===3?claobj.calcli:claobj.caldiv}  onClick={this.handleClick.bind(this,3)}>椅凳</div>
                     </div>
                     <div className="swiper-slide">
                        <div  className={this.state.currentIndex===4?claobj.calcli:claobj.caldiv}  onClick={this.handleClick.bind(this,4)}>桌几</div>
                     </div>
                     <div className="swiper-slide">
                        <div  className={this.state.currentIndex===5?claobj.calcli:claobj.caldiv}  onClick={this.handleClick.bind(this,5)}>床</div>
                     </div>
                     <div className="swiper-slide">
                        <div  className={this.state.currentIndex===6?claobj.calcli:claobj.caldiv}  onClick={this.handleClick.bind(this,6)}>柜架</div>
                     </div>
                     <div className="swiper-slide">
                        <div  className={this.state.currentIndex===7?claobj.calcli:claobj.caldiv}  onClick={this.handleClick.bind(this,7)}>餐桌</div>
                     </div>
                     <div className="swiper-slide">
                        <div  className={this.state.currentIndex===8?claobj.calcli:claobj.caldiv}  onClick={this.handleClick.bind(this,8)}>茶几和边桌</div>
                     </div>
                     <div className="swiper-slide">
                         <div  className={this.state.currentIndex===9?claobj.calcli:claobj.caldiv}  onClick={this.handleClick.bind(this,9)}>书桌</div>
                     </div>
                     <div className="swiper-slide">
                        <div  className={this.state.currentIndex===10?claobj.calcli:claobj.caldiv}  onClick={this.handleClick.bind(this,10)}>隔断</div>
                     </div>
                </div>);
                 case "24":return(<div className="swiper-wrapper">
                     <div className="swiper-slide">
                        <div className={this.state.currentIndex===1?claobj.calcli:claobj.caldiv}  onClick={this.handleClick.bind(this,1)}>All</div>
                    </div>
                     <div className="swiper-slide">
                        <div className={this.state.currentIndex===2?claobj.calcli:claobj.caldiv}  onClick={this.handleClick.bind(this,2)}>沙发</div>
                     </div>
                     <div className="swiper-slide">
                        <div  className={this.state.currentIndex===3?claobj.calcli:claobj.caldiv}  onClick={this.handleClick.bind(this,3)}>椅凳</div>
                     </div>
                     <div className="swiper-slide">
                        <div  className={this.state.currentIndex===4?claobj.calcli:claobj.caldiv}  onClick={this.handleClick.bind(this,4)}>桌几</div>
                     </div>
                     <div className="swiper-slide">
                        <div  className={this.state.currentIndex===5?claobj.calcli:claobj.caldiv}  onClick={this.handleClick.bind(this,5)}>床</div>
                     </div>
                     <div className="swiper-slide">
                        <div  className={this.state.currentIndex===6?claobj.calcli:claobj.caldiv}  onClick={this.handleClick.bind(this,6)}>柜架</div>
                     </div>
                     <div className="swiper-slide">
                        <div  className={this.state.currentIndex===7?claobj.calcli:claobj.caldiv}  onClick={this.handleClick.bind(this,7)}>餐桌</div>
                     </div>
                     <div className="swiper-slide">
                        <div  className={this.state.currentIndex===8?claobj.calcli:claobj.caldiv}  onClick={this.handleClick.bind(this,8)}>茶几和边桌</div>
                     </div>
                     <div className="swiper-slide">
                         <div  className={this.state.currentIndex===9?claobj.calcli:claobj.caldiv}  onClick={this.handleClick.bind(this,9)}>书桌</div>
                     </div>
                     <div className="swiper-slide">
                        <div  className={this.state.currentIndex===10?claobj.calcli:claobj.caldiv}  onClick={this.handleClick.bind(this,10)}>隔断</div>
                     </div>
                </div>);
                 case "2210":return(<div className="swiper-wrapper">
                     <div className="swiper-slide">
                        <div className={this.state.currentIndex===1?claobj.calcli:claobj.caldiv}  onClick={this.handleClick.bind(this,1)}>All</div>
                    </div>
                     <div className="swiper-slide">
                        <div className={this.state.currentIndex===2?claobj.calcli:claobj.caldiv}  onClick={this.handleClick.bind(this,2)}>沙发</div>
                     </div>
                     <div className="swiper-slide">
                        <div  className={this.state.currentIndex===3?claobj.calcli:claobj.caldiv}  onClick={this.handleClick.bind(this,3)}>椅凳</div>
                     </div>
                     <div className="swiper-slide">
                        <div  className={this.state.currentIndex===4?claobj.calcli:claobj.caldiv}  onClick={this.handleClick.bind(this,4)}>桌几</div>
                     </div>
                     <div className="swiper-slide">
                        <div  className={this.state.currentIndex===5?claobj.calcli:claobj.caldiv}  onClick={this.handleClick.bind(this,5)}>床</div>
                     </div>
                     <div className="swiper-slide">
                        <div  className={this.state.currentIndex===6?claobj.calcli:claobj.caldiv}  onClick={this.handleClick.bind(this,6)}>柜架</div>
                     </div>
                     <div className="swiper-slide">
                        <div  className={this.state.currentIndex===7?claobj.calcli:claobj.caldiv}  onClick={this.handleClick.bind(this,7)}>餐桌</div>
                     </div>
                     <div className="swiper-slide">
                        <div  className={this.state.currentIndex===8?claobj.calcli:claobj.caldiv}  onClick={this.handleClick.bind(this,8)}>茶几和边桌</div>
                     </div>
                     <div className="swiper-slide">
                         <div  className={this.state.currentIndex===9?claobj.calcli:claobj.caldiv}  onClick={this.handleClick.bind(this,9)}>书桌</div>
                     </div>
                     <div className="swiper-slide">
                        <div  className={this.state.currentIndex===10?claobj.calcli:claobj.caldiv}  onClick={this.handleClick.bind(this,10)}>隔断</div>
                     </div>
                </div>);
                 case "2211":return(<div className="swiper-wrapper">
                     <div className="swiper-slide">
                        <div className={this.state.currentIndex===1?claobj.calcli:claobj.caldiv}  onClick={this.handleClick.bind(this,1)}>All</div>
                    </div>
                     <div className="swiper-slide">
                        <div className={this.state.currentIndex===2?claobj.calcli:claobj.caldiv}  onClick={this.handleClick.bind(this,2)}>沙发</div>
                     </div>
                     <div className="swiper-slide">
                        <div  className={this.state.currentIndex===3?claobj.calcli:claobj.caldiv}  onClick={this.handleClick.bind(this,3)}>椅凳</div>
                     </div>
                     <div className="swiper-slide">
                        <div  className={this.state.currentIndex===4?claobj.calcli:claobj.caldiv}  onClick={this.handleClick.bind(this,4)}>桌几</div>
                     </div>
                     <div className="swiper-slide">
                        <div  className={this.state.currentIndex===5?claobj.calcli:claobj.caldiv}  onClick={this.handleClick.bind(this,5)}>床</div>
                     </div>
                     <div className="swiper-slide">
                        <div  className={this.state.currentIndex===6?claobj.calcli:claobj.caldiv}  onClick={this.handleClick.bind(this,6)}>柜架</div>
                     </div>
                     <div className="swiper-slide">
                        <div  className={this.state.currentIndex===7?claobj.calcli:claobj.caldiv}  onClick={this.handleClick.bind(this,7)}>餐桌</div>
                     </div>
                     <div className="swiper-slide">
                        <div  className={this.state.currentIndex===8?claobj.calcli:claobj.caldiv}  onClick={this.handleClick.bind(this,8)}>茶几和边桌</div>
                     </div>
                     <div className="swiper-slide">
                         <div  className={this.state.currentIndex===9?claobj.calcli:claobj.caldiv}  onClick={this.handleClick.bind(this,9)}>书桌</div>
                     </div>
                     <div className="swiper-slide">
                        <div  className={this.state.currentIndex===10?claobj.calcli:claobj.caldiv}  onClick={this.handleClick.bind(this,10)}>隔断</div>
                     </div>
                </div>);
                 case "2212":return(<div className="swiper-wrapper">
                     <div className="swiper-slide">
                        <div className={this.state.currentIndex===1?claobj.calcli:claobj.caldiv}  onClick={this.handleClick.bind(this,1)}>All</div>
                    </div>
                     <div className="swiper-slide">
                        <div className={this.state.currentIndex===2?claobj.calcli:claobj.caldiv}  onClick={this.handleClick.bind(this,2)}>沙发</div>
                     </div>
                     <div className="swiper-slide">
                        <div  className={this.state.currentIndex===3?claobj.calcli:claobj.caldiv}  onClick={this.handleClick.bind(this,3)}>椅凳</div>
                     </div>
                     <div className="swiper-slide">
                        <div  className={this.state.currentIndex===4?claobj.calcli:claobj.caldiv}  onClick={this.handleClick.bind(this,4)}>桌几</div>
                     </div>
                     <div className="swiper-slide">
                        <div  className={this.state.currentIndex===5?claobj.calcli:claobj.caldiv}  onClick={this.handleClick.bind(this,5)}>床</div>
                     </div>
                     <div className="swiper-slide">
                        <div  className={this.state.currentIndex===6?claobj.calcli:claobj.caldiv}  onClick={this.handleClick.bind(this,6)}>柜架</div>
                     </div>
                     <div className="swiper-slide">
                        <div  className={this.state.currentIndex===7?claobj.calcli:claobj.caldiv}  onClick={this.handleClick.bind(this,7)}>餐桌</div>
                     </div>
                     <div className="swiper-slide">
                        <div  className={this.state.currentIndex===8?claobj.calcli:claobj.caldiv}  onClick={this.handleClick.bind(this,8)}>茶几和边桌</div>
                     </div>
                     <div className="swiper-slide">
                         <div  className={this.state.currentIndex===9?claobj.calcli:claobj.caldiv}  onClick={this.handleClick.bind(this,9)}>书桌</div>
                     </div>
                     <div className="swiper-slide">
                        <div  className={this.state.currentIndex===10?claobj.calcli:claobj.caldiv}  onClick={this.handleClick.bind(this,10)}>隔断</div>
                     </div>
                </div>);
                 case "2414":return(<div className="swiper-wrapper">
                     <div className="swiper-slide">
                        <div className={this.state.currentIndex===1?claobj.calcli:claobj.caldiv}  onClick={this.handleClick.bind(this,1)}>All</div>
                    </div>
                     <div className="swiper-slide">
                        <div className={this.state.currentIndex===2?claobj.calcli:claobj.caldiv}  onClick={this.handleClick.bind(this,2)}>沙发</div>
                     </div>
                     <div className="swiper-slide">
                        <div  className={this.state.currentIndex===3?claobj.calcli:claobj.caldiv}  onClick={this.handleClick.bind(this,3)}>椅凳</div>
                     </div>
                     <div className="swiper-slide">
                        <div  className={this.state.currentIndex===4?claobj.calcli:claobj.caldiv}  onClick={this.handleClick.bind(this,4)}>桌几</div>
                     </div>
                     <div className="swiper-slide">
                        <div  className={this.state.currentIndex===5?claobj.calcli:claobj.caldiv}  onClick={this.handleClick.bind(this,5)}>床</div>
                     </div>
                     <div className="swiper-slide">
                        <div  className={this.state.currentIndex===6?claobj.calcli:claobj.caldiv}  onClick={this.handleClick.bind(this,6)}>柜架</div>
                     </div>
                     <div className="swiper-slide">
                        <div  className={this.state.currentIndex===7?claobj.calcli:claobj.caldiv}  onClick={this.handleClick.bind(this,7)}>餐桌</div>
                     </div>
                     <div className="swiper-slide">
                        <div  className={this.state.currentIndex===8?claobj.calcli:claobj.caldiv}  onClick={this.handleClick.bind(this,8)}>茶几和边桌</div>
                     </div>
                     <div className="swiper-slide">
                         <div  className={this.state.currentIndex===9?claobj.calcli:claobj.caldiv}  onClick={this.handleClick.bind(this,9)}>书桌</div>
                     </div>
                     <div className="swiper-slide">
                        <div  className={this.state.currentIndex===10?claobj.calcli:claobj.caldiv}  onClick={this.handleClick.bind(this,10)}>隔断</div>
                     </div>
                </div>);
                 case "25":return(<div className="swiper-wrapper">
                     <div className="swiper-slide"><div className={this.state.currentIndex===1?claobj.calcli:claobj.caldiv}  onClick={this.handleClick.bind(this,1)}>All</div></div>
                     <div className="swiper-slide"><div className={this.state.currentIndex===2?claobj.calcli:claobj.caldiv}  onClick={this.handleClick.bind(this,2)}>落地灯</div></div>
                     <div className="swiper-slide"><div className={this.state.currentIndex===3?claobj.calcli:claobj.caldiv}  onClick={this.handleClick.bind(this,3)}>吊灯</div></div>
                     <div className="swiper-slide"><div className={this.state.currentIndex===4?claobj.calcli:claobj.caldiv}  onClick={this.handleClick.bind(this,4)}>氛围灯</div></div>
                     <div className="swiper-slide"><div className={this.state.currentIndex===5?claobj.calcli:claobj.caldiv}  onClick={this.handleClick.bind(this,5)}>台灯</div></div>
                     <div className="swiper-slide"><div className={this.state.currentIndex===6?claobj.calcli:claobj.caldiv}  onClick={this.handleClick.bind(this,6)}>灯泡和配件</div></div>
                </div>);
                 case "26":return(<div className="swiper-wrapper">
                     <div className="swiper-slide"><div className={this.state.currentIndex===1?claobj.calcli:claobj.caldiv}  onClick={this.handleClick.bind(this,1)}>All</div></div>
                     <div className="swiper-slide"><div className={this.state.currentIndex===2?claobj.calcli:claobj.caldiv}  onClick={this.handleClick.bind(this,2)}>餐具</div></div>
                     <div className="swiper-slide"><div className={this.state.currentIndex===3?claobj.calcli:claobj.caldiv}  onClick={this.handleClick.bind(this,3)}>餐桌布置</div></div>
                     <div className="swiper-slide"><div className={this.state.currentIndex===4?claobj.calcli:claobj.caldiv}  onClick={this.handleClick.bind(this,4)}>咖啡和茶</div></div>
                     <div className="swiper-slide"><div className={this.state.currentIndex===5?claobj.calcli:claobj.caldiv}  onClick={this.handleClick.bind(this,5)}>酒具</div></div>
                </div>);
                 case "32":return (<div className="swiper-wrapper">
                     <div className="swiper-slide"><div className={this.state.currentIndex===1?claobj.calcli:claobj.caldiv}  onClick={this.handleClick.bind(this,1)}>All</div></div>
                     <div className="swiper-slide"><div className={this.state.currentIndex===2?claobj.calcli:claobj.caldiv}  onClick={this.handleClick.bind(this,2)}>生活用品</div></div>
                     <div className="swiper-slide"><div className={this.state.currentIndex===3?claobj.calcli:claobj.caldiv}  onClick={this.handleClick.bind(this,3)}>首饰</div></div>
                     <div className="swiper-slide"><div className={this.state.currentIndex===4?claobj.calcli:claobj.caldiv}  onClick={this.handleClick.bind(this,4)}>箱包</div></div>
                     <div className="swiper-slide"><div className={this.state.currentIndex===5?claobj.calcli:claobj.caldiv}  onClick={this.handleClick.bind(this,5)}>雨伞</div></div>
                     <div className="swiper-slide"><div className={this.state.currentIndex===6?claobj.calcli:claobj.caldiv}  onClick={this.handleClick.bind(this,6)}>电子</div></div>
                     <div className="swiper-slide"><div className={this.state.currentIndex===7?claobj.calcli:claobj.caldiv}  onClick={this.handleClick.bind(this,7)}>个人护理</div></div>
                     <div className="swiper-slide"><div className={this.state.currentIndex===8?claobj.calcli:claobj.caldiv}  onClick={this.handleClick.bind(this,8)}>文具</div></div>
                     <div className="swiper-slide"><div className={this.state.currentIndex===9?claobj.calcli:claobj.caldiv}  onClick={this.handleClick.bind(this,9)}>手表</div></div>

                </div>);
                 case "29":return(<div className="swiper-wrapper">
                     <div className="swiper-slide"><div className={this.state.currentIndex===1?claobj.calcli:claobj.caldiv}  onClick={this.handleClick.bind(this,1)}>All</div></div>
                     <div className="swiper-slide"><div className={this.state.currentIndex===2?claobj.calcli:claobj.caldiv}  onClick={this.handleClick.bind(this,2)}>时钟</div></div>
                     <div className="swiper-slide"><div className={this.state.currentIndex===3?claobj.calcli:claobj.caldiv}  onClick={this.handleClick.bind(this,3)}>墙饰</div></div>
                     <div className="swiper-slide"><div className={this.state.currentIndex===4?claobj.calcli:claobj.caldiv}  onClick={this.handleClick.bind(this,4)}>摆件</div></div>
                     <div className="swiper-slide"><div className={this.state.currentIndex===5?claobj.calcli:claobj.caldiv}  onClick={this.handleClick.bind(this,5)}>香薰蜡烛</div></div>
                     <div className="swiper-slide"><div className={this.state.currentIndex===6?claobj.calcli:claobj.caldiv}  onClick={this.handleClick.bind(this,6)}>花瓶花盆</div></div>
                    <div className="swiper-slide"><div className={this.state.currentIndex===7?claobj.calcli:claobj.caldiv}  onClick={this.handleClick.bind(this,7)}>镜子</div></div>
                     <div className="swiper-slide"><div className={this.state.currentIndex===8?claobj.calcli:claobj.caldiv}  onClick={this.handleClick.bind(this,8)}>挂画</div></div>
               </div>);
                 case "31":return(<div className="swiper-wrapper">
                     <div className="swiper-slide"><div className={this.state.currentIndex===1?claobj.calcli:claobj.caldiv}  onClick={this.handleClick.bind(this,1)}>All</div></div>
                     <div className="swiper-slide"><div className={this.state.currentIndex===2?claobj.calcli:claobj.caldiv}  onClick={this.handleClick.bind(this,2)}>浴室家具</div></div>
                     <div className="swiper-slide"><div className={this.state.currentIndex===3?claobj.calcli:claobj.caldiv}  onClick={this.handleClick.bind(this,3)}>浴室用品</div></div>
                    
                </div>);
                 case "27":return(<div className="swiper-wrapper">
                     <div className="swiper-slide"><div className={this.state.currentIndex===1?claobj.calcli:claobj.caldiv}  onClick={this.handleClick.bind(this,1)}>All</div></div>
                     <div className="swiper-slide"><div className={this.state.currentIndex===2?claobj.calcli:claobj.caldiv}  onClick={this.handleClick.bind(this,2)}>锅具</div></div>
                     <div className="swiper-slide"><div className={this.state.currentIndex===3?claobj.calcli:claobj.caldiv}  onClick={this.handleClick.bind(this,3)}>厨房用具</div></div>
                     <div className="swiper-slide"><div className={this.state.currentIndex===4?claobj.calcli:claobj.caldiv}  onClick={this.handleClick.bind(this,4)}>烘焙器具</div></div>
                </div>);
                 case "28":return(<div className="swiper-wrapper">
                     <div className="swiper-slide"><div className={this.state.currentIndex===1?claobj.calcli:claobj.caldiv}  onClick={this.handleClick.bind(this,1)}>All</div></div>
                     <div className="swiper-slide"><div className={this.state.currentIndex===2?claobj.calcli:claobj.caldiv}  onClick={this.handleClick.bind(this,2)}>地毯</div></div>
                     <div className="swiper-slide"><div className={this.state.currentIndex===3?claobj.calcli:claobj.caldiv}  onClick={this.handleClick.bind(this,3)}>靠垫抱枕</div></div>
                     <div className="swiper-slide"><div className={this.state.currentIndex===4?claobj.calcli:claobj.caldiv}  onClick={this.handleClick.bind(this,4)}>床上用品</div></div>
                     <div className="swiper-slide"><div className={this.state.currentIndex===5?claobj.calcli:claobj.caldiv}  onClick={this.handleClick.bind(this,5)}>毛衣织物</div></div>
                </div>);
                 default:return null;
            }
    };
    handleClick(index){
        this.setState({
            currentIndex:index
        })
    }
    handleClickClass(){

    }

}
export default classNameDetail;