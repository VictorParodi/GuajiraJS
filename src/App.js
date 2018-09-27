import React, { Component } from 'react';

import { Header, Footer, Main, Second, BlogSection } from './components';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Second />
        <Main />
        <BlogSection />
        <Footer />
      </div>
    );
  }
}

export default App;
