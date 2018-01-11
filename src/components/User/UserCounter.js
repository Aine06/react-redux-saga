import React, { Component} from 'react';
import { Button } from 'antd';

export default class Counter extends Component{
	constructor(props){
		super();
		this.state ={}
	}
	render(){
		return(
		 <div>
			    <Button onClick={this.props.onIncrementAsync}>
			      增加一秒以后
			    </Button>
			    {' '}
			    <Button onClick={this.props.onIncrement}>
			      增加
			    </Button>
			    {' '}
			    <Button onClick={this.props.onDecrement}>
			     减量
			    </Button>
			    <hr />
			    <div>
			      Clicked: {this.props.value} times
			    </div>
		  </div>
		)
	}
}
