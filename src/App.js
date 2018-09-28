import React, { Component } from 'react';

import { Header, Footer, Main, Second } from './components';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Second />
        <Main />
        <Footer />
      </div>
    );
  }
}

export default App;
