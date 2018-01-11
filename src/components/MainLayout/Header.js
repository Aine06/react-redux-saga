import React, { Component} from 'react';
import { Menu, Icon } from 'antd';
import {  Link } from 'react-router-dom'

class Header extends Component {
	render(){
		const{location } = this.props
		return(
				<Menu
				      selectedKeys={[location.pathname]}
				      mode="horizontal"
				      theme="dark"
				    >
				      <Menu.Item key="/users">
				        <Link to="/users"><Icon type="bars" />Users</Link>
				      </Menu.Item>
				      <Menu.Item key="/counter">
				        <Link to="/counter"><Icon type="bars" />counter</Link>
				      </Menu.Item>
				      <Menu.Item key="/">
				        <Link to="/"><Icon type="home" />Home</Link>
				      </Menu.Item>
				      <Menu.Item key="/login">
				        <Link to="/login"><Icon type="login" />login</Link>
				      </Menu.Item>
			    </Menu>
			)
	}
}


export default Header;