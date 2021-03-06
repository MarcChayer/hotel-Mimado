// == Import npm
import React from 'react';
import {
  NavLink,
  useLocation
} from 'react-router-dom';

// == Import
import './header.scss';
import mimado from '../../assets/images/mimado.svg';

// == Composant
const Header = () => { 
  const location = useLocation();

  const [showBurgerMenu, setShowBurgerMenu] = React.useState(false)

  const handleOnClickToggleBurger = () => {
    const burger = document.querySelector('.burger');
    burger.classList.toggle('active');
    setShowBurgerMenu(!showBurgerMenu);
  };

  const handleOnClickCloseMenu = () => {
    const burger = document.querySelector('.burger');
    burger.classList.remove('active');
    setShowBurgerMenu(false);
    window.scrollTo(0, 0)
  };

  return (
    // en fonction de l'url on va venir ajouter des classes scss
    <div className={`header${location.pathname === '/' ? '--onHome' : '--other'}`}>
        <div className="burger" onClick={handleOnClickToggleBurger}>
          <span></span>
        </div>
      <NavLink exact to="/"><img className="logoMimado" src={ mimado } alt="Logo de l'hôtel Mimado"/></NavLink>
      <nav className="navlinks">
        <ul className={`navlink${showBurgerMenu ? "__mobile" : "__desktop"}`}>
          <li className="navlink__one" onClick={handleOnClickCloseMenu}>
            <NavLink exact to="/"  activeClassName="navlink__one--active">accueil</NavLink>
          </li>
          <li className="navlink__one" onClick={handleOnClickCloseMenu}>
            <NavLink to="/hebergement"  activeClassName="navlink__one--active">hébergement</NavLink>
          </li>
          <li className="navlink__one" onClick={handleOnClickCloseMenu}>
            <NavLink to="/restauration"  activeClassName="navlink__one--active">restauration</NavLink>
          </li>
          <li className="navlink__one" onClick={handleOnClickCloseMenu}>
            <NavLink to="/prestations"  activeClassName="navlink__one--active">prestations</NavLink>
          </li>
          <li className="navlink__one" onClick={handleOnClickCloseMenu}>
            <NavLink to="/activites"  activeClassName="navlink__one--active">activités</NavLink>
          </li>
          <li className="navlink__one" onClick={handleOnClickCloseMenu}>
            <NavLink to="/contact"  activeClassName="navlink__one--active">contact</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

// == Export
export default Header;
