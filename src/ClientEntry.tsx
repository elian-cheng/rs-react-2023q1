import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { Provider } from 'react-redux';
import store from './store';
import { hydrateRoot } from 'react-dom/client';

// import Loader from 'components/Loader/Loader';
// const AppComponent = React.lazy(() => import('./App'));

hydrateRoot(
  document.getElementById('root') as HTMLElement,
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        {/* <React.Suspense fallback={<Loader />}>
          <AppComponent />
        </React.Suspense> */}
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
