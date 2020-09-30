import { createError } from 'http-errors';
import promBundle from 'express-prom-bundle';
import express from 'express'
import logger from 'morgan'
import router from './routes'

const app = express();
const metricsMiddleware = promBundle({includeMethod: true, includePath: true});

console.log('Starting application');

app.use(metricsMiddleware);
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', router);
app.use('/favicon.ico', (req, res) => {
    res.status(200)
    res.send()
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.send(err);
});

console.log('Application started');

module.exports = app;
