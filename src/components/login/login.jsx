import React from "react";

export class Login extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            test: null,
        }
    }

    componentDidMount() {
        this.renderLogin()
    }


    renderLogin = async () => {
        try {
            let res = await fetch("http://localhost:8000/accounts/login/")
            let html = await res.text();

            let parser = new DOMParser();
            let doc = parser.parseFromString(html, "text/html");

            this.setState({
                'test': doc.body.innerHTML
            });
        } catch (err) {
            console.log(err);
        }
    }


    render() {
        console.log(window.location.pathname)
        return (
            <div className="App">
                <div className="login">
                    <div className="container">
                        <div className="content" dangerouslySetInnerHTML={{ __html: this.state.test }}></div>

                    </div>
                </div>
            </div>
        )
    }
}