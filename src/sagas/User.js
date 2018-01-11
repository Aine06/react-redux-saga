// import queryString from 'query-string';
// import { takeEvery } from 'redux-saga'

import { put,all,call,takeEvery} from 'redux-saga/effects'

import { setupreact} from '../store/store'

import * as usersService from '../services/user';




export function* userlist() {
	try {
			var page = 3 ;
			const getuserId = localStorage.getItem('userId');
			const gettoken = localStorage.getItem('token');
			const { data} = yield call(usersService.fetchs, page,getuserId,gettoken);
		  	yield put({ type: 'HellOUSER' ,payload: data})
	} catch(e) {
		console.log(e+"+||+"+"User");
	}


}

function* UserAsync() {
  yield takeEvery('USER_ASYNC', userlist)
}


function* setup(dispatch) {
	const history = setupreact();
	// const {location} = history;
	// const {pathname} =  location
	// if (pathname === "/users") {
 //        	yield put({ type: 'USER_ASYNC' });

 //        }


    yield takeEvery('@@router/LOCATION_CHANGE', function* ({payload }) {

        const { pathname } = payload;

        if (pathname === "/users") {

        	yield put({ type: 'USER_ASYNC' });

        }

    })
}

export default function* Usersaga() {
  yield all([
     UserAsync(),
     setup()
  ])
}



// const history = setupreact();
// const oldListen = history.listen;

// if(history.location.pathname ==="/users"){
// 	console.log('???')
// }