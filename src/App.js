import React, { Component } from 'react';
import { TopBar, Content } from 'Components/Layout/styles'
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom'

import ListPage from 'Pages/ChampionList'
import DetailPage from 'Pages/ChampionDetail'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/" key="list" component={ ListPage } />,
            <Route exact path="/detail/:id" key="detail" component={ DetailPage } />,
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
