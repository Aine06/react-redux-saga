import React, { Component} from 'react';
import { connect } from 'react-redux'
import './Login.css';
import LoginForm from './LoginForm';

class Login extends Component{
	constructor(props) {
		    super(props);
		    this.state = {
		    };
  		}
		loginUserList = (values) => { 
		  	this.props.dispatch({
		  		type:'LOGIN_ASYNC',
		  		payload:values
				})		
		}

	render(){
		const { status ,succMsg} = this.props;

		if(succMsg === "登陆成功" && status === 200){
			this.props.history.push('/users')

		}	
		return(
				<div className="login">
					<div className="create">
						<LoginForm onOkList={this.loginUserList}>
					    </LoginForm> 
				    </div>	    
			    </div>
			)
	}
}


function mapStateToProps(state) {
	const {status,succMsg} = state.Login.login;
	return {
	  	status,
	  	succMsg
	}

}

export default connect(mapStateToProps)(Login);
