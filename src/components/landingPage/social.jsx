
import like from '../../static/images/like.png';
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
        return (<div className="customer">
            <div className="cakeC">
                <img src={e.foto} className="cake"></img>
            </div>
            <div className="photoC">
                <img src={e.usuario.foto} className="photo" />
            </div>

            <div className="infoC">
                <td>
                    <div className="nameC">
                        <p> usuario: </p>
                        {e.usuario.full_name}
                    </div>
                    <div className="date">
                        <p> fecha: </p>{this.fecha(e.published_date)}
                    </div>
                </td>

                <td>
                    <div className="counterLikes">
                        <img src={like} className="likes"></img><p> {e.likes}</p>
                    </div>
                </td>
            </div>


        </div>);

    }

    componentDidMount = () => {

        fetch('http://localhost:8000/social/all_posts/-likes/3', { method: 'GET' })
            .then((response) => response.json())
            .then(responseJson => { this.setState({ data: responseJson }) }
            );
    }

    render() {
        return (
            <div className="social_app">
                <div className="content">
                    <div>
                        {this.state.data.map(e => this.usuarios(e))}
                    </div>
                </div>

            </div>
        )
    }

}