import React, { Component} from 'react';
import './MainLayout.css';
import Header from './Header';

class MainLayout extends Component{

	constructor(props){
		super();
		this.state ={}
	}

	render(){
		const{children ,location } = this.props
		return(
			 <div className="MainLayout">
			      <Header location={location} />
			      <div className="content">
			        <div className="main">
			          {children}
			        </div>
			      </div>
		    </div>
			)
	}
}


export default MainLayout;