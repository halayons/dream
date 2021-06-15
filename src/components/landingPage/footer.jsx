import React from 'react';
import face from '../../static/images/face.png';
import insta from '../../static/images/Instagram.png';
import tel from '../../static/images/Telefono.png';
import what from '../../static/images/whatsap.png';
export class Footer extends React.Component {


    render() {
        return (
            <div className="footer">
                <div className="principalF">
                    <a href="https://www.facebook.com/DreamCakeOFICIAL1/"><img src={face} alt="" ></img></a>
                    <img src={what} alt="" ></img>
                    <img src={tel} alt="" ></img>
                    <img src={insta} alt="" ></img>
                    
                    
                </div>

                <div className="copyright-bar">
                    <span className="copyright">
                        ©2021 DreamCake - Todos los Derechos reservados
                </span>
                </div>
            </div>
        );
    }
}
