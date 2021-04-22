// == Import npm
import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

// == Import containers
import Header from '../../containers/Header';
import Home from '../../containers/Home';
import Hebergement from '../../containers/Hebergement';
import Restauration from '../../containers/Restauration';
import Prestation from '../../containers/Prestation';
import Activites from '../../containers/Activites';
import Contact from '../../containers/Contact';
import Footer from '../../containers/Footer';
import MentionsLegales from '../../containers/MentionsLegales';


import './app.scss';

// == Composant
const App = () => (
  <div className="app">
    <Router>
      <Switch> 
        <Route exact path="/">
          <Header />
          <Home />
          <Footer />
        </Route>
        <Route path="/hebergement">
          <Header />
          <Hebergement />
          <Footer />
        </Route>
        <Route path="/restauration">
          <Header />
          <Restauration />
          <Footer />
        </Route>
        <Route path="/prestation">
          <Header />
          <Prestation />
          <Footer />
        </Route>
        <Route path="/activites">
          <Header />
          <Activites />
          <Footer />
        </Route>
        <Route path="/contact">
          <Header />
          <Contact />
          <Footer />
        </Route>
        <Route path="/mentionslegales">
          <Header />
          <MentionsLegales />
          <Footer />
        </Route>
      </Switch>
    </Router>
  </div>
);

// == Export
export default App;
