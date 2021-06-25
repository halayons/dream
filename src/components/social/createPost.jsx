import './style.scss';
import React from 'react';
import Cookies from 'js-cookie';

export class CreatePost extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			pasteles: [],
			file: '',
			imagePreviewUrl: '',
			option: ''
		};

		this.handleImageChange = this.handleImageChange.bind(this);
		this.handleSelect = this.handleSelect.bind(this);
		this.crearPost = this.crearPost.bind(this);
	}

	componentDidMount() {
		this.getCakes();
	}

	crearPost(e) {
		let form_data = new FormData()
		form_data.append('foto', this.state.file)
		form_data.append('likes', 0)
		form_data.append('status', true)
		form_data.append('reported', false)
		form_data.append('pastel', this.state.option)

		const requestOptions = {
            method: 'POST',
            headers: { 
				'X-CSRFToken':Cookies.get('csrftoken')
			},
            credentials: "include",
            body: form_data
        };

		fetch('http://localhost:8000/social/create_post/', requestOptions)
        .then(res => res.json())
        .then(json => {
			this.props.update()
			console.log('Post creado\n' + json)
        })
        .catch(error => console.log(error))   
	}

	handleSelect(e) {
		console.log(e)
        this.setState({
            option: e.target.value,
        })
    }

	handleImageChange(e) {
		e.preventDefault();

		let reader = new FileReader();
		let file = e.target.files[0];

		reader.onloadend = () => {
			this.setState({
				file: file,
				imagePreviewUrl: reader.result,
			});
		}

		reader.readAsDataURL(file)
	}

	getCakes() {
		const requestOptions = {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				'X-CSRFToken': Cookies.get('csrftoken')
			},
			credentials: "include"
		};

		fetch('http://localhost:8000/pasteles/', requestOptions)
			.then(res => res.json())
			.then(json => {
				this.setState({
					pasteles: json,
					option: json[0].id
				});
			})
			.catch(error => console.log(error))
	}

	render() {

		let { imagePreviewUrl } = this.state;
		let $imagePreview = null;
		if (imagePreviewUrl) {
			$imagePreview = (<img className ="img-fluid " src={imagePreviewUrl} />);
		} 
		else {
			$imagePreview = (<div className="previewText"></div>);
		}

		return (
			<div className="container crearPost">
				<div className="form-row justify-content-center">
					
					<input className="col-lg-8 col-sm-8 col-8 form-control " type="file" onChange={this.handleImageChange} />
					<div className="col-lg-3 col-sm-3 col-3">
								{/*<span htmlFor="pastelID" >Pastel:</span>*/}
								<select className="form-control " id="pastelID" value={this.state.option} onChange = {this.handleSelect}>
									{
										this.state.pasteles.map(pastel =>
											<option value={pastel.id}>{pastel.id}</option>
										)
									}
								</select>
							</div>
					<div className="col-lg-1 col-sm-1 col-1">
								<span className=" form-control badge badge-primary" type="button" onClick={this.crearPost}>Crear</span>
							</div>
				</div>
				<div className="row justify-content-end postearImg ">
						<div className =" col-lg-4 col-sm-3 col-4 ">
							{$imagePreview}
						</div>
				</div>
			</div>
		);
	}
}