import React, {Component} from 'react';
import './Header.css';

class Header extends Component {
    render() {
        return (
            <header className="yellow-bgd extra-height">
                <nav className="yellow-bgd no-shadow">
                    <div className="nav-wrapper">
                        <ul id="nav-mobile" className="right hide-on-med-and-down">
                            <li>
                                <a className="dark-grey-font" href="sass.html">Inicio</a>
                            </li>
                            <li>
                                <a className="dark-grey-font" href="badges.html">Eventos</a>
                            </li>
                            <li>
                                <a className="dark-grey-font" href="collapsible.html">Blog</a>
                            </li>
                        </ul>
                    </div>
                </nav>

                <div className="container">
                    <h1 className="header-title">GUAJIRA JS</h1>
                    <p>Es una comunidad de ingenieros de software guajiros, interesados en el ecositema de Javascript</p>
                </div>
            </header>
        );
    }
}

export {Header};