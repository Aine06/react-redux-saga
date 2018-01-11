import { createStore, applyMiddleware ,combineReducers  } from 'redux'
import createSagaMiddleware from 'redux-saga'

import { routerReducer as router, routerMiddleware } from 'react-router-redux'

import createHistory from 'history/createHashHistory'

// import { historyStart } from './history'

import  Counter from '../reducers/Counter'
import  Login from '../reducers/Login'
import  User from '../reducers/User'

import  rootSaga from '../sagas/sagas'
import  Loginsaga from '../sagas/Login'
import  Usersaga from '../sagas/User'

export const history = createHistory()

const middleware = routerMiddleware(history)
const sagaMiddleware = createSagaMiddleware()


const store = createStore(
    combineReducers({
        Counter,
        Login,
        User,
        router
    }),
    applyMiddleware(sagaMiddleware, middleware),
)

  // historyStart(store)

  sagaMiddleware.run(rootSaga);
  
  sagaMiddleware.run(Loginsaga);

  sagaMiddleware.run(Usersaga);

export default store;

export function setupreact(ops={}){
  const history = createHistory()
  const sction = store;

  const oldListen = history.listen;

  history.listen = (callback) => {
  	console.log(history.location)
    callback(history.location);
    return oldListen.call(history, callback);
  };
 
  return history
}

