import './App.css';
import Navbar from './components/navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages'
import Mywork from './pages/mywork';

function App() {

  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/mywork" exact component={Mywork} />
      </Switch>
    </Router>
  );
}

export default App;
