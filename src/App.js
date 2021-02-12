import { Router } from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar';
import { BrowserRouter as Rout } from 'react-router-dom';

function App() {

  return (
    <Rout>
      <Navbar />
    </Rout>
  );
}

export default App;
