//command: npm install // install node package manager (all packages for node running)
//command: npm init /create package.json
//create index.js


const express = require('express')
const mysql = require('mysql2/promise')
const app = express()
const port = 8000

let conn = null

// initMySQL is to initiate mysql, and then define at line 29
const initMySQL = async () => {
    conn = await mysql.createConnection({ 
        host: 'db', // or it can be localhost, same as in db in docker-compose.yml
        user: 'root',
        password: 'root',
        database: 'tutorial'
    })  
}

//create API hello-world

app.get ('/hello-world', (req, res) => { //go to path http://localhost:8000/hello-world
    res.send('hello world')
})

// create path to get the details from the database
app.get('/user', async (req,res) => {
    const [result] = await conn.query ('SELECT * FROM user') //define the array "result" to store the value from the requested asynchronous function. coonection query with the command of SQL
    res.json(result) //define the response in json format, store in the variable "result"
})

app.listen(port, async () => {
    await initMySQL()
    console.log(`Server running at http://localhost:${port}/`) //beware of using '' and ``
})

//then create docker file to create custom image

// after create a function of get method from phpmyadmin, use the command: docker-compose down, to stop the running docker before we build them up again
// then run the command: docker-compose up -d --build

//try to shoot the API via Postman
//issue log: it cannot get the value from the address http://localhost:8080/user (come out with 404 not found)
//command: docker ps, will see that the container "node" is not running, use the command: docker ps -a abnd we will se the "node" docker has been killed
//Find the reasin via the command: docker logs node, the output will be as the following
///usr/src/app/index.js:14
//conn = await mysql.createConnection({ 
//    ReferenceError: mysql is not defined
//    at initMySQL (/usr/src/app/index.js:14:5)
//    at Server.<anonymous> (/usr/src/app/index.js:35:11)
//    at Object.onceWrapper (node:events:631:28)
//    at Server.emit (node:events:529:35)
//    at emitListeningNT (node:net:1851:10)
//   at process.processTicksAndRejections (node:internal/process/task_queues:81:21)

//turns out that we haven't install mysql package yet, add the line on the top: const mysql = require('mysql/promise')