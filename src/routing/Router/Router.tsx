import AboutPage from 'pages/AboutPage/AboutPage';
import ErrorPage from 'pages/ErrorPage/ErrorPage';
import HomePage from 'pages/HomePage/HomePage';
import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';

export default class Router extends Component {
  render() {
    return (
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    );
  }
}
