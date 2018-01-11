const defaultState = {
    initData: {
        page: 1,
        limit: 10
    },
    customearray:[]
};

const Counter = (state = defaultState,action)=>{
    const { type, payload } = action;
    switch(type){
        case "INCREMENT_ASYNC":
         	return Object.assign({}, state, {
         		...state,
        		globalData: payload
  			});
           
        default:
            return state
    }

}



export default Counter