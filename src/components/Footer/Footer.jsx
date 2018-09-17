import React, {Component} from 'react';
import './Footer.css';

class Footer extends Component {
    render() {
        return (
            <footer className="page-footer yellow-bgd">
                <div className="container">
                    <div className="row">
                        <div className="col l6 s12">
                            <h5 className="dark-grey-font">Footer Content</h5>
                            <p className="dark-grey-font text-lighten-4">You can use rows and columns here to organize your footer content.</p>
                        </div>

                        <div className="col l4 offset-l2 s12">
                            <h5 className="dark-grey-font">Links</h5>
                            <ul>
                                <li><a className="dark-grey-font text-lighten-3" href="#!">Link 1</a></li>
                                <li><a className="dark-grey-font text-lighten-3" href="#!">Link 2</a></li>
                                <li><a className="dark-grey-font text-lighten-3" href="#!">Link 3</a></li>
                                <li><a className="dark-grey-font text-lighten-3" href="#!">Link 4</a></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="footer-copyright">
                    <div className="container dark-grey-font">
                        © 2014 Copyright Text
                        <a className="dark-grey-font text-lighten-4 right" href="#!">More Links</a>
                    </div>
                </div>
            </footer>
        );
    }
}

export {Footer};