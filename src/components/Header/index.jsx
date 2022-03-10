import React from 'react';
import { NavLink } from 'react-router-dom';
import './style.css';

const Header = () => {
  return (
    <>
      <nav>
        <ul>
          <NavLink activeClassName="active" exact to="/">
            Domů
          </NavLink>{' '}
          <NavLink activeClassName="active" to="/razeni">
            Řazení
          </NavLink>
        </ul>
      </nav>
    </>
  );
};

export default Header;
