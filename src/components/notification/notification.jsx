import React from "react";

import ReactNotification from 'react-notifications-component'
import 'react-notifications-component/dist/theme.css'

import { store } from 'react-notifications-component';
import Cookies from 'js-cookie';

export class Notification extends React.Component {

	constructor(props) {
		super(props);
		this.state={
			mensaje:"notificacion 1"
		}
		
	}

	componentDidMount() {
		this.reload();
	}

	addNFT(message) {
		store.addNotification({
			title: "Nuevo pedido",
			message: message.user + " realizo un nuevo pedido",
			type: "success",
			insert: "top",
			container: "bottom-right",
			animationIn: ["animate__animated", "animate__fadeIn"],
			animationOut: ["animate__animated", "animate__fadeOut"],
			dismiss: {
				duration: 5000,
				onScreen: true
			}
		});
	}

	reload() {
		this.ws = new WebSocket("ws://localhost:8000/postUser/")

		this.ws.onopen = evt => {
			console.log("open");
			// this.send();
		};

		this.ws.onclose = evt => {
			console.log('disconnected reloadiong')
			if(Cookies.get('sessionid') != undefined) this.reload()
		};

		this.ws.onmessage = evt => {
			const message = JSON.parse(evt.data)
			this.setState({ dataFromServer: message })
			this.addNFT(message);
		};

		this.ws.onerror = evt => { console.log(JSON.stringify(evt)) };
	}
	sendData=(e)=>{
		const {putData} =this.props;
		if(putData!=undefined){
			putData(this.state);
			console.log("funcionando");
			e.preventDefault();
         	e.stopPropagation();
		}
		
	}

	render() {
		this.sendData.bind(this);
		return (
			<ReactNotification />
		);
	}
}
