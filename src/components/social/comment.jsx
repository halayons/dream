import './style.scss';
import React from 'react';

export class Comment extends React.Component{

	constructor(props){
		super(props);
		this.state = {};
	}

	render(){
		return  (
			<div class = "comment">{JSON.stringify(this.props.comment)}</div>
		);
	}
}