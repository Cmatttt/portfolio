import './App.css';
import Navbar from './components/navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages'
import projects from './pages/mywork';
import Contact from './pages/contact';

function App() {

  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/home" exact component={Home} />
        <Route path="/projects" exact component={projects} />
        <Route path="/contact" exact component={Contact} />
      </Switch>
    </Router>
  );
}

export default App;
