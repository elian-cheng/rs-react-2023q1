import React from 'react';
import git from '../../../src/assets/icons/footer/github.svg';
import rss from '../../../src/assets/icons/footer/rss.svg';

const Footer = (): JSX.Element => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__wrapper">
          <div className="footer__author">
            <div className="footer__git-icon">
              <img src={git} alt="git logo" />
            </div>
            <div className="footer__author-name">
              <a
                href="https://github.com/elian-cheng"
                target="_blank"
                rel="noreferrer"
                className="footer__author-name footer-link"
              >
                Olga Chernega
              </a>
            </div>
          </div>
          <div className="footer__info">
            <p className="footer__year">2023</p>
            <a
              href="https://rs.school/react/"
              target="_blank"
              rel="noreferrer"
              className="footer__rs-link footer-link"
            >
              <img src={rss} alt="rs school logo" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
