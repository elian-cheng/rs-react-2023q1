import path from 'path';
import fsp from 'fs/promises';
import express, { Request, Response } from 'express';
import { installGlobals } from '@remix-run/node';
import cors from 'cors';
import { fileURLToPath } from 'url';
import compression from 'compression';

installGlobals();
const __dirname = path.dirname(fileURLToPath(import.meta.url));

const root = process.cwd();
const isProduction = process.env.NODE_ENV === 'production';

function resolve(p: string): string {
  return path.resolve(__dirname, p);
}

async function createServer(): Promise<express.Application> {
  const app = express();
  app.use(cors());

  let vite: import('vite').ViteDevServer;

  if (!isProduction) {
    vite = await import('vite').then((vite) =>
      vite.createServer({
        root,
        server: { middlewareMode: true, hmr: true },
        appType: 'custom',
      })
    );

    app.use(vite.middlewares);
  } else {
    app.use(compression());
    app.use(express.static(resolve('dist/client')));
  }

  app.use('*', async (req: Request, res: Response) => {
    try {
      let template: string;

      let render: (req: Request, res: Response, html: string) => void;

      if (!isProduction) {
        template = await fsp.readFile(resolve('index.html'), 'utf8');
        template = await vite.transformIndexHtml(req.url, template);
        render = (await vite.ssrLoadModule('src/ServerEntry.tsx')).render;
      } else {
        template = await fsp.readFile(resolve('dist/client/index.html'), 'utf8');
        // @ts-ignore
        render = (await import('dist/server/ServerEntry.js')).render;
      }

      try {
        render(req, res, template);
      } catch (e) {
        if (e instanceof Response && e.status >= 300 && e.status <= 399) {
          return res.redirect(e.status, e.headers.get('Location') as string);
        }
        throw e;
      }
    } catch (err: unknown) {
      const error = err as Error;
      if (!isProduction && vite) {
        vite.ssrFixStacktrace(error);
      }
      console.log(error.stack);
      res.status(500).end(error.stack);
    }
  });

  return app;
}

createServer().then((app) => {
  app.listen(3000, () => {
    console.log('HTTP server is running at http://localhost:3000');
  });
});
