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
    name: 'About Us',
    href: '/about',
  },
];

interface IHeaderProps {
  pageName: string;
  changeName: boolean;
}
export default class Header extends Component<object, IHeaderProps> {
  constructor(props: IHeaderProps) {
    super(props);
    this.state = {
      pageName: 'Home',
      changeName: true,
    };
  }

  changePageName() {
    let name = '';
    const path = location.pathname;
    if (path === '/') {
      name = 'Home';
    } else {
      const pathName = path.match(/[a-z]{1,}/gi);
      if (pathName) {
        name = pathName.length > 1 ? pathName.join(' ') : pathName.join();
      }
    }
    this.setState({ pageName: name });
  }

  componentDidUpdate(_prevProps: { changeName: boolean }, prevState: { changeName: boolean }) {
    if (prevState.changeName !== this.state.changeName) this.changePageName();
  }

  componentDidMount() {
    this.changePageName();
  }

  changePageNameHandler() {
    this.setState((state) => {
      return { changeName: !state.changeName };
    });
  }

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
                {navigation.map((link) => (
                  <li key={link.name} className="nav__item">
                    <NavLink
                      className={({ isActive }) =>
                        isActive ? 'nav__link nav__link_active' : 'nav__link'
                      }
                      to={link.href}
                      onClick={this.changePageNameHandler.bind(this)}
                    >
                      {link.name}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
        <h1 className="header__title">{this.state.pageName + 'Page'}</h1>
      </header>
    );
  }
}
