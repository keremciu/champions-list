import React, { Component } from 'react';
import { TopBar, Content } from 'Components/Layout/styles'

class ListPage extends Component {
  render() {
    return (
      <div>
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

export default ListPage;
