import React from 'react';
import { Report} from './report';
import Cookies from 'js-cookie';

export class NavBar extends React.Component{


    constructor() {
		super();

		this.state = {
            open: true,
			open1: true,
			comments: false,
			posts: [],
		};
        
	}

    loadPosts() {
		const requestOptions = {
			method: 'GET',
			headers: {
			  // 'Content-Type': 'application/json',
			  'X-CSRFToken': Cookies.get('csrftoken')
			},
			credentials: "include",
		  };
		  fetch('http://localhost:8000/social/all_posts/', requestOptions)
			.then(response => response.json())
			.then(json => this.setState({
			  posts: json
			}))
			.catch(error => console.log(error));
	}

    openModal = (e) => {
        e.preventDefault();
        this.setState({
            open: !this.state.open
        });
        this.loadPosts();	
    };

	openModal1 = (e) => {
        e.preventDefault();
        this.setState({
            open1: !this.state.open1
        });
        this.loadComments();
    };	
    
    render(){
        return(
        <div>   
            <div class="d-flex justify-content-center">
            <button type="button" class="btn-navbar" onClick={(e) => {this.openModal(e)}}>
                    Moderar Publicaciones </button>
			<button type="button" class="btn-navbar" onClick={(e) => {this.openModal1(e)}}>
                    Moderar Comentarios </button>
            </div>
            <div><Report open={this.state.open} onClose={this.openModal} datos={this.state.posts} comments ={this.state.comments} /></div>
			
            <script src="node_modules/bootstrap/dist/js/bootstrap.min.js"></script>
        </div>

        )
    }
}
