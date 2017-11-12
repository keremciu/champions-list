import React, { Component } from 'react';
import { TopBar, Content } from 'Components/Layout/styles'

class ListPage extends Component {
  render() {
    return (
      <div>
        <TopBar>
          <h1>← Ahri SPI</h1>
        </TopBar>
        <Content>
          SPI Details
        </Content>
      </div>
    );
  }
}

export default ListPage;
