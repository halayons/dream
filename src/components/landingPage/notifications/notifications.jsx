import '../style.scss';
import React from 'react';

export class Notifications extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			notifications: []
		}
	}


	render() {
		let news =this.props.notifications;
		let mensaje = '';
		if(news.length>0){
			
			return (
				<div className="text-wrap ">
					{
					news.forEach(message => {
						console.log(message.instance)
						if(message.instance.aceptado =="false" )mensaje='no ';
						<div className="col-lg-4 col-sm-4 col-4 ">
							<img src={message.instance.foto} alt="" />
							<p className="text-wrap">Su pedido {mensaje}fue aceptado</p>
							<span>ID  pedido:{message.instance.idpedido}</span>
						</div>
					}) }
				</div>
			);
		
		}else return (
				<span className="l">No hay notificaciones</span>
		);
		
	}
}