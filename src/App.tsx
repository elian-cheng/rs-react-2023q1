import React, { Component } from 'react';
import Router from 'routing/Router/Router';
import './styles.scss';

export default class App extends Component {
  render() {
    return (
      <main className="main">
        <div className="main__container">
          <Router />
        </div>
      </main>
    );
  }
}
