import React from "react";
import {Estadisticas, Social, Footer, Header, Banner} from "./index";


export class LandingPage extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {

        return (
            <div className="landingPage">
                <Header></Header>
                <Banner></Banner>
                <Estadisticas></Estadisticas>
                <Social></Social>
                <Footer></Footer>
            </div>
        )
    }

}