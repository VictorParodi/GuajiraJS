import React, {Component} from 'react';

import './Second.css';

class Second extends Component {
    render() {
        return (
            <div className="grey lighten-4">
                <div className="container main-container">
                    <div className="row card-info-container">
                        <div className="col s12 m6">
                            <h2 className="main-title"> ¡Bienvenido a Guajira.js! </h2>
                        </div>

                        <div className="col s12 m6">
                            <img 
                                className="responsive-img"
                                src="https://camo.githubusercontent.com/eb464a60a4a47f8b600aa71bfbc6aff3fe5c5392/68747470733a2f2f7261772e6769746875622e636f6d2f766f6f646f6f74696b69676f642f6c6f676f2e6a732f6d61737465722f6a732e706e67"
                            />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export {Second};