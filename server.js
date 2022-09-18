const express = require('express')
const Gun = require('gun')
const app = express()
const port = 3030
const endpoints = require ('./Endpoints')
app.use(Gun.serve)

app.use(express.json());
app.use('/bot/', endpoints)

const server = app.listen(port, () => {
    console.log(`Listening app at http://localhost:${port}`)
})

const gun = Gun({
    web: server,
    verify: {
        check: function () {
            return true
        }
    }
})

module.exports = {
    gun
}