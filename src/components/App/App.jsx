import Navbar from '../Navbar/Navbar';
import Sidebar from '../Sidebar/Sidebar';
import Home from '../Home/Home';
import Create from '../Create/Create';
import Record from '../Record/Record';
import NotFound from '../NotFound/NotFound';
import Footer from '../Footer/Footer';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Registration from '../Registration/Registration';

const App = () => {

  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="page-wrapper">
          <Sidebar />
          <div className="content">
            <Switch>
              <Route exact path="/" component={Home}></Route>
              <Route path="/create" component={Create}></Route>
              <Route path="/records/:id" component={Record}></Route>
              <Route path="/registration" component={Registration}></Route>
              <Route path="*" component={NotFound}></Route>
            </Switch>
          </div>
        </div>
        <Footer />
    </div>
    </Router>
  );
}

export default App;
