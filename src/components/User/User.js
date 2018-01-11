import React, { Component} from 'react';
import { connect } from 'react-redux'
import { Table, Popconfirm, Button} from 'antd';
import  "./Users.css"

import UserModal from './UserModal';



class User extends Component{
	constructor(props){
		super();

	}

	componentWillMount=()=>{

	}

	createHandler=(e)=>{
		console.log(e);
	}

	deleteHandler=(e)=>{
		console.log(e)
	}

	render(){
		const {GetUser} = this.props;

		const columns = [
			    {
			      title: 'Name',
			      dataIndex: 'name',
			      key: 'name',
			      render: text => <a href={text}>{text}</a>,
			    },
			    {
			      title: 'Email',
			      dataIndex: 'email',
			      key: 'email',
			    },
			    {
			      title: 'Website',
			      dataIndex: 'website',
			      key: 'website',
			    },
			    {
			      title: 'Operation',
			      key: 'operation',
			       render: (text, record) => (
			        <span className="operation">
				        <UserModal record={{}} onOk={this.createHandler}>
		            		<a href="">编辑</a>
		           		</UserModal>
			        
			          <Popconfirm title="确认删除吗?" onConfirm={this.deleteHandler}>
			            <a href="">删除</a>
			          </Popconfirm>
			        </span>
			      ),
			    },
		  ];

		return(
				<div className="User">
					<div className="Usercreate" >
						 <UserModal record={{}} onOk={this.createHandler}>
		            		<Button type="primary">Create User</Button>
		           		</UserModal>
	           		</div>

	           		 <Table
				          columns={columns}
				          dataSource={GetUser.data}
				          rowKey={record => record._id}
				        />
				</div>
			)
	}

}

function mapStateToProps(state) {

	const { GetUser} = state.User
	
	return{
		GetUser
	}
	
}

export default connect(mapStateToProps)(User);

