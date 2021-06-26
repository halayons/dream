import './styles.scss';
import React from 'react';
import { Footer, Header } from '../landingPage';
import { NavBar} from './navbar';
import { Report} from './report';
import Cookies from 'js-cookie';


export class Mod extends React.Component {

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

	render() {
		return (
            
			<div>
				<Header></Header>
				<NavBar></NavBar>
				<Footer></Footer>
			</div>
		);
	}
}