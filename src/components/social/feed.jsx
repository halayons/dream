import './style.scss';
import React from 'react';
import { Post } from './post';


export class Feed extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div class="posts">
				{
					this.props.posts.map(post =>
						<Post post={post}></Post>
					)
				}
			</div>
		);
	}
}