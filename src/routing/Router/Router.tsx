import AboutPage from 'pages/AboutPage/AboutPage';
import ErrorPage from 'pages/ErrorPage/ErrorPage';
import FormPage from 'pages/FormPage/FormPage';
import HomePage from 'pages/HomePage/HomePage';
import React, { Component } from 'react';
import { Route, RouteObject, Routes } from 'react-router-dom';

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/about',
    element: <AboutPage />,
  },
  {
    path: '/form',
    element: <FormPage />,
  },
  {
    path: '*',
    element: <ErrorPage />,
  },
];
export default class Router extends Component {
  render() {
    return (
      <Routes>
        {routes.map((route) => (
          <Route key={route.path} path={route.path} element={route.element} />
        ))}
      </Routes>
    );
  }
}
