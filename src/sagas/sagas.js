import { put,all ,takeEvery} from 'redux-saga/effects'

//import Api from '...'

export function* helloSaga() {
  var a = {
    list : 20
  }
  yield put({ type: 'Hellosaga' ,payload: a})
  // console.log('第一条测试Hello Sagas!');
}


export function* mySaga() {
  // console.log('第二条测试mySaga')
 
}

function* incrementAsync() {
  var a = {
    list : 30
  }
  console.log('111')
  yield put({ type: 'INCREMENT' ,payload: a})
}


function* watchIncrementAsync() {
  yield takeEvery('INCREMENT_ASYNC', incrementAsync)
}

export default function* rootSaga() {
  yield all([
    helloSaga(),
    mySaga(),
    watchIncrementAsync()
  ])
}

