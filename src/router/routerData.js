export const checkPathname = [
    '/users'
]
export const pathObject = {
    '/menu':"经纪人系统|二当家"
}

export const checkToken = () => {
	const token = localStorage.getItem('token');
	const userId = localStorage.getItem('userId'),

	validTime = 60*60*12*1000,
  	currentTime = new Date().getTime();


    if(!token || !userId ||!parseInt(token,10)){
        console.log('111')
        return false;
    } 
    
    const checkTime = currentTime - parseInt(token,10);
    console.log(checkTime)
    console.log(validTime)

    if(checkTime<=validTime){
        return true;

    }else{
    	console.log('333')
        return false;
    }
  }