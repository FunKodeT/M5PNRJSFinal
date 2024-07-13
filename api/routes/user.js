// --------------------------------------------------------------------------
/* THIS DOCUMENT HANDLES ROUTING FOR ACCOUNTS AND USER INFORMATION */
// --------------------------------------------------------------------------
// START: USER.JS REQUIREMENTS FOR FUNCTIONALITY
const express = require('express');
const routes = express.Router();
// END: USER.JS REQUIREMENTS FOR FUNCTIONALITY
// --------------------------------------------------------------------------
// START: CONTROLLERS REQUIRED
const userCont = require('../controllers/user.js');
// END: CONTROLLERS REQUIRED
// --------------------------------------------------------------------------
// START: INTERNAL ROUTES
routes.get('/', userCont.getAllUser);
routes.get('/:id', userCont.getOneUser);
routes.post('/', userCont.postNewUser);
routes.patch('/:id', userCont.patchUser);
routes.delete('/:id', userCont.deleteUser);
routes.post('/login/:id', userCont.loginUser);
// END: INTERNAL ROUTES
// --------------------------------------------------------------------------
// START: MODULE EXPORT
module.exports = routes;
// END: MODULE EXPORT
// --------------------------------------------------------------------------
