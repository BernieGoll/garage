import express from 'express'
import cors from 'cors'
import compression from 'compression'
import morgan from 'morgan'
import bodyParser from 'body-parser'
import { errorHandler as queryErrorHandler } from 'querymen'
import { errorHandler as bodyErrorHandler } from 'bodymen'
import { env } from '../../config'
const path = require('path');

export default (apiRoot, routes) => {
  const app = express()

  /* istanbul ignore next */
  
    app.use(cors())
    app.use(compression())
    app.use(morgan('dev'))
  
  // Formatting setup
  app.use(bodyParser.urlencoded({ extended: false }))
  app.use(bodyParser.json())

  // Connect to Angular
  app.use(express.static(path.join(__dirname + '/public')));

  // Api routes
  app.use(apiRoot, routes);

  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'));
  });

  // Error handling
  app.use(queryErrorHandler())
  app.use(bodyErrorHandler())

  return app
}
