import React, {Component} from 'react';
import './Header.css';

class Header extends Component {
    constructor(props) {
        super(props);

        this.state = {
            height: null
        }
    }


    componentDidMount() {
        const winHeight = window.innerHeight;

        this.setState({
            height: winHeight
        });
    }

    render() {
        const styles = {
            height: this.state.height
        }

        const padding = {
            paddingTop: (this.state.height / 2)
        }

        return (
            <header className="yellow-bgd extra-height header-super-container" style={styles}>
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
                                <a className="dark-grey-font" href="badges.html">Recursos</a>
                            </li>

                            <li>
                                <a className="dark-grey-font" href="badges.html">Comunidad</a>
                            </li>

                            <li>
                                <a className="dark-grey-font" href="collapsible.html">Blog</a>
                            </li>
                        </ul>
                    </div>
                </nav>
                <div className="valign-wrapper header-title-supercontainer">
                    <div className="container center-text header-title-container">
                        <h1 className="header-title">GUAJIRA.JS</h1>
                        <p className="subheader-title">
                            Guajira loves Javascript!
                        </p>
                    </div>
                </div>
            </header>
        );
    }
}

export {Header};