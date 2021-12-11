import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Classes from './components/pages/Classes';
import Services from './components/pages/Services';
import Shop from './components/pages/Shop';
import ScrollToTop from './components/ScrollToTop';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <ScrollToTop />
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/about' exact component={About} />
          <Route path='/classes' component={Classes} />
          <Route path='/services' component={Services} />
          <Route path='/shop' component={Shop} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
