import './style.scss';
import foto from '../../static/images/foto1.png';
import React from 'react';
import Cookies from 'js-cookie';
import {Pastel,PastelC} from '../Pedidos/Pedidos'

export class CreatePost extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			pasteles: [],
			file: '',
			imagePreviewUrl: '',
			option: '',
			cakePaint:''
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
	paintCakes(p){
		//masa[CH,VA,TL,RV]
		//relleno[AQ,NU,ML,CP]
		let masa=['url("https://www.transparenttextures.com/patterns/45-degree-fabric-dark.png")', 'url("https://www.transparenttextures.com/patterns/asfalt-dark.png")','url("https://www.transparenttextures.com/patterns/ravenna.png")','url("https://www.transparenttextures.com/patterns/crisp-paper-ruffles.png")']
		let relleno=["#995c2e","#69391d","#5c0c15b5", "#e4cc8ba1"]
		let cubierta =["FD","CR"]

		if(p.masa=='CH') masa=masa[0]
		if(p.masa=='VA') masa=masa[1]
		if(p.masa=='TL') masa=masa[2]
		if(p.masa=='RV') masa=masa[3]
		
		if(p.relleno=='AQ') relleno=relleno[0]
		if(p.relleno=='NU') relleno=relleno[1]
		if(p.relleno=='ML') relleno=relleno[2]
		if(p.relleno=='CP') relleno=relleno[3]

		
        document.documentElement.style.setProperty('--color-pastel2',relleno);
		document.documentElement.style.setProperty('--textura-pastel',masa);

		if(p.cobertura =='FD') { 
			document.documentElement.style.setProperty('--color-pastel',p.color);
			document.documentElement.style.setProperty('--textura-pastel2','');}
		if(p.cobertura=='CR') {
			document.documentElement.style.setProperty('--color-pastel','#eee8c9');
			document.documentElement.style.setProperty('--textura-pastel2',"url(http://www.transparenttextures.com/patterns/zig-zag.png)");}
		
		return(
			p.forma=='CI'?(<Pastel></Pastel>):(<PastelC></PastelC>)
		);
	}
	countCakes(p){
		let i =1;
		while(i<=p.length){	
			<option type="bottom" onClick={this.setState({cakePaint:p[i]})} value={i} >{p[i].id}</option>
			i++;
		}
	}
	render() {

		let { imagePreviewUrl } = this.state;
		let $imagePreview = null;
		if (imagePreviewUrl) {
			$imagePreview = (<img className ="img-fluid shadow-lg  md-20" src={imagePreviewUrl} />);
		} 
		else {
			$imagePreview = (<div className="previewText"></div>);
		}

		return (
			<div className="container crearPost">
				<div className="form-row justify-content-center">
					<div className="bg-light">
						<input  id ="imgfile" type="file" onChange={this.handleImageChange} />
						<label htmlFor="imgfile" className="btn btn-outline-info">
							<img className="foto" src={foto}/>
							 Escoger foto
						</label>
					</div>
					<div className="col-lg-2 col-sm-2 col-2">
								{/*<span htmlFor="pastelID" >Pastel:</span>*/}
								<select className="form-control " id="pastelID" value={this.state.option} placeholder="h" onChange = {this.handleSelect}>
									
									{	
										this.countCakes(this.state.pasteles)
									}
									
								</select>
							</div>
					<div className="col-lg-1 col-sm-2 col-2">
								<span className=" form-control btn btn-info" type="button" onClick={this.crearPost}>Post</span>
							</div>
				</div>
				<div className="row justify-content-end postearImg ">
						<div className =" col-lg-4 col-sm-3 col-4 ">
							{this.paintCakes(this.cakePaint)}
						</div>
						<div className =" col-lg-4 col-sm-3 col-4 ">
							{$imagePreview}
						</div>
				</div>
			</div>
		);
	}
}