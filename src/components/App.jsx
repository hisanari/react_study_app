import React, { Component } from 'react';

import Greeting from './Greeting';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Chaa',
    };
  }

  handleMouseOver() {
    this.setState({ name: 'Bob' });
  }

  handaleMouseOut() {
    this.setState({ name: 'Mike' });
  }

  render() {
    return (
      <div
        onMouseOver={() => this.handleMouseOver()}
        onMouseOut={() => this.handaleMouseOut()}
      >
        <Greeting name={this.state.name} />
      </div>
    );
  }
}

export default App;
