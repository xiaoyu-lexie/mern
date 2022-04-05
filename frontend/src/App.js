import './App.css';
import { BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';

import Users from './user/pages/Users';
import NewPlace from './places/pages/NewPlace';
import MainNagigation from './shared/components/Navigation/MainNagigation';
import UserPlaces from './places/pages/UserPlaces';

function App() {
  return (
    <Router>
      <main>
        <MainNagigation />
        <Switch>
          <Route path='/' exact>
            <Users />
          </Route>

          <Route path='/places/new'>
            <NewPlace />
          </Route>

          <Route path='/:userId/places' exact>
            <UserPlaces />
          </Route>

          <Redirect to='/' />
        </Switch>
      </main>
    </Router>
  );
}

export default App;
