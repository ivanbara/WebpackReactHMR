import path from 'path';
import express from 'express';

// Webpack
import webpack from 'webpack';
import config from './webpack.config.dev';
import webpackDM from 'webpack-dev-middleware';
import webpackHM from 'webpack-hot-middleware';

// React and React-Router
import React from 'react';
import { renderToString } from 'react-dom/server';
import { match, RouterContext } from 'react-router';
import routes from './routes/router';


const port = 3000;
const app = express();


const compiler = webpack(config);
app.use(webpackDM (compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));
app.use( webpackHM (compiler)); 


app.get('*', function (req, res) {
	match({ routes: routes, location: req.url }, (err, redirect, props) => {
    if (err) {
      res.status(500).send(err.message)
    
    } else if (props) {

      const appHtml = renderToString(<RouterContext {...props}/>);
      const html = `
        <!DOCTYPE html>
        <html>
					<head>
					<title>Hot Webpack</title>
					<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css"> 
					</head>
					<body>
					<div id="app" class="wrapper">${appHtml}</div>
					<script src="/dist/bundle.js"></script>
					</body>
        </html>
        `;
      // send to the browser
      res.status(200).send(html);
    } else {
      // no errors, no redirect, return not found
      res.status(404).send('Not Found')
    }
  });

});



app.listen(port, function onAppListening(err) {
  if (err) {
    console.error(err);
  } else {
  	console.info('==> 🌎  Webpack development server listening on port %s', port);
  }
});