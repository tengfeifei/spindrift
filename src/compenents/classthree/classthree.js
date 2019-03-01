import React from 'react'
import axios from 'axios';
import claobjth from './classthree.module.scss';
// import store from '../../store/store.js'
class Three extends React.Component{
    constructor(props){
        super(props);
        this.state={
            classthlist:[],
            // myid:store.getState().listReducer

        }
    };
    componentDidMount(){
        // store.subscribe(()=>{
        //     this.setState={
        //         // myid:store.getState().listReducer
        //     }
        // })
        axios({
            url:`/pages/category/${this.props.match.params.myid}?currentPage=1&sort=price&order=asc&_=1551263551296`
        }).then(res=>{
            
            this.setState({
                classthlist:res.data.data
            })
        });
    }; 
    render(){
        return <div>
            <ul className={claobjth.imgul}>
                 {
                    this.state.classthlist?
                    this.state.classthlist.map((item)=>
                        <li key={item.parentProductId} onClick={this.handleClickClassth.bind(this)}>
                            <img src={item.productImg}/>
                            <p className={claobjth.clap}>{item.productTitle}</p>
                            <span>¥{item.sellPrice}</span>
                            <p className={claobjth.claname}>{item.prizeOrSlogan} </p>
                        </li>
                        )
                    :null
                }
            </ul>

        </div>
    }
    handleClickClassth(){

    }
}

export default Three