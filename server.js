const express = require('express')
const app = express()

 

app.get('/',(req, res) => {
    res.send('Hello World')
})

app.get('/greet', (req, res) => {
    let person = 'Guest'
    if(req.query.person)
        person = req.query.person
    res.send('Good Morning'+ person)
})

app.post('/greet', (req, res) => {
    let person = 'Guest'
    console.log(req.body)
    if(req.query.person)
        person = req.query.person
    res.send('Good Morning'+ person)
})


app.get('/form', (req, res) => {
    res.sendFile(__dirname+'/form.html')
})

app.listen(4444, () => {
    console.log('server started on http://localhost:4444')
})