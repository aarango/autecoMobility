import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Header from './components/Header/index';
import MainContainer from './containers/MainContainer';

function App() {

  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route
            path='/search/:query?/:offset?'
            component={MainContainer}
          />
        </Switch>
      </Router>
    </>
  );
}
export default App;