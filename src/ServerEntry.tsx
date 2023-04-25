import React from 'react';

import { renderToPipeableStream } from 'react-dom/server';
import { Provider } from 'react-redux';
import type { Request, Response } from 'express';

import { StaticRouter } from 'react-router-dom/server';
import store from 'store';
import App from './App';

export function render(req: Request, res: Response, template: string) {
  const html = template.split('<!--app-html-->');
  res.setHeader('content-type', 'text/html');
  res.write(html[0]);
  const stream = renderToPipeableStream(
    <React.StrictMode>
      <Provider store={store}>
        <StaticRouter location={req.url}>
          <App />
        </StaticRouter>
      </Provider>
    </React.StrictMode>,
    {
      onShellReady() {
        res.statusCode = 200;
        stream.pipe(res);
      },
      onShellError() {
        res.status(500);
        res.setHeader('content-type', 'text/html');
        res.send('<p>Something went wrong</p>');
      },
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
