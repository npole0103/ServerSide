var express = require('express');
var cookieParser = require('cookie-parser'); //쿠키 파서 모듈

var app = express();
app.use(cookieParser()); //쿠키 파서 미들웨어 등록


var products = {
    1: { title: 'The histroy of web 1' },
    2: { title: 'The next web' }
};

app.get('/products', (req, res) => {
    var output = '';
    for (var name in products) {
        output += `
        <li>
            <a href="/cart/${name}">${products[name].title}</a>
        </li>`
    }

    res.send(`
    <h1>Products</h1>
    <ul>${output}</ul>
    <a href="/cart">Cart</a>
    `);
});

app.get('/cart/:id', (req, res) => {
    var id = req.params.id;
    if (req.cookies.cart) //카트에 값이 있다면 그 값을 쓴다.
        var cart = req.cookies.cart;
    else //카트에 값이 없다면 최초 실행이라면
        var cart = {};

    if (!cart[id]) //카트에 값이 없다면 0으로 초기화
        cart[id] = 0;

    cart[id] = parseInt(cart[id]) + 1; //기존 값에 더하기 1
    res.cookie('cart', cart); //카트 객체를 사용자 컴퓨터에 심음.
    res.redirect('/cart');
});


app.get('/cart', (req, res) => {
    var cart = req.cookies.cart;
    if (!cart)
        res.send("Empty!");
    else {
        var output = '';
        for(var id in cart)
        {
            output += `<li>${products[id].title} (${cart[id]})</li>`;
        }
    }
    res.send(`
    <h1>Cart</h1>
    <ul>${output}</ul>
    <a href="/products">Products List</a>
    `);
});

app.get('/count', (req, res) => {
    if (req.cookies.count) //쿠키 값이 있다면
        var count = parseInt(req.cookies.count); //웹 브라우저가 가지고 있는 쿠키값
    else //쿠키를 구운 적이 없다면
        var count = 0;

    count = count + 1;
    res.cookie('count', count); //웹서버에서 웹브라우저에 응답할 때 쿠키값 셋팅.
    res.send('count : ' + count);
})

app.listen(3003, () => {
    console.log("Connected 3003 port!!");
})