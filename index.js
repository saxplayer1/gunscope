const express = require('express')
const Gun = require('gun')
const app = express()
const port = 3030
app.use(Gun.serve)

const server = app.listen(port, () => {
    console.log(`Listening app at http://localhost:${port}`)
})

Gun({
    web: server,
    verify: {
        check: function () {
            console.log("PEER CONNECTED")
            return true
        }
    }
})