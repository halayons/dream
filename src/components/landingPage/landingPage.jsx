import React from "react";
import {Estadisticas, Social, Footer, Header, Banner, HeaderUpdater} from "./index";


export class LandingPage extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {

        return (
            <div className="landingPage">
                <Banner></Banner>
                <Estadisticas></Estadisticas>
                <Social></Social>
            </div>
        )
    }

}