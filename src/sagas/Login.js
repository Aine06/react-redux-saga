import { call, put, all,takeEvery  } from 'redux-saga/effects'
import Alert from '../services/alert';
import * as loginService from '../services/login';


function* login({payload}) {
	try{
		let values = payload;
		const { data} = yield call(loginService.login, values);
		if(data && data.token){
			localStorage.setItem("userId", data.userId)
			localStorage.setItem("token", data.token)	
			  	yield put({ 
			  		type: 'HELLOLOGIN' ,
			  		payload: data
			  	})

			  }else if(data && data.status !== 200) {
			  	Alert.alert(data.errMsg || "登录错误，请重试")		  	
			  }
	  }catch(e){
	  	console.log(e+"Login")
	  }
}


function* LoginAsync() {
  yield takeEvery('LOGIN_ASYNC', login)
}

export default function* Loginsaga() {
  yield all([
     LoginAsync()
  ])
}
