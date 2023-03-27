import Footer from 'components/Footer/Footer';
import Header from 'components/Header/Header';
import React, { Component } from 'react';
import Router from 'routing/Router/Router';
import './styles.scss';

export default class App extends Component {
  render() {
    return (
      <>
        <Header />
        <main className="main">
          <div className="main__container">
            <Router />
          </div>
        </main>
        <Footer />
      </>
    );
  }
}
