import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// @components
import Topbar from './components/Topbar/Topbar';
import Sidebar from './components/Sidebar/Sidebar';

// @pages
import Home from './pages/Home/Home';
import UserList from './pages/UserList/UserList';
import User from './pages/User/User';
import NewUser from './pages/NewUser/NewUser';
import ProductList from './pages/ProductList/ProductList';

// @style
import './App.css';

function App() {
  return (
    <Router>
      <Topbar />
      <div className='container'>
        <Sidebar />
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route exact path='/users'>
            <UserList />
          </Route>
          <Route exact path='/user/:id'>
            <User />
          </Route>
          <Route exact path='/newUser'>
            <NewUser />
          </Route>
          <Route exact path='/products'>
            <ProductList />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
