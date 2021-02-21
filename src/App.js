import './App.css';
import Navbar from './components/navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages'

function App() {

  return (
    <Router>
      {/* <Navbar /> */}
      {/* <Switch>
        <Route path="/" exact component={Home} />
      </Switch> */}

      <Home/>
    </Router>
  );
}

export default App;
