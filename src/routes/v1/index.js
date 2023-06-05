const express = require('express');

const router =express.Router();

const {InfoController} = require('../../controllers/index')
const {EmailController} = require('../../controllers')
router.get('/info', InfoController.info)

router.post('/tickets',EmailController.create)
module.exports = router