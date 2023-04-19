import React from 'react';

import {
  PipeableStream,
  renderToPipeableStream,
  RenderToPipeableStreamOptions,
} from 'react-dom/server';
import { Provider } from 'react-redux';

import { StaticRouter } from 'react-router-dom/server';
import store from 'store';
import App from './App';

// import Loader from 'components/Loader/Loader';
// const AppComponent = React.lazy(() => import('./App'));

export default function render(url: string, opts: RenderToPipeableStreamOptions): PipeableStream {
  const stream = renderToPipeableStream(
    <React.StrictMode>
      <Provider store={store}>
        <StaticRouter location={url}>
          {/* <React.Suspense fallback={<Loader />}>
            <AppComponent />
          </React.Suspense> */}
          <App />
        </StaticRouter>
      </Provider>
    </React.StrictMode>,
    opts
  );
  return stream;
}
