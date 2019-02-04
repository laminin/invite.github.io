import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.scss';
import Events from './components/Events'
import Invite from './components/Invite'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route path="/" exact component={Events} />
          <Route path="/event/" component={Events} />
          <Route path="/invite/" component={Invite} />
        </div>
      </Router>
    );
  }
}

export default App;
