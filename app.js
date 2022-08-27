const express = require('express');
const app = express();
const bodyparser = require('body-parser');

app.use(bodyparser.urlencoded({
    extended:true
}))

app.get('/', (req, res) => {
    res.send('hello world')
})

app.get('/about', (req, res) => {
    res.send('I am on about page');    
})



app.listen(3000,() => {
    console.log('server started on port 3000',);
})
