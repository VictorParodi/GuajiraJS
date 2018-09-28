import React, {Component} from 'react';

import './EventSection.css';

class EventSection extends Component {
    render() {
        return (
            <section className="yellow-bgd super-container">
                <div className="container main-container">
                    <div className="row">
                        <div className="col s12">
                            <h2 className="main-title no-margin-top center-text">Eventos</h2>
                            <div className="custom-divider centered-divider"></div>
                        </div>
                    </div>

                    <div className="row event-container">
                        <div className="col s12 m8">
                            <div>
                                <p>
                                    <i className="material-icons left">insert_invitation</i>
                                    28 de Septiembre de 2018
                                </p>
                            </div>
                            
                            <h3 className="event-title">Guajira.js: Getting started</h3>
                        </div>

                        <div className="col s12 m4 event-button-container">
                            <a className="waves-effect waves-light btn event-button blue-grey darken-4">
                                <i className="material-icons left">add</i>
                                Más información
                            </a>
                        </div>
                    </div>
                    <div className="divider black-divider"></div>
                </div>
            </section>
        );
    }
}

export {EventSection};