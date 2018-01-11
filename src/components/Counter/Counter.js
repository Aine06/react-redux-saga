import React, { Component} from 'react';
import { connect } from 'react-redux'
import UserCounter from './UserCounter'

class Counter extends Component {
	 constructor(props) {
		    super(props);
		    this.state = {
		    };
  		}

  render() {  
  	const{dispatch,list} = this.props
  	const action = type =>dispatch({type})

  	let value = list
    return (
      <div className="User">
       	<span>Users</span>

       	<UserCounter
	      value={value}
	      onIncrement={() => action('Hellosaga')}
	      onDecrement={() => action('DECREMENT')}
	      onIncrementAsync={() => {action('INCREMENT_ASYNC')}} />,
      </div>
    );
  }
}


function mapStateToProps(state) {
  return state

}

export default connect(mapStateToProps)(Counter);

