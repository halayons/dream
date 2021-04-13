import React from "react";
import {Estadisticas, Social} from "./index";


export class LandingPage extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {

        return (
            <div>
                <Estadisticas></Estadisticas>
                <Social></Social>
            </div>
        )
    }

}