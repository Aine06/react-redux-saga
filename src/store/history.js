// 尝试 pass
import createHistory from 'history/createHashHistory'

import { checkPathname, checkToken } from '../router/routerData'

const setUp = {
    '/users': menucb,
    '/customerList': customerList
}

const pathArray = Object.keys(setUp);


const history = createHistory();


export const historyStart = (store) => {
	
	console.log(history.location)

     history.listen(location => {

        const { pathname } = location;

        if (!checkToken() && checkPathname.indexOf(pathname) >= 0) {
        	console.log('history + 111')
            history.replace('login')
        }
        if (pathArray.indexOf(pathname) > 0) {
        	console.log('history + 222')
            setUp[pathname](store);
        }
    })
}

export default history;


function menucb() {

}

function customerList(store) {

}