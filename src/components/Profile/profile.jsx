import React from "react";
import { UserData } from './userData';
import { Footer, Header } from '../landingPage';
import { Options } from "./options";
import { Information } from "./information";
import "./style.scss";

export class Profile extends React.Component {
    
    componentDidMount = () => {

        let requestOptions = {
            method: 'GET',
            credentials: 'include'
        };

        fetch('http://localhost:8000/users/api/auth/user/', requestOptions)
            .then((response) => response.json())
            .then(responseJson => { console.log(responseJson)}
            );
    }
 

    render() {
        return (
            <div>
				<Header></Header>
                <UserData></UserData>
                <div>
                    <Options></Options>
                    <Information></Information>
                </div>
				<Footer></Footer>
			</div>
        )
    }
}