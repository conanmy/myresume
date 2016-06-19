import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server'
import { RoutingContext, match } from 'react-router';
import createLocation from 'history/lib/createLocation';
import routes from '../shared/routes';
import serveStatic from 'serve-static';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import * as reducers from '../shared/reducers';
import promiseMiddleware from '../shared/lib/promiseMiddleware';
import fetchComponentData from '../shared/lib/fetchComponentData';

const app = express();
app.use(serveStatic(__dirname + '/dist'));
app.use((req, res) => {
  const location = createLocation(req.url);
  const reducer = combineReducers(reducers);
  const store = applyMiddleware(promiseMiddleware)(createStore)(reducer);

  match({ routes, location }, (err, redirectLocation, renderProps) => {
    if (err) { 
      console.error(err);
      return res.status(500).end('Internal server error');
    }
    if (!renderProps) return res.status(404).end('Not found.');

    function renderView() {
      const InitialComponent = (
        <Provider store={store}>
          <RoutingContext {...renderProps} />
        </Provider>
      );

      const initialState = store.getState();
      const componentHTML = renderToString(InitialComponent);
      const HTML = `
        <!DOCTYPE html>
        <html>
        <head>
        <title>My Resume</title>
        <link rel="stylesheet" type="text/css" href="/bundle.css" />
        </head>
        <body>
          <div id="react-view">${componentHTML}</div>
          <script type="application/javascript" src="/bundle.js"></script>
        </body>
        </html>
      `;
      return HTML;  
    }

    fetchComponentData(store.dispatch, renderProps.components, renderProps.params)
      .then(renderView)
      .then(html => res.end(html))
      .catch(err => res.end(err.message));
  });
});
export default app;