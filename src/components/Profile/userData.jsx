import React from "react";

export class UserData extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="card">
				<div className="user_data">
					<div class = "div_image">
					<img clasName="img_profile" src ={this.props.user.foto}></img>
					</div>
					<div className = "div_text">
						<p>Informacion Aqui</p>
					</div>
				</div>
			</div>
		);
	}
}
