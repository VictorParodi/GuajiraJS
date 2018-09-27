import React, {Component} from 'react';
import './Main.css';

class Main extends Component {
    render() {
        return (
            <div className="grey lighten-4">
                <div className="container main-container">
                    <h2 className="main-title center-text"> Eventos </h2>
                    <div className="custom-divider centered-divider"></div>

                    <div className="row card-info-container">
                        <div className="col s12 m4">
                            <div className="card-panel default card-item center-text">
                                <div>
                                    <i className="large material-icons">add</i>
                                </div>
                                
                                <span className="card-item-text">
                                    <span className="card-item-title"> Card title </span>
                                    I am a very simple card. I am good at containing small bits of information.
                                </span>
                            </div>
                        </div>

                        <div className="col s12 m4">
                            <div className="card-panel default card-item center-text">
                                <div>
                                    <i class="large material-icons">group</i>
                                </div>

                                <span className="card-item-text">
                                    <span className="card-item-title"> Card title </span>
                                    I am a very simple card. I am good at containing small bits of information.
                                </span>
                            </div>
                        </div>

                        <div className="col s12 m4">
                            <div className="card-panel default card-item center-text">
                                <div>
                                    <i className="large material-icons">add</i>
                                </div>

                                <span className="card-item-text">
                                    <span className="card-item-title"> Card title </span>
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