var express = require('express');
var cookieParser = require('cookie-parser'); //쿠키 파서 모듈

var app = express();
app.use(cookieParser()); //쿠키 파서 미들웨어 등록

app.get('/count', (req, res)=>{
    if(req.cookies.count) //쿠키 값이 있다면
        var count = parseInt(req.cookies.count); //웹 브라우저가 가지고 있는 쿠키값
    else //쿠키를 구운 적이 없다면
        var count = 0;

    count = count + 1;
    res.cookie('count', count); //웹서버에서 웹브라우저에 응답할 때 쿠키값 셋팅.
    res.send('count : ' + count);
})

app.listen(3003, ()=>{
    console.log("Connected 3003 port!!");
})