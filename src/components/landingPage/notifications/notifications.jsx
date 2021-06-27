import '../style.scss';
import React from 'react';

export class Notifications extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			notification: ''
		}
	}

	render() {
		return (

			<div className="row">
				<div className="collapse multi-collapse " id="notification">
					<div>
						{
							this.props.notifications.map(message => {
								return <p>{JSON.stringify(message)}</p>
							})
						}
					</div>
				</div>
			</div>

		);
	}
}