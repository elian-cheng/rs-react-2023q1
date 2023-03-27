import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
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

interface IHeader {
  pageTitle: string;
}

export default class Header extends Component<object, IHeader> {
  constructor(props: object) {
    super(props);
    this.state = { pageTitle: 'HomePage' };
  }

  componentDidMount() {
    this.setPageTitle();
  }

  setPageTitle() {
    let path = location.href;
    path = path.slice(path.lastIndexOf('/'));
    if (path === '/about') {
      this.setState({ pageTitle: 'AboutPage' });
    } else if (path === '/form') {
      this.setState({ pageTitle: 'FormPage' });
    } else {
      this.setState({ pageTitle: 'HomePage' });
    }
  }

  render() {
    return (
      <header className="header">
        <div className="header__container">
          <div className="header__wrapper">
            <Link to="/" onClick={() => this.setState({ pageTitle: 'HomePage' })}>
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
                      onClick={() => this.setState({ pageTitle: `${link.name + 'Page'}` })}
                    >
                      {link.name}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          <h1>{this.state.pageTitle}</h1>
        </div>
      </header>
    );
  }
}
