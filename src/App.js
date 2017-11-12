import React, { Component } from 'react';
import { TopBar, Content } from 'Components/Layout/styles'

class App extends Component {
  render() {
    return (
      <div className="App">
        <TopBar>
          <h1>DojoMadness Code Challenge</h1>
        </TopBar>
        <Content>
        Champions
        </Content>
      </div>
    );
  }
}

export default App;
