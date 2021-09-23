import React from 'react';
import './App.css';
import Nav from './Nav';
import About from './About';
import Todopage from './Todopage';
import Copid from './Copid';
import Bannerdetail from './Bannerdetail';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
      <Nav />
        <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/todopage" component={Todopage} />
        <Route path="/covid" exact component={Copid} />
        <Route path="/covid/:id"component={Bannerdetail}/>
        </Switch>
    </div>
    </Router>
  );
}

const Home = () => (
  <div>
    <h1>Home Page</h1>
  </div>
);

export default App;