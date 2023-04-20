import React from 'react';

import {
  PipeableStream,
  renderToPipeableStream,
  RenderToPipeableStreamOptions,
} from 'react-dom/server';
import { Provider } from 'react-redux';
import type { Request, Response } from 'express';

import { StaticRouter } from 'react-router-dom/server';
import store from 'store';
import App from './App';

// import Loader from 'components/Loader/Loader';
// const AppComponent = React.lazy(() => import('./App'));

export function render(req: Request, res: Response, template: string) {
  const html = template.split('<!--app-html-->');
  res.setHeader('content-type', 'text/html');
  res.write(html[0]);
  const stream = renderToPipeableStream(
    <React.StrictMode>
      <Provider store={store}>
        <StaticRouter location={req.url}>
          {/* <React.Suspense fallback={<Loader />}>
            <AppComponent />
          </React.Suspense> */}
          <App />
        </StaticRouter>
      </Provider>
    </React.StrictMode>,
    {
      onShellReady() {
        res.statusCode = 200;
        stream.pipe(res);
      },
      onShellError() {},
      onAllReady() {
        res.write(html[1]);
        res.end();
      },
      onError(err: unknown) {
        console.error(err as Error);
      },
    }
  );
}
