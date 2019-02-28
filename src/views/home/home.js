import React from 'react'
import home from './home.module.scss'
class Home extends React.Component{
	constructor(props){
		super(props);
		this.state={
			isShow:false
		}
	}

	render(){
		return <div>
		<ul className={home.header}>
		    <a className={home.toindex}>
		    	<img src="/static/home.png"/>	
		    </a>
		    <h3>登录</h3>
		    <a className={home.toregister}>注册</a>

		</ul>
		<div className={home.homebox}>
			<ul className={home.boxHead}>
			    <li  onClick={this.handleClick.bind(this)}><div className={this.state.isShow?'':home.active}>密码登录</div></li>	
			    <li  onClick={this.handleClick.bind(this)}><div className={this.state.isShow?home.active:''} >短信登录</div></li>	
			</ul>
			<div className={home.inputinfo}>
			   {
			   	this.state.isShow?
			   	<div>
			   		<div className={home.phone}>
			   			<input type="text"  placeholder="请输入手机号"/>
			   		</div>
			   		<div className={home.password}>
			   		    <input type="password" placeholder="请输入验证码"/>
			   		    <p className={home.forget}>获取验证码</p>
			   		</div>

			   	</div>:null
			   }
			
				{
					this.state.isShow?null
					:<div>
						<div className={home.phone}>
							<input type="text"  placeholder="请输入手机号"/>
						</div>
						<div className={home.password}>
						    <input type="password" placeholder="请输入密码"/>
						    <p className={home.forget}>忘记密码?</p>
						</div>
					</div>
				}
			</div>
			
		</div>
		<div className={home.confirm}>
		   确认
		</div>
       {
       	this.state.isShow?null
	    :<p className={home.remeber}>√一个月内记住登录</p>
       	
       }

	    <p className={home.fastregister}>快速注册</p>
	</div>
	}
	handleClick(){
		this.setState({
			isShow:!this.state.isShow
		})
	}
}

export default Home