import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import Header from './components/Header/index';
import Home from './pages/Home';
import ProductContainer from './containers/ProductContainer';

function App() {

  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path='/' component={() => <Redirect to='search/llantas para carros ' />} />
          <Route
            path='/search/:query?/:offset?'
            component={Home}
          />
          <Route
            exact
            path='/item/:id?'
            component={ProductContainer}
          />
        </Switch>
      </Router>
    </>
  );
}
export default App;
