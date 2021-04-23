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
      <Header/>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/hebergement">
            <Hebergement />
          </Route>
          <Route path="/restauration">
            <Restauration />
          </Route>
          <Route path="/prestation">
            <Prestation />
          </Route>
          <Route path="/activites">
            <Activites />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/mentionslegales">
            <MentionsLegales />
          </Route>
        </Switch>
      <Footer/>
    </Router>
  </div>
);

// == Export
export default App;
