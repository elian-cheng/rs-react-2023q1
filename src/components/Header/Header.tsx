import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import logo from '../../assets/icons/logo.svg';

interface INavigation {
  name: string;
  href: string;
}

const navigation: INavigation[] = [
  {
    name: 'Home',
    href: '/',
  },
  {
    name: 'About',
    href: '/about',
  },
  {
    name: 'Form',
    href: '/form',
  },
];

const Header = (): JSX.Element => {
  const [pageTitle, setPageTitle] = useState('HomePage');
  const location = useLocation();

  useEffect(() => {
    setPageTitle(() => {
      const path = location.pathname;
      if (path === '/about') {
        return 'AboutPage';
      } else if (path === '/form') {
        return 'FormPage';
      } else {
        return 'HomePage';
      }
    });
  }, [location]);

  return (
    <header className="header">
      <div className="header__container">
        <div className="header__wrapper">
          <Link to="/" onClick={() => setPageTitle('HomePage')}>
            <img className="header__logo" src={logo} alt="Elyte" />
          </Link>
          <nav className="header__nav nav">
            <ul className="nav__list">
              {navigation.map((link) => (
                <li key={link.name} className="nav__item">
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? 'nav__link nav__link_active' : 'nav__link'
                    }
                    to={link.href}
                    onClick={() => setPageTitle(`${link.name}Page`)}
                  >
                    {link.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <h1>{pageTitle}</h1>
      </div>
    </header>
  );
};

export default Header;
