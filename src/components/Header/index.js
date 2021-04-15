// == Import npm
import React from 'react';
import { NavLink } from 'react-router-dom';

// == Import
import './header.scss';
import mimado from '../../assets/images/mimado.svg';

// == Composant
const Header = () => { 
  const [showBurgerMenu, setShowBurgerMenu] = React.useState(false)

  const handleOnClickToggleBurger = () => {
    const burger = document.querySelector('.burger');
    burger.classList.toggle('active');
    setShowBurgerMenu(!showBurgerMenu);
  }

  const handleOnClickCloseMenu = () => {
    const burger = document.querySelector('.active');
    burger.classList.remove('active');
    setShowBurgerMenu(false);
  }

  return (
    <div className="header">
      <div className="burger" onClick={handleOnClickToggleBurger}>
        <span></span>
      </div>
      <NavLink exact to="/"><img className="logoMimado" src={ mimado } alt="Logo de l'hôtel Mimado"/></NavLink>
      <div className="navlink">
        <ul className={`navlink${showBurgerMenu ? "__mobile" : "__desktop"}`}>
          <li className="navlink__one" onClick={handleOnClickCloseMenu}>
            <NavLink exact to="/"  activeClassName="navlink__one--active">accueil</NavLink>
          </li>
          <li className="navlink__one" onClick={handleOnClickCloseMenu}>
            <NavLink exact to="/hebergement"  activeClassName="navlink__one--active">hébergement</NavLink>
          </li>
          <li className="navlink__one" onClick={handleOnClickCloseMenu}>
            <NavLink exact to="/restauration"  activeClassName="navlink__one--active">restauration</NavLink>
          </li>
          <li className="navlink__one" onClick={handleOnClickCloseMenu}>
            <NavLink exact to="/prestation"  activeClassName="navlink__one--active">préstations</NavLink>
          </li>
          <li className="navlink__one" onClick={handleOnClickCloseMenu}>
            <NavLink exact to="/activites"  activeClassName="navlink__one--active">activités</NavLink>
          </li>
          <li className="navlink__one" onClick={handleOnClickCloseMenu}>
            <NavLink exact to="/contact"  activeClassName="navlink__one--active">contact</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

// == Export
export default Header;
