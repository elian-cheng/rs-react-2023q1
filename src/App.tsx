import Footer from 'components/Footer/Footer';
import Header from 'components/Header/Header';
import React, { useEffect, useState } from 'react';
import Router from 'routing/Router/Router';
import './styles.scss';

export default function App() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

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
