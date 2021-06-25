import './style.scss';
import '../Pedidos/style.scss'
import {Pastel,PastelC} from '../Pedidos/Pedidos'
import foto from '../../static/images/foto1.png';
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
					<div className="">
						<input  id ="imgfile" type="file" onChange={this.handleImageChange} />
						<label htmlFor="imgfile" className="btn btn-outline-info">
							<img className="foto" src={foto}/>
							. Escoger foto
						</label>
					</div>
					<div className="col-lg-2 col-sm-2 col-2">
								{/*<span htmlFor="pastelID" >Pastel:</span>*/}
								<select className="form-control " id="pastelID" value={this.state.option} placeholder="h" onChange = {this.handleSelect}>
									
									{	
										this.state.pasteles.map(pastel =>
											<option value={pastel.id}>{pastel.id}</option>
										)
									}
									
								</select>
							</div>
					<div className="col-lg-1 col-sm-2 col-2">
								<span className=" form-control btn btn-info" type="button" onClick={this.crearPost}>Post</span>
							</div>
				</div>
				<div className="row justify-content-end postearImg ">
						
						<div className =" col-lg-4 col-sm-3 col-4 ">
							<Pastel></Pastel>
							{$imagePreview}
						</div>
						{console.log(this.state)}
				</div>
			</div>
		);
	}
}