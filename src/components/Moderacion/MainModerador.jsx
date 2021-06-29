import './styles.scss';
import React from 'react';
import { Footer, Header } from '../landingPage';
import { NavBar} from './navbar';
import { Report} from './report';
import Cookies from 'js-cookie';


export class Mod extends React.Component {

	ws = new WebSocket("ws://localhost:8000/ws/socialGeneral/")

	constructor() {
		super();

		this.attrs = {
			1: "reported",
			2: "published_date",
		}

		this.order = {
			asc: "",
			desc: "-"
		}

		this.state = {
			attr: this.attrs[1],
			count: 20,
			order: this.order.desc,
			posts: []
		};

		this.update = this.update.bind(this)
	}

	componentDidMount() {
		this.loadPosts()

		this.ws.onopen = evt => this.send();
		this.ws.onclose = evt => window.location.reload();
		this.ws.onmessage = evt => this.loadPosts();
		this.ws.onerror = evt => console.log(JSON.stringify(evt));
	}

	loadPosts() {
		const requestOptions = {
			method: 'GET',
			headers: {
			  // 'Content-Type': 'application/json',
			  'X-CSRFToken': Cookies.get('csrftoken')
			},
			credentials: "include",
		  };
		  fetch('http://localhost:8000/social/all_posts/', requestOptions)
			.then(response => response.json())
			.then(json => this.setState({
			  posts: json
			}))
			.catch(error => console.log(error));
	}

	update() {
		this.loadPosts()
	}

	send() {
		this.ws.send(JSON.stringify({
			type: "subscribe",
			id: new Date().getTime(),
			action: 'list',
			model: "social.Post"
		}))
	}

	render() {
		return (
            
			<div>
				<NavBar></NavBar>
			</div>
		);
	}
}