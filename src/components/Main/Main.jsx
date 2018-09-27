import React, {Component} from 'react';
import './Main.css';

class Main extends Component {
    render() {
        return (
            <div className="container main-container">
                <h2 className="main-title center-text"> ¡Bienvenido! </h2>

                <div className="row card-info-container">
                    <div className="col s12 m4">
                        <div className="card-panel default card-item">
                            <div className="center-text">
                                <i className="large material-icons">add</i>
                            </div>
                            
                            <span className="center-text card-item-text">
                                I am a very simple card. I am good at containing small bits of information.
                                I am convenient because I require little markup to use effectively. I am similar
                                to what is called a panel in other frameworks.
                            </span>
                        </div>
                    </div>

                    <div className="col s12 m4">
                        <div className="card-panel default card-item">
                            <div className="center-text">
                                <i class="large material-icons">group</i>
                            </div>

                            <span className="center-text card-item-text">
                                I am a very simple card. I am good at containing small bits of information.
                                I am convenient because I require little markup to use effectively. I am similar
                                to what is called a panel in other frameworks.
                            </span>
                        </div>
                    </div>

                    <div className="col s12 m4">
                        <div className="card-panel default card-item">
                            <div className="center-text">
                                <i className="large material-icons">add</i>
                            </div>

                            <span className="center-text card-item-text">
                                I am a very simple card. I am good at containing small bits of information.
                                I am convenient because I require little markup to use effectively. I am similar
                                to what is called a panel in other frameworks.
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export {Main};