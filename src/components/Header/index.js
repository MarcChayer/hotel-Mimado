// == Import npm
import React from 'react';
import { NavLink } from 'react-router-dom';

// == Import
import './header.scss';
import { mimado } from 'src/assets/images/mimado.svg';

// == Composant
const Header = () => { 
  const [showBurgerMenu, setShowBurgerMenu] = React.useState(false)

  const handleOnClick = () => {
    const burger = document.querySelector('.burger');
    burger.classList.toggle('active');
    setShowBurgerMenu(!showBurgerMenu);
  }

  return (
    <div className="header">
      <img className="logoMimado" src={ mimado } alt="Logo de l'hôtel Mimado"/>
      <div className="burger" onClick={handleOnClick}>
        <span></span>
      </div>
      <div>
        <ul className={`${showBurgerMenu ? "navlinkMobile" : "navlinkMobile__hidden"}`}>
          <li>
            <NavLink exact to="/" className="navlinkMobile__one" activeClassName="navlinkMobile__one--active">accueil</NavLink>
          </li>
          <li>
            <NavLink exact to="/hebergement" className="navlinkMobile__one" activeClassName="navlinkMobile__one--active">hébergement</NavLink>
          </li>
          <li>
            <NavLink exact to="/restauration" className="navlinkMobile__one" activeClassName="navlinkMobile__one--active">restauration</NavLink>
          </li>
          <li>
            <NavLink exact to="/prestation" className="navlinkMobile__one" activeClassName="navlinkMobile__one--active">préstations</NavLink>
          </li>
          <li>
            <NavLink exact to="/activites" className="navlinkMobile__one" activeClassName="navlinkMobile__one--active">activités</NavLink>
          </li>
          <li>
            <NavLink exact to="/contact" className="navlinkMobile__one" activeClassName="navlinkMobile__one--active">contact</NavLink>
          </li>
        </ul>
        <ul className="navlinkDesktop">
          <li>
            <NavLink exact to="/" className="navlinkMobile__one" activeClassName="navlinkMobile__one--active">accueil</NavLink>
          </li>
          <li>
            <NavLink exact to="/hebergement" className="navlinkMobile__one" activeClassName="navlinkMobile__one--active">hébergement</NavLink>
          </li>
          <li>
            <NavLink exact to="/restauration" className="navlinkMobile__one" activeClassName="navlinkMobile__one--active">restauration</NavLink>
          </li>
          <li>
            <NavLink exact to="/prestation" className="navlinkMobile__one" activeClassName="navlinkMobile__one--active">préstations</NavLink>
          </li>
          <li>
            <NavLink exact to="/activites" className="navlinkMobile__one" activeClassName="navlinkMobile__one--active">activités</NavLink>
          </li>
          <li>
            <NavLink exact to="/contact" className="navlinkMobile__one" activeClassName="navlinkMobile__one--active">contact</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

// == Export
export default Header;
