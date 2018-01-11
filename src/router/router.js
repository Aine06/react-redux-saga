import React, { Component } from 'react';
import { Provider } from 'react-redux';

import store, { history } from '../store/store'

import { checkPathname, checkToken } from './routerData'

import { 
  // Router,
  Route,
  Switch,
  // BrowserRouter
 } from 'react-router-dom'

import { ConnectedRouter } from 'react-router-redux'

import AsyncComponent from'./AsyncComponent'

import MainLayout from '../components/MainLayout/MainLayout';

const routerObject = [
 {
    path: "/counter",
    component: AsyncComponent(()=>import('../components/Counter/Counter'))
  },
   {
    path: "/users",
    component: AsyncComponent(()=>import('../components/User/User'))
  },
   {
    path: "/login",
    component: AsyncComponent(()=>import('../components/Login/Login'))
  },
]


class router extends Component {


  render() {
    return (
		<Provider store={store}>
	      	<ConnectedRouter history={history}>
  			     <Switch>
    			    	<MainLayout>
    					    {routerObject.map(result => (
    				            <Route exact key={result.path} path={result.path} component={result.component} />
    				         ))}
    				    </MainLayout>
  		      	</Switch>
			  </ConnectedRouter>
	   </Provider>
    );
  }
}

export default router;


// history.listen(location => {
//     const { pathname } = location;
//      console.log(checkToken());
//      console.log(pathname)

//      console.log(checkPathname.indexOf(pathname));

//     if (!checkToken() && checkPathname.indexOf(pathname) >= 0) {
//         console.log("我也不是很懂")
//         // history.replace('login')

//     }
// })
//  