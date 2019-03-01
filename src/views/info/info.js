import React from 'react';
import ReactDom from 'react-dom'
import obj from './info.module.scss'
class Info extends React.Component{


	render(){
		return <div className={obj.body}>
            <div className={obj.compass_container}>
              <div className={obj.outside_circle}>
                <div className={obj.center}></div>
                <div className={obj.outside_filling}>
                  <div className={obj.top_point}></div>
                  <div className={obj.bottom_point}></div>
                  <div className={obj.left_point}></div>
                  <div className={obj.right_point}></div>
                </div>
                <div className={obj.inner_circle}>
                  <div className={obj.inner_filling}>
                    <span>N</span>
                    <span>E</span>
                    <span>S</span>
                    <span>W</span>
                    <div className={obj.needle}>
                      <div className={obj.top_needle}>
                        <div className={obj.needle_inside}></div>
                      </div>
                      <div className={obj.bottom_needle}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <h3 className={obj.not_north}>未完待续。。。</h3>
		</div>
	}
}

export default Info