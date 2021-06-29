
import like from '../../static/images/like.svg';
import React from 'react';


export class Social extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
        };
    }
    funtion(a) {
        var l = a.length;
        var ll = a.substring(1, l)
        return ll;
    }
    fecha(a) {
        return a;
    }
    usuarios(e) {
        return(
            <div>
                <div className=" row justify-content-center">
                    <div className="card col-12 col-sm-6 col-lg-6">
                        <img src={e.foto} className="img-fluid"></img>
                        <div className="card-body">
                            
                            <div className="nameC">
                                <h4 style={{margin:0}}> {e.usuario.full_name}</h4> 
                            </div>
                            <div className="counterLikes info-customer">
                                {this.fecha(e.published_date)} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;   <img src={like} className="likes"></img><span>{e.likes}</span>
                            </div>
                        </div>
                    
                    </div>
                </div>
                <br />
            </div>

           
            );

       

    }

    componentDidMount = () => {

        fetch('http://localhost:8000/social/all_posts/-likes/3/', { method: 'GET' })
            .then((response) => response.json())
            .then(responseJson => { this.setState({ data: responseJson }) }
            );
    }

    render() {
        return (
           
                <div className="container  bg-light">
                    
                    {this.state.data.map(e => this.usuarios(e))}
                    <br />
                    <div className="row justify-content-center">
                        <a href="http://localhost:3000/social">
                            <button className="btn btn-info" >Mas...</button>
                        </a>
                    </div>
                </div>

            
        )
    }

}