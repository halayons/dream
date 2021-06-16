import React from 'react';
import face from '../../static/images/face.png';
import insta from '../../static/images/Instagram.png';
import tel from '../../static/images/Telefono.png';
import what from '../../static/images/whatsap.png';
export class Footer extends React.Component {


    render() {
        return (
            <div className="footer ">
                <div className="principalF d-flex f-wrap justify-content-center">
                    <a href="https://www.facebook.com/DreamCakeOFICIAL1/"><img src={face} alt="" ></img></a>
                    <a href="https://web.whatsapp.com/"><img src={what} alt="" ></img></a>
                    <a href="#"><img src={tel} alt="" ></img></a>
                    <a href="#"><img src={insta} alt="" ></img></a>
                    
                    
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
