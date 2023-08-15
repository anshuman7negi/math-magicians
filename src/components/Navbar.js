import React from 'react';
import { Link } from 'react-router-dom';
import './styles/Nav.css';

const Navbar = () => (
  <nav className="navBar">
    <h1 className="title">Math Magicians</h1>
    <ul className="linksContainer">
      <li className="linkItems">
        <Link to="/" className="links">
          Home
        </Link>
      </li>
      <div className="separateDiv" />
      <li className="linkItems">
        <Link to="/calculator" className="links">
          Calculator
        </Link>
      </li>
      <div className="separateDiv" />
      <li className="linkItems">
        <Link to="/quote" className="links">
          Quote
        </Link>
      </li>
    </ul>
  </nav>
);

export default Navbar;
