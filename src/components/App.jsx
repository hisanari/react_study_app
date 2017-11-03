import React, { Component } from 'react';

import Greeting from './Greeting';

class App extends Component {
  render() {
    return (
      <div>
        <Greeting name="hisanari" />
        <Greeting name="chaa" />
      </div>
    );
  }
}

export default App;
