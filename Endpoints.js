const express = require('express');
const cors = require('cors')
const Service = require('./Service')

const router = express.Router();

router.post('/post', async (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', "*")
    try {
        let result = await Service.makeNewPost(req, res);
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
})

router.get('/', async (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', "*")
    try {
        let result = await Service.getLastFive(req, res);
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
})

module.exports = router;