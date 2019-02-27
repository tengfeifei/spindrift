import { NavBar, Icon } from 'antd-mobile';
import React,{Component} from 'react';


class Navbar extends Component{
  render(){
    return <div>
        <NavBar
        mode="light"
        icon={<Icon type="left" />}
        onLeftClick={() => console.log('onLeftClick')}
        rightContent={[
          <Icon key="1" type="ellipsis" />,
        ]}
        >
          spindrift
        </NavBar>
    </div>
  }
}
export default Navbar;