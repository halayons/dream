import './style.scss';
import React from 'react';
import { Feed } from './feed';
import { CreatePost } from './createPost';


export class Social extends React.Component {

	constructor() {
		super();

		this.attrs = {
			1: "likes",
			2: "published_date",
		}

		this.order = {
			asc: "",
			desc: "-"
		}

		this.state = {
			attr: this.attrs[2],
			count: 20,
			order: this.order.desc,
			posts: []
		};

		this.update = this.update.bind(this)
	}

	componentDidMount() {
		this.loadPosts()
	}

	loadPosts() {
		fetch("http://localhost:8000/social/all_posts/" + this.state.order + this.state.attr + "/" + this.state.count)
			.then(response => response.json())
			.then(json => this.setState({
				posts: json
			}))
			.catch(error => console.log(error));
	}

	update() {
		this.loadPosts()
	}

	render() {
		return (
			<div>
				<CreatePost update={this.update} />
				<Feed posts={this.state.posts} />
			</div>
		);
	}
}