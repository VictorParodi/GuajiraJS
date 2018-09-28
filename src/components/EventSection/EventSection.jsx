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
                            <p>Lorem ipsun dolor</p>
                            <h3 className="event-title">High Quality Services</h3>
                        </div>

                        <div className="col s12 m4 center-text">
                            <a class="waves-effect waves-light btn event-button blue-grey darken-4">
                                <i class="material-icons left">cloud</i>Más información
                            </a>
                        </div>
                    </div>
                    <div className="divider black-divider"></div>

                    <div className="row event-container">
                        <div className="col s12 m8">
                            <p>Lorem ipsun dolor</p>
                            <h3 className="event-title">High Quality Services</h3>
                        </div>

                        <div className="col s12 m4 center-text">
                            <a class="waves-effect waves-light blue-grey darken-4 btn event-button">
                                <i class="material-icons left">cloud</i>Más información
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