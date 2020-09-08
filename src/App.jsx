import React, { useContext, useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import axios from 'axios';
import Header from './components/Header/index';
import Home from './pages/Home';
import ProductContainer from './containers/ProductContainer';
import config from './enviroment/config';
import { Context } from './Context';

function App() {
  const { setToken } = useContext(Context);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    async function updateToken() {
      setLoading(true);
      const result = await axios.post(`${config.URL}/oauth/token?grant_type=refresh_token&client_id=260721409686760&client_secret=FH7YTYg8yQ8YdRZW64P3mfhQwCdCcCKL&refresh_token=TG-5f285d84459ec40006ca10b8-137761565`);
      setToken(result.data.access_token);
      setLoading(false);
    }
    updateToken();
  }, []);
  if (loading) return 'cargando...';
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
