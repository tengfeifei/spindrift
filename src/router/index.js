import {HashRouter , Route ,Switch , Redirect} from 'react-router-dom'
import React from 'react'
import App from '../App'
import List from '../views/list/list'
import Detail from '../views/detail/detail'
import Class from '../views/class/class'
import Index from '../views/index/index'
import Info from '../views/info/info'
import Shopping from '../views/shopping/shopping'
import ClassDetail from '../views/classDetail/classdetail'
import Homefurnishing from '../views/homefurnishing/homefurnishing'
import Home from '../views/home/home'
var router=(
	<HashRouter>
		<App>
			<Switch>
				<Route path='/list' component={List}></Route>
				<Route path='/detail/:myid/:id/:index' component={Detail}></Route>
				<Route path='/index' component={Index}></Route>
				<Route path='/class' component={Class}></Route>
				<Route path='/info' component={Info}></Route>
				<Route path='/shopping' component={Shopping}></Route>
				<Route path='/home' component={Home}></Route>
				<Route path='/category/:myid' component={ClassDetail}></Route>
				<Redirect from='*' to='/index'></Redirect>
				<Route path='/homefurnishing' component={Homefurnishing}></Route>
			</Switch>
		</App>
	</HashRouter>

)
export default router
