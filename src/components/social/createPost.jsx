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
			$imagePreview = (<img src={imagePreviewUrl} />);
		} else {
			$imagePreview = (<div className="previewText">Elige una imagen para el post</div>);
		}

		return (
			<div className="container">
				<label>Crear Post</label><br />
				<label>pastel: </label>
				<select value={this.state.option} onChange = {this.handleSelect}>
					{
						this.state.pasteles.map(pastel =>
							<option value={pastel.id}>{pastel.id}</option>
						)
					}
				</select>
				<div class="foto">
					<input type="file" onChange={this.handleImageChange} />
					{$imagePreview}
				</div>
				<button onClick={this.crearPost}>crear</button>
			</div>
		);
	}
}