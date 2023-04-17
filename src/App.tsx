import Footer from 'components/Footer/Footer';
import Header from 'components/Header/Header';
import React from 'react';
import Router from 'routing/Router/Router';
import './styles.scss';

export default function App() {
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
