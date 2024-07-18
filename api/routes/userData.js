// --------------------------------------------------------------------------
/* THIS DOCUMENT HANDLES ROUTING FOR USER QUESTIONS AND USER ANSWERS */
// --------------------------------------------------------------------------
// START: USERDATA.JS REQUIREMENTS FOR FUNCTIONALITY
const express = require('express');
const routes = express.Router();
// END: USERDATA.JS REQUIREMENTS FOR FUNCTIONALITY
// --------------------------------------------------------------------------
// START: CONTROLLERS REQUIRED
const dataCont = require('../controllers/userData.js');
// END: CONTROLLERS REQUIRED
// --------------------------------------------------------------------------
// START: INTERNAL ROUTES
routes.get('/', dataCont.getAllPrediction);
routes.get('/:id', dataCont.getOnePrediction);
routes.post('/', dataCont.postNewPrediction);
routes.patch('/:id', dataCont.patchPrediction);
routes.delete('/:id', dataCont.deletePrediction);
routes.post('/predictions', dataCont.findPredictions);
// routes.get('/predictions/:id', dataCont.findPredictions);
// routes.post('/ask', dataCont.askAnswer);
// END: INTERNAL ROUTES
// --------------------------------------------------------------------------
// START: MODULE EXPORT
module.exports = routes;
// END: MODULE EXPORT
// --------------------------------------------------------------------------
