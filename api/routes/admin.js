// --------------------------------------------------------------------------
// START: ADMIN.JS REQUIREMENTS FOR FUNCTIONALITY
const mongoose = require('mongoose');
const express = require('express');
const routes = express.Router();
// END: ADMIN.JS REQUIREMENTS FOR FUNCTIONALITY
// --------------------------------------------------------------------------
// START: CONTROLLERS REQUIRED
const adCont = require('../controllers/admin.js');
// END: CONTROLLERS REQUIRED
// --------------------------------------------------------------------------
// START: INTERNAL ROUTES
routes.get('/', adCont.tstFn);
routes.get('/sesh', adCont.seshTest);
routes.get('/sesh/get', adCont.seshGetTest);
// END: INTERNAL ROUTES
// --------------------------------------------------------------------------
// START: EXTERNAL ROUTES
routes.use('/user', require('./user.js'));
routes.use('/data', require('./userData.js'));
// END: EXTERNAL ROUTES
// --------------------------------------------------------------------------
// START: MODULE EXPORT
module.exports = routes;
// END: MODULE EXPORT
// --------------------------------------------------------------------------
