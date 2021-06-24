
import React from 'react';



export class Test extends React.Component {
	ws = new WebSocket("ws://localhost:8000/ws/")

	constructor(props) {
		super(props);
		this.send = this.send.bind(this)
	}

	componentDidMount(){
		this.ws.onopen = evt => { console.log("open") }; 

		this.ws.onclose = evt => { console.log('disconnected') }; 

		this.ws.onmessage = evt => { 
			const message = JSON.parse(evt.data)
			this.setState({dataFromServer: message})
			console.log(message) 
		}; 

		this.ws.onerror = evt => { console.log(JSON.stringify(evt)) }; 
	}

	send(){
		this.ws.send(JSON.stringify({
			action: "subscribe_to_pedido_activity",
			request_id: new Date().getTime(),
		}))
	}

	render() {
		return (
			<div>
				<button onClick = {this.send}></button>
			</div>
		);
	}
}