import React from "react";

export class UserData extends React.Component {

	render() {
		return (
			<div className="card">
				<div className="user_data">
					<div class = "div_image">
					<img clasName="img_profile" src ="..\src\media\img\Cake1.jpg"></img>
					</div>
					<div className = "div_text">
						<p>Informacion Aqui</p>
					</div>
				</div>
			</div>
		);
	}
}
