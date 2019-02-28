import React from 'react'
import axios from 'axios';
import claobjon from './classone.module.scss';
class One extends React.Component{
    constructor(props){
        super(props);
        this.state={
            classonelist:[]

        }
    };
    componentDidMount(){
        axios({
            url:`/pages/category/20?currentPage=1&sort=onShelfTime&order=desc&_=1551263551296`
        }).then(res=>{
            
            this.setState({
                classonelist:res.data.data
            })
        });
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