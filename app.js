var express = require('express');
var bodyParser = require('body-parser')
var fs = require('fs');
var app = express();

app.use(bodyParser.urlencoded({extended: false}));

app.get('/', (req, res)=>{
    res.send('Hello');
})

//post 방식
app.get('/form', (req, res)=>{
    fs.readFile('form.html', 'utf-8', (err, data)=>{
        res.send(data);
    })
})

//post 방식 전달 받음. body-parser 이용
app.post('/form_receiver', (req, res)=>{
    var title = req.body.title;
    var description = req.body.description;

    res.send(title + ', ' + description);
})

app.listen(3000, ()=>{
    console.log('Connected 3000 port!');
})