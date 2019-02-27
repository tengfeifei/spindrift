import React from 'react'
import { List } from 'antd-mobile';
import 'antd-mobile/dist/antd-mobile.css';
import objf from "./class.module.scss"

const Item = List.Item;
const Brief = Item.Brief;

class Class extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            disabled: false,
        } 
    }
    

    render(){
        return (
            <div className={objf.classfurn}>
              <img src="/static/furniture.png" className={objf.furn}/>      
              <List  className="my-list">
                <Item arrow="horizontal" multipleLine onClick={this.handleClick.bind(this,20)}>
                   <Brief ref={this.id}>沙发</Brief>
                </Item>
                <Item arrow="horizontal" multipleLine onClick={this.handleClick.bind(this,21)}>
                  <Brief ref={this.id}>椅凳</Brief>
                </Item>
                <Item arrow="horizontal" multipleLine onClick={this.handleClick.bind(this,22)}>
                  <Brief ref="mycontent">桌几</Brief>
                </Item>
                <Item arrow="horizontal" multipleLine onClick={this.handleClick.bind(this,2310)}>
                  <Brief ref="mycontent">床</Brief>
                </Item>
                <Item arrow="horizontal" multipleLine onClick={this.handleClick.bind(this,24)}>
                  <Brief ref="mycontent">柜架</Brief>
                </Item>
                <Item arrow="horizontal" multipleLine onClick={this.handleClick.bind(this,2210)}>
                  <Brief ref="mycontent">餐桌</Brief>
                </Item>
                <Item arrow="horizontal" multipleLine onClick={this.handleClick.bind(this,2211)}>
                  <Brief ref="mycontent">茶几和边桌</Brief>
                </Item>
                <Item arrow="horizontal" multipleLine onClick={this.handleClick.bind(this,2212)}>
                  <Brief ref="mycontent">书桌</Brief>
                </Item>
                <Item arrow="horizontal" multipleLine onClick={this.handleClick.bind(this,2414)}>
                  <Brief ref="mycontent">隔断</Brief>
                </Item>
              </List>
             <img src="/static/household.png" className={objf.furn}/>      
              <List  className="my-list">
                <Item arrow="horizontal" multipleLine onClick={this.handleClick.bind(this,25)}>
                   <Brief ref="mycontent">灯具</Brief>
                </Item>
                <Item arrow="horizontal" multipleLine onClick={this.handleClick.bind(this,26)}>
                  <Brief ref="mycontent">用餐</Brief>
                </Item>
                <Item arrow="horizontal" multipleLine onClick={this.handleClick.bind(this,32)}>
                  <Brief ref="mycontent">时尚生活</Brief>
                </Item>
                <Item arrow="horizontal" multipleLine onClick={this.handleClick.bind(this,27)}>
                  <Brief ref="mycontent">烹饪</Brief>
                </Item>
                <Item arrow="horizontal" multipleLine onClick={this.handleClick.bind(this,28)}>
                  <Brief ref="mycontent">纺织品</Brief>
                </Item>
                <Item arrow="horizontal" multipleLine onClick={this.handleClick.bind(this,29)}>
                  <Brief ref="mycontent">家饰</Brief>
                </Item>
                <Item arrow="horizontal" multipleLine  onClick={this.handleClick.bind(this,31)}>
                  <Brief ref="mycontent">卫浴</Brief>
                </Item>
                <Item arrow="horizontal" multipleLine>
                  <Brief></Brief>
                </Item>
                <Item arrow="horizontal" multipleLine>
                  <Brief></Brief>
                </Item>

              </List>
            </div>
            )
    }
    handleClick(id){
        console.log(id);
        console.log(this.refs.id)
        this.props.history.push(`/category/${id}`)
    }
}
export default Class;
