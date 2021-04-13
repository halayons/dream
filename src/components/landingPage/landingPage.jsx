import React from "react";
import {Estadisticas, Social, Footer} from "./index";


export class LandingPage extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {

        return (
            <div className="landingPage">
                <Estadisticas></Estadisticas>
                <Social></Social>
                <Footer></Footer>
            </div>
        )
    }

}