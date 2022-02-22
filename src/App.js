import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
// General pages
import Home from './components/pages/Home';
import About from './components/pages/About';
import Classes from './components/pages/Classes';
import Services from './components/pages/Services';
import Shop from './components/pages/Shop';
import Contact from './components/pages/Contact';
import Posts from './components/pages/Posts';
import Post from './components/pages/Post';
// Classes
import Calligraphy from './components/classes/Calligraphy';
import ChiKung from './components/classes/ChiKung';
import Chinese from './components/classes/Chinese';
import Dance from './components/classes/Dance';
import Instrument from './components/classes/Instrument';
import KungFu from './components/classes/KungFu';
import KungFuKids from './components/classes/KungFuKids';
import Meditation from './components/classes/Meditation';
import Opera from './components/classes/Opera';
import SanDa from './components/classes/SanDa';
import TaiChi from './components/classes/TaiChi';
import Tea from './components/classes/Tea';
// Services
import Exams from './components/services/Exams';
import Events from './components/services/Events';
import Acting from './components/services/Acting';
import Trips from './components/services/Trips';
// Router
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
          <Route path='/contact' component={Contact} />
          <Route path='/posts' component={Posts} />
          <Route path='/post/:id' component={Post} />
        </Switch>
        <Switch>
          <Route path='/calligraphy' exact component={Calligraphy} />
          <Route path='/chikung' exact component={ChiKung} />
          <Route path='/chinese' exact component={Chinese} />
          <Route path='/dance' exact component={Dance} />
          <Route path='/instrument' exact component={Instrument} />
          <Route path='/kungfu' exact component={KungFu} />
          <Route path='/kungfukids' exact component={KungFuKids} />
          <Route path='/meditation' exact component={Meditation} />
          <Route path='/opera' exact component={Opera} />
          <Route path='/sanda' exact component={SanDa} />
          <Route path='/taichi' exact component={TaiChi} />
          <Route path='/tea' exact component={Tea} />
        </Switch>
        <Switch>
          <Route path='/exams' exact component={Exams} />
          <Route path='/events' exact component={Events} />
          <Route path='/acting' exact component={Acting} />
          <Route path='/trips' exact component={Trips} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
