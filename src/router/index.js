import {HashRouter , Route ,Switch , Redirect} from 'react-router-dom'
import React from 'react'
import App from '../App'
import List from '../views/list/list'
import Detail from '../views/detail/detail'
import Class from '../views/class/class'
import Index from '../views/index/index'
import Info from '../views/info/info'
import Shopping from '../views/shopping/shopping'
<<<<<<< HEAD
import Home from '../views/home/home'
import ClassDetail from '../views/classDetail/classdetail'

<<<<<<< HEAD
=======
=======
import Homefurnishing from '../views/homefurnishing/homefurnishing'
>>>>>>> 900c032a0fc111b189cc8fcc5f9c7cd326e668a6
>>>>>>> b7bdf9795659d1b170ed18d160ed080438560c0b
var router=(
	<HashRouter>
		<App>
			<Switch>
				<Route path='/list' component={List}></Route>
				<Route path='/detail' component={Detail}></Route>
				<Route path='/index' component={Index}></Route>
				<Route path='/class' component={Class}></Route>
				<Route path='/info' component={Info}></Route>
				<Route path='/shopping' component={Shopping}></Route>
<<<<<<< HEAD
				<Route path='/home' component={Home}></Route>
<<<<<<< HEAD
				<Route path='/category/:myid' component={ClassDetail}></Route>
				<Redirect from='/' to='/index' exact></Redirect>
=======
			    <Route path='/category/:myid' component={ClassDetail}></Route>
				<Redirect from='/' to='/index' exact></Redirect>
=======
				<Route path='/homefurnishing' component={Homefurnishing}></Route>
				<Redirect from='*' to='/index'></Redirect>
>>>>>>> 900c032a0fc111b189cc8fcc5f9c7cd326e668a6
>>>>>>> b7bdf9795659d1b170ed18d160ed080438560c0b
			</Switch>
		</App>
	</HashRouter>

)
export default router
