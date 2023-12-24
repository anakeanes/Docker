//command: npm install // install node package manager (all packages for node running)
//command: npm init /create package.json
//create index.js


const express = require('express')
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