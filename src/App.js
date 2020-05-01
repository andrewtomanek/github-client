import React, { Component } from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom'
import Home from './pages/Home';
import Repositories from './pages/Repositories';
import RepoDetail from './pages/RepoDetail';
import NotFound from './pages/NotFound';
import GlobalStyle from "./theme/globalStyle";


class App extends Component {
  render() {
    return (
      <div className="App">
        <GlobalStyle/>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/repos" component={Repositories} />
            <Route path="/detail/:repoName" component={RepoDetail} />
            <Route component={NotFound} />
          </Switch>
          </BrowserRouter>
      </div>
    );
  }
}

export default App;

