import { combineReducers } from 'redux';
import activites from './activites';
import contact from './contact';
import footer from './footer';
import header from './header';
import hebergement from './hebergement';
import home from './home';
import mentionslegales from './mentionslegales';
import prestation from './prestation';
import restauration from './restauration';

export default combineReducers({
  activites,
  contact,
  footer,
  header,
  hebergement,
  home,
  mentionslegales,
  prestation,
  restauration,
});
