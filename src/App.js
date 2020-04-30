import React, { Component } from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom'
import './App.css';
import Dashboard from './pages/Dashboard';
import Repositories from './pages/Repositories';
import RepoDetail from './pages/RepoDetail';
import NotFound from './pages/NotFound';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route path="/repo" component={Repositories} />
            <Route path="/detail/:repoName" component={RepoDetail} />
            <Route component={NotFound} />
          </Switch>
          </BrowserRouter>
        </header>
      </div>
    );
  }
}

export default App;

