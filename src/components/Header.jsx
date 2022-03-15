import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  const [hamburger, setHamburger] = useState(false);

  return (
    <>
      <nav className="navigation">
        <button
          onClick={() => setHamburger(!hamburger)}
          className={hamburger ? 'menu menu--opened' : 'menu menu--closed'}
        ></button>
        <ul
          className={
            hamburger
              ? 'navigation__list navigation__list--opened'
              : 'navigation__list'
          }
        >
          <NavLink
            onClick={() => setHamburger(false)}
            className="navigation__item"
            activeClassName="navigation__item--active"
            exact
            to="/"
          >
            Domů
          </NavLink>
          <NavLink
            onClick={() => setHamburger(false)}
            className="navigation__item"
            activeClassName="navigation__item--active"
            to="/razeni"
          >
            Chronologické řazení
          </NavLink>
          <NavLink
            onClick={() => setHamburger(false)}
            className="navigation__item"
            activeClassName="navigation__item--active"
            to="/presouvani"
          >
            Přesouvání po mapě
          </NavLink>
        </ul>
      </nav>
    </>
  );
};

export default Header;
