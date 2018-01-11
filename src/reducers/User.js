

const UserState = {
    initData: {
        page: 1,
        limit: 10
    },
    GetUser:[]
};

export default function User(state = UserState, action){

	const { type, payload } = action;
    switch(type){
        case "HellOUSER":
         	state = {
                ...state,
                GetUser: payload
            }
            return state
        default:
            return state
    }

}
