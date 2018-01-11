
const loginState={
	login:[],
}
export default function Login(state = loginState,action){
	const { type, payload } = action;
    switch(type){
        case "HELLOLOGIN":
        	state = {
                ...state,
                login: payload
            }
        default:
            return state;

    }

}

