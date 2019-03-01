import React from 'react'
import axios from 'axios';
import claobjon from './classone.module.scss';
import { PullToRefresh, Button } from 'antd-mobile';
import store from '../../store/store.js'

class One extends React.Component{
    constructor(props){
        super(props);
        this.state={
            classonelist:[],

            myid:store.getState().listReducer
        }
    };
    componentDidMount(){
        // this.props.myid
        store.subscribe(()=>{
            // this.setState={
            //     myid:store.getState().listReducer
            // }
            axios({
                url:`/pages/category/${store.getState().listReducer}?currentPage=1&sort=onShelfTime&order=desc&_=1551263551296`
            }).then(res=>{
                
                this.setState({
                    classonelist:res.data.data
                })
            })
            })
        axios({
                url:`/pages/category/${store.getState().listReducer}?currentPage=1&sort=onShelfTime&order=desc&_=1551263551296`
            }).then(res=>{
                
                this.setState({
                    classonelist:res.data.data
                })
        })
        

    };
    render(){
        return <div>
            <ul className={claobjon.imgul}>
                 {
                    this.state.classonelist?
                    this.state.classonelist.map((item)=>
                        <li key={item.parentProductId} onClick={this.handleClickonClass.bind(this)}>
                            <img src={item.productImg}/>
                            <p className={claobjon.clap}>{item.productTitle}</p>
                            <span>¥{item.sellPrice}</span>
                            <p className={claobjon.claname}>{item.prizeOrSlogan} </p>
                        </li>
                        )
                    :null
                }
            </ul>
        </div>
    }
    handleClickonClass(){

    }
}

export default One