import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/icons/logo.svg';

export default class Header extends Component {
  render() {
    return (
      <header className="header">
        <div className="header__container">
          <div className="header__wrapper">
            <Link to="/">
              <img className="header__logo" src={logo} alt="Elyte" />
            </Link>
            <nav className="header__nav nav">
              <ul className="nav__list">
                <li className="nav__item">
                  <Link className="nav__link" to="/">
                    Home
                  </Link>
                </li>
                <li className="nav__item">
                  <Link className="nav__link" to="/about">
                    About us
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
    );
  }
}
