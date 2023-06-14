import React from 'react';
import Navbar from './components/Navbar';
import './App.css';

// General pages
import Home from './components/paginas/Home';
import About from './components/paginas/About';
import Classes from './components/paginas/Classes';
import Services from './components/paginas/Services';
import Shop from './components/paginas/Shop';
import Contact from './components/paginas/Contact';
import Noticias from './components/paginas/Noticias';

// Classes
import Calligraphy from './components/clases/Calligraphy';
import ChiKung from './components/clases/ChiKung';
import Chinese from './components/clases/Chinese';
import Dance from './components/clases/Dance';
import Instrument from './components/clases/Instrument';
import KungFu from './components/clases/KungFu';
import KungFuKids from './components/clases/KungFuKids';
import Meditation from './components/clases/Meditation';
import Opera from './components/clases/Opera';
import SanDa from './components/clases/SanDa';
import TaiChi from './components/clases/TaiChi';
import Tea from './components/clases/Tea';

// Services
import Exams from './components/servicios/Exams';
import Events from './components/servicios/Events';
import Acting from './components/servicios/Acting';
import Trips from './components/servicios/Trips';

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
          <Route path='/noticias' component={Noticias} />
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
