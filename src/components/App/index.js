// == Import npm
import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

// == Import
import Header from '../Header';
import Home from '../Home';
import Hebergement from '../Hebergement';
import Restauration from '../Restauration';
import Prestation from '../Prestation';
import Activites from '../Activites';
import Contact from '../Contact';
import Footer from '../Footer';
import MentionsLegales from '../MentionsLegales';


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
        <Route exact path="/hebergement">
          <Header />
          <Hebergement />
          <Footer />
        </Route>
        <Route exact path="/restauration">
          <Header />
          <Restauration />
          <Footer />
        </Route>
        <Route exact path="/prestation">
          <Header />
          <Prestation />
          <Footer />
        </Route>
        <Route exact path="/activites">
          <Header />
          <Activites />
          <Footer />
        </Route>
        <Route exact path="/contact">
          <Header />
          <Contact />
          <Footer />
        </Route>
        <Route exact path="/mentionslegales">
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
