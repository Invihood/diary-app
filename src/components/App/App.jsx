import Navbar from '../Navbar/Navbar';
import Sidebar from '../Sidebar/Sidebar';
import Home from '../Home/Home';
import Create from '../Create/Create';
import Record from '../Record/Record';
import NotFound from '../NotFound/NotFound';
import Footer from '../Footer/Footer';
import Default from '../Default/Default';
import Registration from '../Registration/Registration';
import Authorization from '../Authorization/Authorization';

import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { auth } from "../../actions/user"

const App = () => {
  const isAuth = useSelector(state => state.user.isAuth);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(auth())
  },[])

  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="page-wrapper">
          <Sidebar />
          <div className="content">
            {isAuth && 
              <Switch>
                <Route exact path="/" component={Home}></Route>
                <Route path="/create" component={Create}></Route>
                <Route path="/records/:id" component={Record}></Route>
                <Route path="*" component={NotFound}></Route>
              </Switch>
            }
            {!isAuth && 
              <Switch>
                <Route exact path="/" component={Default}></Route>
                <Route path="/registration" component={Registration}></Route>
                <Route path="/login" component={Authorization}></Route>
                <Route path="*" component={NotFound}></Route>
              </Switch>
            }
          </div>
        </div>
        <Footer />
    </div>
    </Router>
  );
}

export default App;
