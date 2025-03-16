// API - Router
const express = require('express');
const router = express.Router();

// Test Routers
const { Test, Test2 } = require('./_test')
router.route('/test1').get(Test);
router.route('/test2').get(Test);

// Initiate Database
const { checkDB, initiateDB, dropDB} = require('./dbInitialize');
router.route('/checkdb').get(checkDB);
router.route('/install').get(initiateDB);
router.route('/dropdb').get(dropDB);

// Export 
module.exports = router;