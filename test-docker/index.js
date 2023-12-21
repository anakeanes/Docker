//command: npm install // install node package manager (all packages for node running)
//command: npm init /create package.json
//create index.js


const express = require('express')
const app = express()
const port = 8000

//create API hello-world

app.get ('/hello-world', (req, res) => { //go to path http://localhost:8000/hello-world
    res.send('hello world')
})

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`) //beware of using '' and ``
})

//then create docker file to create custom image
