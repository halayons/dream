import logo from '../../static/images/logo.png';
import React from 'react';

export class Footer extends React.Component {


    render() {
        return (
            <div className="footer">
                <div clasName="principalF">
                    <div className="areaW">
                        <div className="widget">
                            <img src={logo} className="logo" />
                        </div>

                        <div className="widget">
                            <spam>DreamCake</spam><br></br>
                            <spam>Bogota | Colombia</spam><br></br>
                            <spam>correo: dreamcake@unal.edu.co</spam><br></br>
                            <spam>tel: (+57) 3133473579 </spam><br></br>
                            <spam>dir: crr 6 este# 2--</spam><br></br>
                            <span>barrio:</span>
                        </div>

                        <div className="widget">
                            <img src={logo} className="logo" />
                        </div>

                        <div className="widget">
                            <img src={logo} className="logo" />
                        </div>
                    </div>
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
