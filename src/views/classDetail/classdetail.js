import React,{Component} from "react";
import Narbar from '../../compenents/navbar/navbar'
import ReactSwipe from 'react-swipe';
import claobj from './classdetail.module.scss';
import Swiper from 'swiper'
let reactSwipeEl;
 var swiper = new Swiper('.swiper-container', {
      slidesPerView: 3,
      spaceBetween: 30,
      freeMode: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });
class ClassDetail extends Component{
    constructor(props){
        super(props);
        this.state={
        }
    }
    render(){
        return <div>
            <Narbar></Narbar>
            <div className={claobj.cadiv}>      
            {
                this.classlunbo()                  
            }
            <div class="swiper-container">
                <div class="swiper-wrapper">
                  <div class="swiper-slide">Slide 1</div>
                  <div class="swiper-slide">Slide 2</div>
                  <div class="swiper-slide">Slide 3</div>
                  <div class="swiper-slide">Slide 4</div>
                  <div class="swiper-slide">Slide 5</div>
                  <div class="swiper-slide">Slide 6</div>
                  <div class="swiper-slide">Slide 7</div>
                  <div class="swiper-slide">Slide 8</div>
                  <div class="swiper-slide">Slide 9</div>
                  <div class="swiper-slide">Slide 10</div>
                </div>
                <div class="swiper-pagination"></div>
            </div>
            </div>
        </div>
    };
    classlunbo(){
        switch(this.props.match.params.myid){
                case "20":return (<ReactSwipe
                  className="carousel"
                  className={claobj.carou}
                  swipeOptions={{ continuous: true}}
                  ref={el => (reactSwipeEl = el)}
                >
                     <div className={claobj.diav}>All</div>
                     <div className={claobj.diav}>沙发</div>
                     <div className={claobj.diav}>椅凳</div>
                     <div className={claobj.diav}>桌几</div>
                     <div className={claobj.diav}>床</div>
                     <div className={claobj.diav}>柜架</div>
                     <div className={claobj.diav}>餐桌</div>
                     <div className={claobj.diav}>茶几和边桌</div>
                     <div className={claobj.diav}>书桌</div>
                     <div className={claobj.diav}>隔断</div>
                </ReactSwipe>);
                 case "21":return (<ReactSwipe
                  className="carousel"
                  className={claobj.carou}
                  swipeOptions={{ continuous: true}}
                  ref={el => (reactSwipeEl = el)}
                >
                     <div className={claobj.diav}>All</div>
                     <div className={claobj.diav}>沙发</div>
                     <div className={claobj.diav}>椅凳</div>
                     <div className={claobj.diav}>桌几</div>
                     <div className={claobj.diav}>床</div>
                     <div className={claobj.diav}>柜架</div>
                     <div className={claobj.diav}>餐桌</div>
                     <div className={claobj.diav}>茶几和边桌</div>
                     <div className={claobj.diav}>书桌</div>
                     <div className={claobj.diav}>隔断</div>
                </ReactSwipe>);
                 case "22":return (<ReactSwipe
                  className="carousel"
                  className={claobj.carou}
                  swipeOptions={{ continuous: true}}
                  ref={el => (reactSwipeEl = el)}
                >
                     <div className={claobj.diav}>All</div>
                     <div className={claobj.diav}>沙发</div>
                     <div className={claobj.diav}>椅凳</div>
                     <div className={claobj.diav}>桌几</div>
                     <div className={claobj.diav}>床</div>
                     <div className={claobj.diav}>柜架</div>
                     <div className={claobj.diav}>餐桌</div>
                     <div className={claobj.diav}>茶几和边桌</div>
                     <div className={claobj.diav}>书桌</div>
                     <div className={claobj.diav}>隔断</div>
                </ReactSwipe>);
                 case "2310":return (<ReactSwipe
                  className="carousel"
                  className={claobj.carou}
                  swipeOptions={{ continuous: true}}
                  ref={el => (reactSwipeEl = el)}
                >
                     <div className={claobj.diav}>All</div>
                     <div className={claobj.diav}>沙发</div>
                     <div className={claobj.diav}>椅凳</div>
                     <div className={claobj.diav}>桌几</div>
                     <div className={claobj.diav}>床</div>
                     <div className={claobj.diav}>柜架</div>
                     <div className={claobj.diav}>餐桌</div>
                     <div className={claobj.diav}>茶几和边桌</div>
                     <div className={claobj.diav}>书桌</div>
                     <div className={claobj.diav}>隔断</div>
                </ReactSwipe>);
                 case "24":return(<ReactSwipe
                  className="carousel"
                  className={claobj.carou}
                  swipeOptions={{ continuous: true}}
                  ref={el => (reactSwipeEl = el)}
                >
                     <div className={claobj.diav}>All</div>
                     <div className={claobj.diav}>沙发</div>
                     <div className={claobj.diav}>椅凳</div>
                     <div className={claobj.diav}>桌几</div>
                     <div className={claobj.diav}>床</div>
                     <div className={claobj.diav}>柜架</div>
                     <div className={claobj.diav}>餐桌</div>
                     <div className={claobj.diav}>茶几和边桌</div>
                     <div className={claobj.diav}>书桌</div>
                     <div className={claobj.diav}>隔断</div>
                </ReactSwipe>);
                 case "2210":return(<ReactSwipe
                  className="carousel"
                  className={claobj.carou}
                  swipeOptions={{ continuous: true}}
                  ref={el => (reactSwipeEl = el)}
                >
                    <div className={claobj.diav}>All</div>
                     <div className={claobj.diav}>沙发</div>
                     <div className={claobj.diav}>椅凳</div>
                     <div className={claobj.diav}>桌几</div>
                     <div className={claobj.diav}>床</div>
                     <div className={claobj.diav}>柜架</div>
                     <div className={claobj.diav}>餐桌</div>
                     <div className={claobj.diav}>茶几和边桌</div>
                     <div className={claobj.diav}>书桌</div>
                     <div className={claobj.diav}>隔断</div>
                </ReactSwipe>);
                 case "2211":return(<ReactSwipe
                  className="carousel"
                  className={claobj.carou}
                  swipeOptions={{ continuous: true}}
                  ref={el => (reactSwipeEl = el)}
                >
                     <div className={claobj.diav}>All</div>
                     <div className={claobj.diav}>沙发</div>
                     <div className={claobj.diav}>椅凳</div>
                     <div className={claobj.diav}>桌几</div>
                     <div className={claobj.diav}>床</div>
                     <div className={claobj.diav}>柜架</div>
                     <div className={claobj.diav}>餐桌</div>
                     <div className={claobj.diav}>茶几和边桌</div>
                     <div className={claobj.diav}>书桌</div>
                     <div className={claobj.diav}>隔断</div>
                </ReactSwipe>);
                 case "2212":return(<ReactSwipe
                  className="carousel"
                  className={claobj.carou}
                  swipeOptions={{ continuous: true}}
                  ref={el => (reactSwipeEl = el)}
                >
                     <div className={claobj.diav}>All</div>
                     <div className={claobj.diav}>沙发</div>
                     <div className={claobj.diav}>椅凳</div>
                     <div className={claobj.diav}>桌几</div>
                     <div className={claobj.diav}>床</div>
                     <div className={claobj.diav}>柜架</div>
                     <div className={claobj.diav}>餐桌</div>
                     <div className={claobj.diav}>茶几和边桌</div>
                     <div className={claobj.diav}>书桌</div>
                     <div className={claobj.diav}>隔断</div>
                </ReactSwipe>);
                 case "2414":return(<ReactSwipe
                  className="carousel"
                  className={claobj.carou}
                  swipeOptions={{ continuous: true}}
                  ref={el => (reactSwipeEl = el)}
                >
                     <div className={claobj.diav}>All</div>
                     <div className={claobj.diav}>沙发</div>
                     <div className={claobj.diav}>椅凳</div>
                     <div className={claobj.diav}>桌几</div>
                     <div className={claobj.diav}>床</div>
                     <div className={claobj.diav}>柜架</div>
                     <div className={claobj.diav}>餐桌</div>
                     <div className={claobj.diav}>茶几和边桌</div>
                     <div className={claobj.diav}>书桌</div>
                     <div className={claobj.diav}>隔断</div>
                </ReactSwipe>);
                 case "25":return(<ReactSwipe
                  className="carousel"
                  className={claobj.carou}
                  swipeOptions={{ continuous: true}}
                  ref={el => (reactSwipeEl = el)}
                > 
                     <div className={claobj.diav}>All</div>
                     <div className={claobj.diav}>落地灯</div>
                     <div className={claobj.diav}>吊灯</div>
                     <div className={claobj.diav}>氛围灯</div>
                     <div className={claobj.diav}>台灯</div>
                     <div className={claobj.diav}>灯泡和配件</div>
                </ReactSwipe>);
                 case "26":return(<ReactSwipe
                  className="carousel"
                  className={claobj.carou}
                  swipeOptions={{ continuous: true}}
                  ref={el => (reactSwipeEl = el)}
                > 
                     <div className={claobj.diav}>All</div>
                     <div className={claobj.diav}>餐具</div>
                     <div className={claobj.diav}>餐桌布置</div>
                     <div className={claobj.diav}>咖啡和茶</div>
                     <div className={claobj.diav}>酒具</div>
                </ReactSwipe>);
                 case "32":return (<ReactSwipe
                  className="carousel"
                  className={claobj.carou}
                  swipeOptions={{ continuous: true}}
                  ref={el => (reactSwipeEl = el)}
                >
                     <div className={claobj.diav}>All</div>
                     <div className={claobj.diav}>生活用品</div>
                     <div className={claobj.diav}>首饰</div>
                     <div className={claobj.diav}>箱包</div>
                     <div className={claobj.diav}>雨伞</div>
                     <div className={claobj.diav}>电子</div>
                     <div className={claobj.diav}>个人护理</div>
                     <div className={claobj.diav}>文具</div>
                     <div className={claobj.diav}>手表</div>

                </ReactSwipe>);
                 case "29":return(<ReactSwipe
                  className="carousel"
                  className={claobj.carou}
                  swipeOptions={{ continuous: true}}
                  ref={el => (reactSwipeEl = el)}
                > 
                     <div className={claobj.diav}>All</div>
                     <div className={claobj.diav}>时钟</div>
                     <div className={claobj.diav}>墙饰</div>
                     <div className={claobj.diav}>摆件</div>
                     <div className={claobj.diav}>香薰蜡烛</div>
                     <div className={claobj.diav}>花瓶花盆</div>
                    <div className={claobj.diav}>镜子</div>
                     <div className={claobj.diav}>挂画</div>
               </ReactSwipe>);
                 case "31":return(<ReactSwipe
                  className="carousel"
                  className={claobj.carou}
                  swipeOptions={{ continuous: true}}
                  ref={el => (reactSwipeEl = el)}
                > 
                     <div className={claobj.diav}>All</div>
                     <div className={claobj.diav}>浴室家具</div>
                     <div className={claobj.diav}>浴室用品</div>
                    
                </ReactSwipe>);
                 case "27":return(<ReactSwipe
                  className="carousel"
                  className={claobj.carou}
                  swipeOptions={{ continuous: true}}
                  ref={el => (reactSwipeEl = el)}
                > 
                     <div className={claobj.diav}>All</div>
                     <div className={claobj.diav}>锅具</div>
                     <div className={claobj.diav}>厨房用具</div>
                     <div className={claobj.diav}>烘焙器具</div>
                </ReactSwipe>);
                 case "28":return(<ReactSwipe
                  className="carousel"
                  className={claobj.carou}
                  swipeOptions={{ continuous: true}}
                  ref={el => (reactSwipeEl = el)}
                >
                     <div className={claobj.diav}>All</div>
                     <div className={claobj.diav}>地毯</div>
                     <div className={claobj.diav}>靠垫抱枕</div>
                     <div className={claobj.diav}>床上用品</div>
                     <div className={claobj.diav}>毛衣织物</div>
                </ReactSwipe>);
                 default:return null;
            }
    }
}
export default ClassDetail;