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


import './app.scss';

// == Composant
const App = () => (
  <div className="app">
    <Router>
      <Switch> 
        <Header />
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/hebergement">
          <Hebergement />
        </Route>
        <Route exact path="/restauration">
          <Restauration />
        </Route>
        <Route exact path="/prestation">
          <Prestation />
        </Route>
        <Route exact path="/activites">
          <Activites />
        </Route>
        <Route exact path="/contact">
          <Contact />
        </Route>
        <Footer />
      </Switch>
    </Router>
  </div>
);

// == Export
export default App;
