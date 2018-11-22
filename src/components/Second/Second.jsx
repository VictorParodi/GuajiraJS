import React, {Component} from 'react';

import './Second.css';

class Second extends Component {
    render() {
        return (
            <div>
                <div className="container main-container">
                    <div className="row card-info-container">
                        <div className="col s12 m7 second-section-text-container">
                            <h2 className="main-title no-margin-top"> Acerca de nosotros </h2>
                            <div className="custom-divider"></div>
                            <p className="second-text">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, quam? Placeat obcaecati praesentium, 
                                velit eum minima dolore, rem ad laborum fuga consectetur neque. Nemo, voluptatum? Dolore excepturi 
                                numquam sit blanditiis.
                            </p>
                            <ul>
                                <li>
                                    <div className="list-item-container">
                                        <i className="material-icons">done</i>
                                        Texto del item
                                    </div>
                                </li>

                                <li>
                                    <div className="list-item-container">
                                        <i className="material-icons">done</i>
                                        Texto del item
                                    </div>
                                </li>

                                <li>
                                    <div className="list-item-container">
                                        <i className="material-icons">done</i>
                                        Texto del item
                                    </div>
                                </li>

                                <li>
                                    <div className="list-item-container">
                                        <i className="material-icons">done</i>
                                        Texto del item
                                    </div>
                                </li>

                                <li>
                                    <div className="list-item-container">
                                        <i className="material-icons">done</i>
                                        Texto del item
                                    </div>
                                </li>
                            </ul>
                        </div>

                        <div className="col s12 m5 hide-on-small-only">
                            <img 
                                className="responsive-img image-section"
                                src="https://images.pexels.com/photos/1323592/pexels-photo-1323592.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                                // src="https://camo.githubusercontent.com/eb464a60a4a47f8b600aa71bfbc6aff3fe5c5392/68747470733a2f2f7261772e6769746875622e636f6d2f766f6f646f6f74696b69676f642f6c6f676f2e6a732f6d61737465722f6a732e706e67"
                            />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export {Second};