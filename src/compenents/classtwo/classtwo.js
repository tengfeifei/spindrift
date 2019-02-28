import React from 'react'
import axios from 'axios';
import claobjtw from './classtwo.module.scss';
class Two extends React.Component{
    constructor(props){
        super(props);
        this.state={
            classtwlist:[]

        }
    };
    componentDidMount(){
        axios({
            url:`/pages/category/20?currentPage=1&sort=sales&order=desc&_=1551263551296`
        }).then(res=>{
        
            this.setState({
                classtwlist:res.data.data
            })
        });
    };
    render(){
        return <div>
            <ul className={claobjtw.imgul}>
                 {
                    this.state.classtwlist?
                    this.state.classtwlist.map((item)=>
                        <li key={item.parentProductId} onClick={this.handleClickClasstw.bind(this)}>
                            <img src={item.productImg}/>
                            <p className={claobjtw.clap}>{item.productTitle}</p>
                            <span>¥{item.sellPrice}</span>
                            <p className={claobjtw.claname}>{item.prizeOrSlogan} </p>
                        </li>
                        )
                    :null
                }
            </ul>

        </div>
    }
    handleClickClasstw(){

    }
}

export default Two