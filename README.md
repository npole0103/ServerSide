# ServerSide
ServerSide with Nodejs

---

JS : 웹 안에 있는 기술이었다.

GMAIL GMAP의 등장으로 JS에 대한 이목이 집중되었다.

웹 브라우저만 있다면 애플리케이션을 쓸 수 있음.

웹에서 사용될 수 있는 기술은 JS밖에 없다.

---

Node.js : 웹 브라우저 위에서 동작하는 자바스크립트를 서버 쪽에서도 동작하는 자바스크립트로 확장.

* 구글의 V8 엔진
* event-driven-programming
* non-blocking

---
## 코드 기초

``` js
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
```

## 모듈 사용

`npm init` : 현재 디렉토리를 패키지로 지정하는 명령어.

npm을 통해서 독립적인 소프트웨어를 사용할 수 있게 해줌.

uglify-js : 기계가 최적화하여 이해할 수 있도록 만들어 줌.

undersocre.js : 기본 js 객체들을 확장하지 않고 함수형 프로그래밍을 지원할 수 있는 라이브러리.

---

```js
var scores = [84, 99, 91, 65, 87, 55, 72, 68, 95, 42],
topScorers = [], scoreLimit = 90;

for (i=0; i<=scores.length; i++)
{
   if (scores[i]>scoreLimit)
   {
      topScorers.push(scores[i]);
   }
}

console.log(topScorers);
```

underscore를 사용한다면?

``` js
var scores = [84, 99, 91, 65, 87, 55, 72, 68, 95, 42],
topScorers = [], scoreLimit = 90;

topScorers = _.select(scores, function(score){ return score > scoreLimit;});

console.log(topScorers);
```
훨씬 가독성이 좋다.

---

`package.json` : 만약 우리가 앱을 개발하면 npm에 등록하여 다른 사람이 쓸 수 있도록 해줌.

`npm install underscore --save` : 우리의 패키지는 언더스코어에 의존하고 있다를 package.json에 표시

---

## callback 함수

입력 값을 함수로 준다. 우리가 호출할 함수가 아닌 호출당할 함수임.

## 동기 비동기

동기 Synchronous : 동기적으로 순차적으로 처리

비동기 Asynchronous : 시간이 걸리는 작업들을 비동기적으로

일반 메소드는 비동기 방식

메소드에 Sync가 붙어있으면 동기 방식

비동기 방식은 콜백에서 작업이 완료되어야 실행됨. 순서가 뒤죽박죽


## Express

라우트 기능 : 라우터는 사용자의 요청을 어떤 컨트롤러에 전달해줄 것인가?


**정적파일을 서비스 하는 법**

`app.use(express.static('public'))` : public 이라는 디렉토리에 정적인 파일을 가져다 놓으면 사용자에게 서비스할 수 있다.

정적 파일 처리 : 새로고침만 해주면 됨.

동적 파일 처리 : 노드를 껐다 켜야함.

## 템플릿 엔진

정적처리와 동적처리의 장점을 모두 갖고 있음.

## 쿼리스트링

`http://a.com/topic?id=1`

`req.query.id` `req.query.name`

쿼리 스트링으로 값을 받고 싶다면 `req.query.id`

시멘틱 URL로 받고 싶다면 `req.params.id`

``` js
app.get('/topic/:id/:mode', (req, res)=>{
    res.send(req.params.id + ',' + req.params.mode);
})
```

## POST 방식

사용자의 아이디와 패스워드 서버로 전송할 때

정보의 양이 많아지면 URL 규격상 정보를 버리게 됨. 그럴 때는 POST 방식

`body-parser` 사용해야함.

`npm install body-parser`

## Supervisor

자바스크립트 코드를 바꾸면 자동으로 변경시켜줌.

`npm install supervisor -g`

`supervisor app.js`

## mysql

`npm install node-mysql --save`

스켈레톤 코드

``` js
var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',    // 호스트 주소
    user: 'root',           // mysql user
    password: '111111',       // mysql password
    database: 'opentutorials'         // mysql 데이터베이스
});
connection.connect();

connection.query('SELECT * FROM topic;',
    function (error, results, fields) {
        if (error) throw error;
        for (var i = 0; i < results.length; i++) {
            console.log(results[i].id + " " + results[i].title);
        }
    });

connection.end();

```

`res.redirect('/topic/'+ result.id)` << 리다이렉션


