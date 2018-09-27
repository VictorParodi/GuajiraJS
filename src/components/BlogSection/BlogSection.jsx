import React, {Component} from 'react';

class BlogSection extends Component {
    render() {
        return (
            <div className="container main-container">
                <h2 className="main-title center-text"> Our Blog </h2>
                <div className="custom-divider centered-divider"></div>

                <div className="row">
                    <div className="col s12 m4 l6">
                        <div class="card">
                            <div className="card-image">
                                <img src="https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
                                <span className="card-title">Card Title</span>
                            </div>

                            <div className="card-content">
                                <p>I am a very simple card. I am good at containing small bits of information.
                                I am convenient because I require little markup to use effectively.</p>
                            </div>

                            <div className="card-action">
                                <a href="#">Leer</a>
                            </div>
                        </div>
                    </div>

                    <div className="col s12 m4 l6">
                        <div class="card">
                            <div className="card-image">
                                <img src="https://images.pexels.com/photos/34600/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
                                <span className="card-title">Card Title</span>
                            </div>

                            <div className="card-content">
                                <p>I am a very simple card. I am good at containing small bits of information.
                                I am convenient because I require little markup to use effectively.</p>
                            </div>

                            <div className="card-action">
                                <a href="#">Leer</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export {BlogSection};