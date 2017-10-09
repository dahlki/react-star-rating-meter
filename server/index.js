// const express = require('express');
// const app = express();
// const path = require('path');
// const morgan = require('morgan');
// const bodyParser = require('body-parser');

// const PORT = process.env.PORT || 8000;

// //logging middleware
// app.use(morgan('dev'));

// //body parsing middleware for POST and PUT requests
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));


// // Serve static files from ../public
// app.use(express.static(path.resolve(__dirname, '..', 'example')))

// // This middleware will catch any URLs resembling a file extension for example: .js, .html, .css
// app.use((req, res, next) => {
//    if (path.extname(req.path).length > 0) {
//        res.status(404).end();
//    } else next(null);
// });

// // Send index.html for anything else.
// app.get('*', (req, res) => {
//  console.log('*******');
//  res.sendFile(path.join(__dirname, '../example/index.html'));
// });

// //error handling
// app.use('/', (err, req, res, next) => {
//  console.log('******ERROR******');
//  console.error(err);
//  console.error(err.stack);
//  res.status(err.status || 500).send(err.message || 'Internal Server error.');
// });

// //server
// app.listen(PORT, () => {
//  console.log(`server listening on port ${PORT}`);
// })
