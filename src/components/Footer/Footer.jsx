import React, {Component} from 'react';
import './Footer.css';

class Footer extends Component {
    render() {
        return (
            <footer className="page-footer yellow-bgd">
                <div className="divider black-divider"></div>
                
                <div className="container">
                    <div className="row">
                        <div className="col l6 s12">
                            <h5 className="dark-grey-font footer-label">Guajira.js</h5>
                            <p className="dark-grey-font text-lighten-4">You can use rows and columns here to organize your footer content.</p>
                        </div>
                    </div>
                </div>

                <div className="footer-copyright">
                    <div className="container dark-grey-font">
                        © 2018 Copyright Guajira.js
                        <a className="dark-grey-font text-lighten-4 right" href="#!">More Links</a>
                    </div>
                </div>
            </footer>
        );
    }
}

export {Footer};