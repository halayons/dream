import React from "react";
import './styles.scss';

export class Detallep extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};        
    }

    render() {
        let content
		if(this.props.datos.reported){
			content = <img className=" img-post" src = {this.props.datos.foto} style={{ filter: "grayscale(100%)" }}  ></img>
		}
		else{
			content = <img className=" img-post" src = {this.props.datos.foto}  ></img>
		}

        return (
                <div class = "card col-lg-4 col-sm-8">
                        {content}
                </div>
                    
        );
    }
}