import React from 'react'
import detail from './detail.module.scss';

class Detail extends React.Component{

	render(){
		return( 
		<div className={detail.detail}>
			<div className={detail.head}>商品详情</div>
			Detail
			<div className={detail.soloDisplay}>
				<img src="https://img.wowdsgn.com/product/images/542687a4-e79b-4b69-81e0-8db05c8b51a3.jpg?imageView2/1/w/414/h/331"/>
				<div>
					<p id={detail.headProductTitle}>PRO-W 木脚椅 白色</p>
					<span>￥2370</span>
				</div>
			</div>
			<div id={detail.designerBrandDiv}></div>
			<div class={detail.videoCon}>
{/*			     <video class={detail.productIntroductionVideos} img-src="https://img.wowdsgn.com/product/introduction/f6d23ca8-7e41-4bdc-abe5-2fa1eae9e3cb_2dimension_900x600.jpg" width="100%" height="100%" controls="" preload="auto" poster="data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVQImWNgYGBgAAAABQABh6FO1AAAAABJRU5ErkJggg==" style="background: url(&quot;https://img.wowdsgn.com/product/introduction/f6d23ca8-7e41-4bdc-abe5-2fa1eae9e3cb_2dimension_900x600.jpg?imageView2/1/w/375/h/210&quot;) 0px 0px / cover no-repeat transparent;">
			        <source src="https://img.wowdsgn.com/product/video/d66bfff7-c574-48fa-9cc9-6173329cb7cf_2dimension.mp4" type="video/mp4"/>
			     </video>*/}
			     <video src="https://img.wowdsgn.com/product/video/d66bfff7-c574-48fa-9cc9-6173329cb7cf_2dimension.mp4" controls="controls">
					your browser does not support the video tag
				 </video>
			</div>
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
}

export default Detail