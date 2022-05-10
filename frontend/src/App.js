import React, {useState, useCallback} from 'react';

import './App.css';
import { BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';

import Users from './user/pages/Users';
import NewPlace from './places/pages/NewPlace';
import MainNagigation from './shared/components/Navigation/MainNagigation';
import UserPlaces from './places/pages/UserPlaces';
import UpdatePlace from './places/pages/UpdatePlace';
import Auth from './user/pages/Auth';
import {AuthContext } from './shared/context/auth-context';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = useCallback(() => {
    setIsLoggedIn(true)
  }, [])

  const logout = useCallback(() => {
    setIsLoggedIn(false)
  }, [])

  let routes;
  if (isLoggedIn) {
    routes = (
      <Switch>
        <Route path='/' exact>
          <Users />
        </Route>

        <Route path='/places/new'>
          <NewPlace />
        </Route>

        <Route path='/places/:placeId'>
          <UpdatePlace />
        </Route>

        <Route path='/:userId/places' exact>
          <UserPlaces />
        </Route>

        <Redirect to='/' />
      </Switch>
    );
  } else {
    routes = (
      <Switch>
        <Route path='/' exact>
          <Users />
        </Route>

        <Route path='/auth'>
          <Auth />
        </Route>

        <Route path='/:userId/places' exact>
          <UserPlaces />
        </Route>

        <Redirect to='/auth' />
      </Switch>
    );
  }

  return (
    <AuthContext.Provider value={{
      isLoggedIn:isLoggedIn, login: login, logout: logout
    }} >
      <Router>
        <main>
          <MainNagigation />
            {routes}
        </main>
      </Router>
    </AuthContext.Provider>
  );
}

export default App;
