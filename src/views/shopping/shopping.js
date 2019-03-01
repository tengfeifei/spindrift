import React from 'react'
import box from './shopping.module.scss'
class Shopping extends React.Component{

	render(){
		return <div className={box.body}>
            <div className={box.box_ghost_container} style={{marginTop: '150px'}}>
                  <div className={box.box_ghost_eyes} style={{transform: 'translate(-36.5989%, -1.4218%)'}}>
                    <div className={box.box_eye_left}></div>
                    <div className={box.box_eye_right}></div>
                  </div>
                  <div className={box.box_ghost_bottom}>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                  </div>
            </div>
            <div>
                <h3 className={box.classw}>未完待续。。。</h3>
            </div>
		</div>
	}
}

export default Shopping