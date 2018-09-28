import React, {Component} from 'react';
import './Main.css';

class Main extends Component {
    render() {
        return (
            <div className="grey lighten-4">
                <div className="container main-container">
                    <h2 className="main-title center-text"> Recursos </h2>
                    <div className="custom-divider centered-divider"></div>

                    <div className="row card-info-container">
                        <div className="col s12 m4">
                            <div className="card-panel default card-item center-text">
                                <div>
                                    <i className="large material-icons">code</i>
                                </div>
                                
                                <span className="card-item-text">
                                    <span className="card-item-title">Framewroks</span>
                                    I am a very simple card. I am good at containing small bits of information.
                                </span>
                            </div>
                        </div>

                        <div className="col s12 m4">
                            <div className="card-panel default card-item center-text">
                                <div>
                                    <i className="large material-icons">import_contacts</i>
                                </div>

                                <span className="card-item-text">
                                    <span className="card-item-title">Books</span>
                                    I am a very simple card. I am good at containing small bits of information.
                                </span>
                            </div>
                        </div>

                        <div className="col s12 m4">
                            <div className="card-panel default card-item center-text">
                                <div>
                                    <i className="large material-icons">play_circle_outline</i>
                                </div>

                                <span className="card-item-text">
                                    <span className="card-item-title">Video Tutorial</span>
                                    I am a very simple card. I am good at containing small bits of information.
                                </span>
                            </div>
                        </div>

                        <div className="col s12 m4">
                            <div className="card-panel default card-item center-text">
                                <div>
                                    <i className="large material-icons">code</i>
                                </div>
                                
                                <span className="card-item-text">
                                    <span className="card-item-title">Framewroks</span>
                                    I am a very simple card. I am good at containing small bits of information.
                                </span>
                            </div>
                        </div>

                        <div className="col s12 m4">
                            <div className="card-panel default card-item center-text">
                                <div>
                                    <i className="large material-icons">import_contacts</i>
                                </div>

                                <span className="card-item-text">
                                    <span className="card-item-title">Books</span>
                                    I am a very simple card. I am good at containing small bits of information.
                                </span>
                            </div>
                        </div>

                        <div className="col s12 m4">
                            <div className="card-panel default card-item center-text">
                                <div>
                                    <i className="large material-icons">play_circle_outline</i>
                                </div>

                                <span className="card-item-text">
                                    <span className="card-item-title">Video Tutorial</span>
                                    I am a very simple card. I am good at containing small bits of information.
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export {Main};