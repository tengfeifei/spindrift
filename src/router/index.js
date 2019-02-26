import {HashRouter , Route ,Switch , Redirect} from 'react-router-dom'
import React from 'react'
import App from '../App'
import List from '../views/list/list'
import Detail from '../views/detail/detail'
import Class from '../views/class/class'
import Index from '../views/index/index'
var router=(
	<HashRouter>
		<App>
			<Switch>
				<Route path='/list' component={List}></Route>
				<Route path='/detail' component={Detail}></Route>
				<Route path='/index' component={Index}></Route>
				<Route path='/class' component={Class}></Route>
				<Redirect from='*' to='/index'></Redirect>
			</Switch>
		</App>
	</HashRouter>

)
export default router
