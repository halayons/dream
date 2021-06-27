import './style.scss';
import React from 'react';
import { Feed } from './feed';
import { CreatePost } from './createPost';
import { Footer, Header } from '../landingPage';


export class Social extends React.Component {

	ws = new WebSocket("ws://localhost:8000/postWS/")

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

		//this.ws.onopen = evt => this.send(); 
		//this.ws.onclose = evt => window.location.reload(); 
		//this.ws.onmessage = evt => this.loadPosts();
		//this.ws.onerror = evt => console.log(JSON.stringify(evt)); 
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

	send(){
		this.ws.send(JSON.stringify({
			action: "subscribe_to_post_activity",
			request_id: new Date().getTime(),
		}))
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