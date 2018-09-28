import React, { Component } from 'react';

import { Header, Footer, Main, Second, EventSection} from './components';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Second />
        <Main />
        <EventSection />
        <Footer />
      </div>
    );
  }
}

export default App;
