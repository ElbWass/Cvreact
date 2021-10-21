import React from 'react';
import Navigation from '../components/Navigation';
import { CopyToClipboard } from 'react-copy-to-clipboard';

const Contact = () => {
    return (
        <div className="contact">
            <Navigation/>
            <div className="contactContent">
                <div className="contactBox">
                    <h1>Contactez-moi</h1>
                    <ul>
                        <li>
                            <i className="fas fa-map-marker-alt"></i>
                            <span>Chelles</span>
                        </li>
                        <li>
                            <i className="fas fa-mobile-alt"></i>
                            <CopyToClipboard text="0760499829">
                                <span 
                                    className="clickInput" 
                                    onClick={() => {alert('Numéro Copié !');}}>
                                        07 60 49 98 29
                                </span>
                            </CopyToClipboard>
                        </li>
                        <li>
                            <i className="far fa-envelope"></i>
                            <CopyToClipboard text="Elbaghdadiwassil@gmail.com">
                                <span 
                                    className="clickInput" 
                                    onClick={() => {alert('E-mail Copié !');}}>
                                        Elbaghdadiwassil@gmail.com
                                </span>
                            </CopyToClipboard>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Contact;