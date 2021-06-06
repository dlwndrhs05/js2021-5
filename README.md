# 이중곤 [201930323]
## [6월 1일]

### 웹 브라우저와 자바스크립트

현재 자바스크립트의 최신버전은 ECMAScript6을 사용한다  
하지만 국내에서는 AcitveX등 때문에 최신 버전의 웹 브라우저를 사용 못 할때가 더 많다.  
인터넷 익스플로러는 2004년에 발표된 ECMAScript4를 사용한다.  
인터넷 익스플로러 사용시 자바스크립트가 구동하게 할려면 구버전의 웹 브라우저를 사용해야 한다.
### 구 버전의 웹 브라우저에서 사용할 수 없는 코드
#### let 키워드와 const 키워드
let 키워드와 const 키워드는 ECMAScript6에서 추가된 기능이다  
구 버전의 웹 브라우저에서는 var 키워드를 사용해 변수를 만들어야 한다.
```javascript
//최신 버전 자바스크립트 코드

let variable = 273;
const constant = "Hello World";

//인터넷 익스플로러에서 사용해야 하는 코드
var variableA = 273;
var variable = "Hello World";
```

#### 템플릿 문자열
템플릿 문자열 또한 ECMAScript6에서 추가된 기능으로써 문자열 연결연산자를 사용해야 한다.
```javascript
//최신 버전 자바스크립트 코드
let variable = 273;
console.log('변수의 값은 ${variable}입니다.');

//인터넷 익스플로러에서 사용해야 하는 코드
var variable =273;
console.log('변수의 값은 ' + variable + '입니다.');
```

#### 화살표 함수
화살표 함수 또한 ECMAScript6에서 추가된 기능이다.  
구 버전의 웹 브라우저에서는 함수를 만들 때는 반드시 function 키워드를 사용해야 한다.
```javascript
//최신 버전 자바스크립트 코드
const functionLiteral = () =>{};

//인터넷 익스플로러에서 사용해야 하는 코드
const functionLiteral = function (){};
```
#### for of 반복문
for of 반복문 또한 ECMAScript6 에서 추가된 기능이다.  
구 버전의 웹 브라우저에서는 for in 반복문을 사용해 대체해야 한다.
```javascript
//최신 버전 자바스크립트 코드
const array = ['가','나','다'];
for (let item of array){
    console.log(item);
}

//인터넷 익스플로러에서 사용해야 하는 코드
var array = ['가','나','다'];

for (var item in array){
    console.log(array[i]);
}
```
#### 사용할 수 없는 메소드를 사용한 코드
ECMAScript5에서 추가된 메소드는 사용할 수 없다  
Array 객체의 forEach( ) 메소드,map( ) 메소드,filter( )메소드 등은 활용할 수없다.
```javascript
//최신버전 자바스크립트 코드
const array = [1,2,3,4,5];

array.forEach((item,index) => {
    console.log('${item}: ${index}');
});
//인터넷 익스플로러에서 사용해야 하는 코드
var array = [1,2,3,4,5];

for(var i = 0; i < array.length; i++){
    var index = i;
    var item = array[i];
    console.log(item + ':'+ index);
}
```
### 브라우저 객체 모델
웹 브라우저와 관련된 객체를 브라우저 객체 모델 이라고 한다.
### window 객체
window 객체는 웹페이지 자체를 나타낸다.  
window 객체를 사용하면 새로운 화면을 열거나 웹 브라우저의 크기를 변경하는 등의 일이 가능하다.
|함수|설명|
|:---|:---|
|alert(<메시지>)|경고창을 출력합니다.|
|prompt(<메시지>),<임시글자>)|프롬프트를 출력|

```HTML
<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script>
        //입력
        var input = prompt('글자를 입력해주세요','여기에 입력해주세요');
        //출력
        alert(input);
    </script>
</head>
<body>
    
</body>
</html>
```
### screen 객체
screen 객체는 웹 브라우저 화면이 아니라 운영체제 화면의 속성을 가진다  
screen 객체의 속성
|속성|설명|
|:---|:---|
|width|화면의 너비|
|height|화면의 높이|
|availWidth|실제 화면에서 사용 가능한 너비|
|availHeight|실제 화면에서 사용 가능한 높이|
|colorDepth|사용 가능한 색상 수|
|pixelDepth|한 픽셀당 비트 수|
### loaction 객체와 history 객체
location 객체는 웹 브라우저의 주소창과 관련된다.  
location 객체는 프로토콜의 종류,호스트,이름,문서 위치 등 정보가 있다.  
location 객체의 속상과 메소드도 웹 브라우저 마다 다르다.  
아래의 표는 모든 웹 브라우저에서 공통으로 사용 가능한 속성이다.
|속성|설명|예|
|:---|:---|:---|
|href|문서의 URL주소||
|host|호스트 이름과 포트 번호|localhost:522703|
|hostname|호스트 이름|localhost|
|port|포트 번호|52273|
|pathname|디렉터리 경로|/folder/HTMLPage.html|
|hash|앵커 이름(#~)|#test|
|search|요청 매개 변수|?param=10|
|protocol|프로토콜 종류|http:|
location 객체의 메소드
|메소드|설명|
|:---|:---|
|assign(<링크>)|매개 변수로 전달한 위치로 이동|
|reload()|새로고침|
|replace()|매개 변수로 전달한 위치로 이동(뒤로가기불가)|
```HTML
<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script>
       //loaction 객체를 사용한 페이지 이동
       setInterval(function (){
           location = 'http://hanbit.co.kr';
       }, 3000);
    </script>
</head>
<body>
    
</body>
</html>
```
### navigator 객체
navigator 객체에는 웹 페이지를 실행하는 웹 브라우저 정보가 들어있다.
|속성|설명|
|:---|:---|
|appCodeName|웹 브라우저의 코드 이름|
|appName|웹 브라우저의 이름|
|appVersion|웹 브라우저의 버전|
|platform|사용 중인 운영체제의 시스템 환경|
|userAgent|웹 브라우저의 전체적인 정보|
```HTML
<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script>
      // 데스크톱 웹 브라우저와 스마트폰 웹 브라우저 구분
      // navigator 객체의 속성을 출력
      var output = '';
      output += 'appCodeName:' + navigator.appCodeName + '\n';
      output += 'appName:' + navigator.appName + '\n';
      output += 'appVersion:' + navigator.appVersion + '\n';
      output += 'platform:' + navigator.platform + '\n';
      output += 'userAgent' + navigator.userAgent;
      alert(output);

      // ios와 안드로이드 웹 브라우저 구분
      if(navigator.userAgent.toLowerCase().indexOf('iphone') >= 0||
         navigator.userAgent.toLowerCase().indexOf('ipad') >= 0||
         navigator.userAgent.toLowerCase().indexOf('ipod') >= 0||
         navigator.userAgent.toLowerCase().indexOf('android') >= 0){
             alert('모바일 웹 브라우저');
         }else{
             alert('데스크톱 웹 브라우저')
         }
    
      </script>
</head>
<body>
    
</body>
</html>
```
### 문서 객체 모델

### 문서 객체 모델 관련 용어
웹 브라우저에 HTML 파일을 끌어다 놓으면 HTML 파일을 분석해 화면에 출력한다.  
이 때 웹 브라우저가 HTML 파일을 분석하고 출력하는 방식을 문서 객체 모델 이라고 한다.  
HTML에서 각 요소를 노드라고 하며 요소 노드와 텍스트 노드로 구분이 된다.  
h1태그와 script 태그처럼 요소를 생성하는 노드를 요소 노드라고한다.  
반면 화면에 출력되는 문자열은 텍스트 노드라고 한다.  
웹페이지를 처음 실행할 때 HTML 페이지에 있는 태그를 읽으면서 생성하면 '정서적으로 문서 객체를 생성했다'
자바스크립트를 통해 실행하면 '동적으로 문서 객체를 생성'

### 웨 페이지 생성순서 
HTML은 코드를 위에서 아래로 실행한다.
```HTML
<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script>
    alert('Process - 0')
    </script>
</head>
<body>
    <h1>Process - 1</h1>
    <script>alert('Process - 2')</script>
    <h2>Process - 2</h2>
    <script>alert('Process - 3')</script>
</body>
</html>
```
## [5월 25일]

### express 모듈
```javascript
//express 모듈 설치
$ npm install express@4
```
### express 모듈을 사용한 서버 생성과 실행
express 모듈의 기본 메소드
|메소드|설명|
|:---|:---|
|express()|서버애플리케이션 객체 생성|
|app.use()|요청이 왔을떄 실행할 함수를 지정|
|app.listen()|서버 실행|

```javascript
//express 모듈을 사용한 서버 생성과 실행
//모듈 추출
const express = require('express');

//서버 실행
const app = express();

//request 이벤트 리스너 설정
app.use((request,response) =>{
    console.log('Serve running at http://127.0.0.1:52273');
})
```
### 이벤트 라우팅
express 모듈은 페이지 라우팅을 지원한다  
페이지 라우팅이란 클라이언트 요청에 적절한 페이지를 제공하는 기술 이다.  
express 모듈의 페이지 라우팅 메소드
|메소드|설명|
|:---|:---|
|get(path,callback)|GET 요청이 발생시 이벤트 리스너를 지정|
|post(path,callback)|POST 요청이 발생시 이벤트 리스너 지정|
|put(path,callback)|PUT 요청이 발생했을 떄 이벤트 리스너를 지정|
|delete(path,callback)|DELETE 요청이 발생했을 때 이벤트 리스너를 지정|
|all(path,callback)|모든 요청이 발생했을 때 이벤트 리스너 지정|
```javascript
//get 메소드를 이용한 페이지 라우팅

//모듈 추출
const express = require('express');

//서버 생성
const app = express();

//request 이벤트 리스너를 설정
app.get('/page/:id',(request.response) => {
    //토큰을 꺼냄
    const id = request.params.id;
    
    //응답
    response.send('<h1>${id}Page</h1>');
})
    //서버를 실행
    app.listen(52273, () => {
        console.log('Server running at http://127.0.0.1:52273');
    });
```
### response 객체
|메소드|설명|
|:---|:---|
|send()|데이터 본문을 제공|
|status()|상태 코드를 제공|
|set()|헤더를 설정|

```javascript
//response 객체의 기본 메소드
//모듈 추출
const express = require('express');

//서버를 생성
const app = express();

// request 이벤트 리스너를 설정
app.get('*',(request,response) => {
    response.status(404);
    response.set({
        //set('문자열','문자열')또는 set(객체)형태로 입력 할 수 있다.
        'methodB1':'FGHIJ',
        'methodB2':'KLMNO'
    });
    response.send('본문입력');
});
 //서버실행
 app.listen(52273,() => {
     console.log('Server running at http://127.0.0.1:52273');
 });
```
### Content-Type
서버가 데이터를 제공할 때 Content-Type 속성을 헤더에 적어 제공하면 웹브라우저는  
헤더를 확인하고 제공된 데이터의 형식을 구분한다.
MIME 형식
|MIME 형식|설명|
|:---|:---|
|text/plain|기본적인 텍슥트 의미|
|text/html|html 데이터를 의미|
|image/png|png 데이터를 으믜|
|audio/mpe|MP3 음악파일을 의미|
|video/mpeg|MPEG 비디오파일을 의미|
|application/json|json파일을 의미|
|multipart/form-data|입력 양식 데이터를 의미|  


콘텐츠 타입지정 메소드
|메소드|설명|
|:---|:---|
|type( )|Content-Type을 MIME형식으로지정|
```javascript
//type 속성
//모듈추출
const express =require('express');
const fs = require('fs');

//서버생성
const app = express();

// request 이벤트 리스너 설정
app.get('/image',(request,response) => {
    fs.readFile('image.png',(error,data) => {
        //이미지 파일 제공
        respone.type('image/png');
        respone.send(data);
    });
});

app.get('/audio',(request,response) => {
    fs.readFile('audio.mp3',(error,data) => {
        //오디오 파일 제공
        respone.type('audio/mpeg');
        respone.send(data);
    });
});

//서버 실행
app.listen(52273,() => {
     console.log('Server running at http://127.0.0.1:52273');
 });
```

### HTTP 상태 코드
|HTTP 상태 코드|설명|예시
|:---|:---|:---|
|1xx|처리 중|100Continue|
|2xx|성공|200 OK|
|3xx|리다이렉트|300Mutiple Choices|
|4xx|클라이언트 오류|400 Bad Request|
|5XX|서버 오류|500 Internal Sever Error| 

상태코드를 지정 할 때는 status( )메소드를 사용한다
|메소드|설명|
|:---|:---|
|status( )|상태 코드를 지정|
```javascript
//404 Not Found 제공
//모듈 추출
const express = require('express');

//서버를 생성
const app = express();

//request 이벤트 리스너 설정
app.get('*',(request,response) => {
    response.status(404);
    response.send('해당 경로에는 아무 것도 없다');
});

//서버 실행
app.listen(52273,() => {
     console.log('Server running at http://127.0.0.1:52273');
 });
```
### 리다이렉트
상태 코드 3XX 리다이렉트는 굉장히 특수한 상태 코드이다  
웹브라우저가 리다이렉트를 확인하면 화면을 출력하지 않고, 응답 헤더에 있는 Location 속성을 확인해서
해당 위치로 이동한다.

특정경로로 웹 브라우저를 인도할 때 사용하는 것이 리다이렉트이다.
|메소드|설명|
|:---|:---|
|redirect( )|리다이렉트를 실행|
```javascript
//redirect( )메소드를 사용해 이동
//모듈 추출
const express = require('express');

//서버를 생성
const app = express();

//request 이벤트 리스너 설정
app.get('*',(request,response) => {
    response.redirect('http://naver.com');
});

//서버 실행
app.listen(52273,() => {
     console.log('Server running at http://127.0.0.1:52273');
 });
 ```

 ### 요청 매개 변수
 |분류|값|설명|
 |:---|:---|:---|
 |프로토콜|HTTPS|통신에 사용되는 규칙|
 |호스트|(search.)naver.com|애플리케이션 서버(또는 분산 장치 등)의 위치를 의미|
 |URL|search.naver|애플리케이션 서버 내부에서 라우트 위치를 나타냄|
 |요청 매개 변수|?where=nexearch|추가적인 정보를 의미|
 ||&query=초콜릿||
 ||&sm=top_hty||
 ||&fbm=0||
 ||&ie=utf8||

 ```javascript
 //요청 매개변수 추출
 //모듈 추출
const express = require('express');

//서버를 생성
const app = express();

//request 이벤트 리스너 설정
app.get('*',(request,response) => {
    response.status(404);
    response.send('해당 경로에는 아무 것도 없다');
});

//서버 실행
app.listen(52273,() => {
     console.log('Server running at http://127.0.0.1:52273');
 });
 ```

 ### 미들웨어
 웹페이지에서 변경되지않는 요소(이미지,음악,자바스크립트파일,스타일시트 파일 등)을 쉽게 재공해주는 기능  
 미들웨어 설정 메소드
 |메소드|설명|
 |:---|:---|
 |use()|미들웨어를 설정|

 ```javascript
 //정적 파일 제공
 //모듈 추출
const express = require('express');

//서버를 생성
const app = express();
app.use(express.static('public'));

//request 이벤트 리스너 설정
app.get('*',(request,response) => {
    console.log(request.query);
    response.send(request.query);
});

//서버 실행
app.listen(52273,() => {
     console.log('Server running at http://127.0.0.1:52273');
 });

 ```

 ### morgan 미들웨어

 morgan 미들웨어 설치
 ```javascript
 >npm install morgan
 ```
 ```javascript
 //morgan 미들웨어
 //모듈 추출
 const express = require('express');
 const morgan = require('morgan');
 
 //서버를 생성
 const app = express();
 app.use(express.static('public'));
 app.use(morgan('combined'));

 //request 이벤트 리스너 설정
 app.get('*',(request,response) => {
     response.send('명령 프롬프트를 확인');
 });

 //서버 실행
 app.listen(52273, () => ){
     console.log('Server running at http://127.0.01:52273');
 });
 ```
 ### body-parser 미들웨어
 body-parser 미들웨어는 요청 본문을 해석해준다  
 요청본문  
 서버가 클라이언트로 데이터를 전달할 때 응답 본문과 응답 본문의 종류를 함께 전달했던 것 처럼  
 클라이언트도 서버로 본문을 전달할 때 요청 본문의 종류를 함께 전달해야한다.  
 서버에서 클라이언트로 데이터를 전달할 때는 서버에서 대충 보내면 잘 만든 웹 브라우저가 알아서 Content-type을 분석해 본문을 출력하지만  
 클라이언트에서 서버로 데이터를 전달한 이후의 모든 처리는 서버를 개발하는 개발자가 처리해야 한다  
 클라이언트가 어떤 Encoding-Type으로 요청 했는지 확인하고, 변환해서 읽어야 한다. Encoding-Type 에 따라서 변환을 해야하는데   
 이것을 쉽게 해주는 미들웨어가 body-parser이다.
 요청 본문의 종류
 |MIME 형식|종류|
 |:---|:---|
 |application/x-www-form-urlencoded|웹 브라우저에서 입력양식을 POST,PUT,DELETE 방식 등으로 전달 할 때 사용하는 기본적인 요청 형식|
 |application/json|JSON 데이터로 요청하는 방식|
 |multipart/form_data|대용량 파일 전송 요청 방식|
 ```javascript
 //자바스크립트 설치
 >npm install body-parser
 ```
## [5월 18일]

## Node.js
### 전역 변수
|변수|설명|
|:---|:---|
|__filename|현재 실행 중인 코드의 파일 경로를 나타냄|
|__dirname|현재 실행 중인 코드의 폴더 경로를 나타냄|

### process 객체의 속성과 이벤트
Node.js는 process 전역 객체를 제공한다.  
process 객체는 프로세스 정보를 제공하며,제어할 수 있게 하는 객체이다.  
process 객체의 속성
|속성|설명|
|:---|:---|
|env|컴퓨터 환경 정보를 나타낸다|
|version|Node.js 버전을 나타낸다|
|versions|Node.js와 종속된 프로그램 버전을 나타냅니다.|
|arch|프로세서의 아키텍처를 나타냅니다.|
|platform|플랫폼을 나타냅니다.|  


process 객체의 메소드
|메소드|설명|
|:---|:---|
|exit([exitCode=0])|프로그램을 종료|
|memoryUsage( )|메모리사용 정보 객체를 리턴|
|uptime( )|현재 프로그램이 실행된 시간을 리턴|
```javascript
//process 객체의 속성과 메소드 사용
console.log('-process.arch:',process.arch);
console.log('-process.platform:',process.platform);
console.log('-process.connected:',process.connected);
console.log('-process.execArgv:',process.execArgv);
console.log('-process.exeCode:',process.exeCode;
console.log('-process.mainModule',process.Module);
console.log('-process.release:',process.release);
console.log('-process.memoryUsage( ):',process.memoryUsage( ));
console.log('-process.uptime( ):',process.uptime( ));

// 강제 종료
process.exit( );

//강제 종료시 이후 부분은 실행x
console.log('테스트');
```

### process 객체와 이벤트 개요
Node.js의 이벤트 연결 메소드
|메소드|설명|
|:---|:---|
|on(<이벤트 이름>,<이벤트 핸들러>)|이벤트를 연결합니다.|
이벤트 핸들러는 이벤트가 발생했을 때 호출할 함수를 의미 한다.
process객체의 이벤트
|이벤트|설명|
|:---|:---|
|exit|프로세스가 종료될 때 발생|
|uncaughtException|예외가 일어날 때 발생|
```javascript
//exit 이벤트 연결
process.on('exit',( )=>{
    console.log('프로세스 종료');
});
//uncaughtException 이벤트 연결
process.on('uncaughtException',( ) =>{
    console.log('예외 발생');
});
//예외 강제 발생
error.error.error( );
```

### os모듈
os모듈은 애플리케이션을 만들 때 많이 활용하지 않는다.
```javascript
//os모듈 추출
const os = require('os');
```
os모듈 메소드
|메소드|설명
|:---|:---|
|hostname( )|운영체제의 호스트 이름 리턴|
|type( )|운영체제의 이름을 리턴|
|platform( )|운영체제의 플랫폼 리턴|
|arch( )|운영체제의 아키텍처 리턴|
|release( )|운영체제의 버전 리턴|
|uptime( )|운영체제의 실행된 시간을 리턴|
|loadavg( )|로드 에버리지 정보를 담은 배열을 리턴|
|totalmem( )|시스템의 총 메모리를 리턴|
|freemem( )|시스템의 사용 가능한 메모리를 리턴|
|cpus( )|cpu의 정보를 담은 객체 리턴|
|getNetworkinterfaces( )|네트워크 인터페이스의 정보를 담은 배열리턴|
```javascript
//모듈 추출
const os = require('os')

//모듈을 사용
console.log(os.hostname( ));
console.log(os.type( ));
console.log(os.platform( ));
console.log(os.arch( ));
console.log(os.release( ));
console.log(os.uptime( ));
console.log(os.loadavg( ));
console.log(os.totalmem( ));
console.log(os.freemem( ));
console.log(os.cpus( ));
console.log(os.networkInterfaces( ));
```

### url모듈
```javascript
//url 모듈 추출
const url = require('url');
```
url 모듈 메소드
|메소드|설명|
|:---|:---|
|parse(urlStr[parseQueryString = alse,slashesDenoteHost =false])|URL문자열을 URL 객체로 변환해 리턴|
|format(urlObj)|URL객체를 URL 문자열로 변환해 리턴|
|resolve(form,to)|매개 변수를 조합하여 완전한 URL 문자열을 생성해 리턴|
```javascript
//모듈 추출
const url = require('url');
//모듈 사용
const parsedObject = url.parse('http://www.hanbit.co.kr/store/books/look.php?p_code=B4250257160');
console.log(parsedObject);
```
### File System 모듈
#### File Systme 모듈 파일읽기
다른 모듈들과 다르게 모듈 이름을 약어로 사용함  
동기와 비동기의 차이는 책 p.242 참조
```javascript
//모튤 추출
const fs = require('fs');
```
파일 읽기 메소드
|메소드|설명|
|:---|:---|
|fs.readFileSync(<파일 이름>)|동기적으로 파일을 읽음|
|fs.readFile(<파일 이름>)<콜백 함수>|비 동기적으로 파일을 읽음|
```javascript
//동기식 파일 읽기
//모듈 추출
const fs = require('fs');
//파일을 읽고 출력
const file = fs readFilesync('textfile.text');
console.log(file);
console.log(file.toString);
```
```javascript
//비동기식 파일 읽기
//모듈 추출
const fs = require('fs');
//파일을 읽고 출력
fs.readFil('textfile.text',(error,file) =>{
    console.log(file);
    console.log(file.toString);
});
```
#### File System 파일 쓰기
파일쓰기 메소드
|메소드|설명|
|:---|:---|
|fs.writeFileSync(<파일이름>,<문자열>)|동기적으로 파일을 작성|
|fs.writeFile(<파일이름>,<문자열>,<콜백함수>)|비동기적으로 파일을 작성|
```javascript
//동기적 파일 작성
//모듈 추출
consts fs = require('fs');
//파일 작성
fs.writeFileSync('output.txt','안녕하세요');
console.log('파일작성완료');
```
```javascript
//비동기적 파일 작성
//모듈 추출
consts fs = require('fs');
//파일 작성
fs.writeFile('output.txt','안녕하세요',(error)=>{;
    console.log('파일작성완료');
});
```
#### 파일 처리와 예외처리
파일을 읽을 때 파일이 없거나 파일을 디렉터리에 쓰라고 햇을때 해당폴더가 없을때 예외 발생  
파일 처리를 할 때는 반드시 예외 처리를 해야 한다.
```javascript
//동기적 예외 처리
//모듈 추출
consts fs = require('fs');
//예외 처리
try{
    //파일을 읽고 출력
    const file = fs.readFileSync('none.txt');
    console.log(file);
    console.log(file.toString( ));
}catch (exception){
    //예외 발생시
    console.log('파일을 읽어 들이는데 문제 발생');
    console.log(excption);
}
```
```javascript
//비동기적 예외 처리
//모듈 추출
consts fs = require('fs');
//파일 읽기
fs.readFile('none.txt',(error,file)=>{
    //예외 처리
    if(error){
        //예외 발생시
        console.log('파일을 읽어 들이는데 문제 발생');
        console.log(excption);
    }else{
        //출력
        console.log(file);
        console.log(file.toString( ));
    }
});
```
### 노드 패키지 매니저
npm 외부 모듈을 설치하는 용도로 사용(다른 용도로도 사용)
```javascript
//npm을 이용한 외부 모듈 설치
>npm install <모듈 이름>
//뒤에 @를 붙여 자기가 필요한 버전 설치
>npm install <모듈이름>@<버전>
```
### request 모듈
웹 요청을 쉽게 만들어 주는 모듈
node.js가 기본적으로 제공하는 모듈이 아닌 다른 개인이 제공하는 외부모듈이다  
request 모듈 설명은 request 모듈의 github 페이지에서 확인 할수 있다.  
설치한 request 모듈은 request( )함수로 사용
```javascript
//request 모듈 설치
>npm install request
```
```javascript
//모듈 추출
const request = require('request');
//request 모듈 사용
const url = 'http://www.naver.com';
request(url,(error,response,body)=>{
    console.log(body);
});
```
### cheerio 모듈
request 모듈로 가져온 웹페이지는 html 문자열이다  
여기에 원하는 정보를 추출해야 단순한 데이터가 정보가 되는데 이 과저을 파싱이라고 한다
cheerio 모듈을 사용하면 가져온 웹페이지의 특정 위치에서 손쉽게 데이터를 추출할 수 있다.  
이렇게 설치한 외부 모듈은 내부 모듈처럼 require( )함수로 사용  
cheerio 모듈도 github 페이지에서 확인
```javascript
//cheerio 모듈 설치
>npm install cherrio
```
```javascript
//모듈 추출
const request = require('request');
const cheerio = require('cheerio');
//request 모듈 사용
const url = 'http://ncov.mohw.go.kr/';
request(url,error,response,body) =>{
    //cheerio 모듈 사용
    const $=cheerio.load(body);
    console.log($("suminfo.num").text());
}
```
### async 모듈
실행 순서를 정의하기 어렵고 들여 쓰기도 많은 node.js의 문제를 어느 정도 해결해 줄수 있는 모듈
```javascript
//모듈 추출
const async = require('async');
```

## [5월 11일]

### Date 객체

|생성자 함수|설명|
|:---|:---|
|new Date( )|현재 시간으로 Date 객체 생성|
|new Date(<유닉스 타임>)|유닉스 타임(1970년01월01일 00시00분00초 부터 경과한 밀리초)으로 Date 객체 생성|
|new Date(<시간 문자열>)|문자열로 Date 객체 생성|
|new Date<년>,<월-1>,<일>,<시간>,<분>,<초>,<밀리초>|시간 요소(년,월-1,일,시간,분,초,밀리초)를 기반으로 Date 객체 생성|


Month의 경우 0부터 시작하므로 주의
```javascript
//Date 객체 생성

//현재시간을 기반으로 Date 객체 생성
let foo = new Date();
console.log(foo);

//유닉스 타임 Date 객체
let Unixtime = new Date(1600000000);
console.log(Unixtime);

//문자열로 객채생성
let Stringtime = new Date("May 11 2021 29:00:00");
console.log(Stringtime);

//시간 요소
let time = new Date(2021, 5-1,11,29,0,0);
console.log(time);
//우리나라는 표준시 기준으로 +09:00이기 때문에 시간을 계산할때 +9를 해준다.
```

#### Date객체의 메소드 활용

Date 객체는 get OO( ) 형태의 메소드와 set OO( )형태의 메소드를 가진다.  
OO에 들어갈 수 있는 문자는 FullYear,Month,Day,Hours,Minutes,Seconds

추가로 들어가는것은 아래의 모질라 참고  
**모질라 Date**  
https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Date

```javascript
//시간 더하기
//현재시간을 기반으로 Date 객체 생성
let foo = new Date( );
console.log(foo);

foo.setFullYear(foo.getFullYear( ) + 1);
foo.setMonth(foo.getMonth( ) + 1);
foo.setDate(foo.getDate( ) + 1);

console.log(foo);
```

```javascript
//시간 간격 구하기
let foo = new Date( );
console.log(foo);

let intreval = now.getTime( ) - before.getTime( );
interval = Math.floor(interval / (1000*60*60*24));

console.log(intreval);
```

### Array 객체

Array 객체의 기본 메소드  
자기 자신을 변화시키는 파괴적 메소드로 자기 자신을 변경한다.
|메소드|설명|
|:---|:---|
|concat( )|매개 변수로 입력한 배열의 요소를 모두 합쳐 배열을 만들어 리턴|
|join( )|배열 안의 모든 요소를 문자열로 만들어 리턴|
|PoP( )*|배열의 마지막 요소를 제거하고 리턴|
|push( )*|배열의 마지막 부분에 새로운 요소를 추가|
|reverse( )*|배열의 요소 순서를 뒤집음|
|slice( )|배열 요소의 지정한 부분을 리턴|
|sort()*|배열의 요소를 정렬|
|splice( )*|배열 요소의 지정한 부분을 삭제하고 삭제한 요소를 리턴|

```javascript
//Array 객체의 메소드
//배열 선언
let foo = [
    {
        //key: value.
        name: "고구마",
        price:1000
    },
    {
        name: "감자",
        price:1000
    },
    {
        name: "바나나",
        price:1000
    },
];

let popped = foo.pop( ); //배열에서 요소꺼내기
console.log(popped); //꺼낸 요소 출력
console.log(foo);//pop호출 후 배열호출
console.log( ); 

foo.push(popped);
foo.push(               //배열에 요소 추가
    {
        name: "사과",
        price:2000,
    },
    {
        name:"수박",
        price:3000,
    }
);
console.log(foo); //push 호출 후 배열 호출
```
배열정렬은 라이브러리를 자주 이용한다.  
```javascript
let foo = ['고구마','감자','바나나'];
let bar = [
    {
        //key: value.
        name: "고구마",
        price:1000
    },
    {
        name: "감자",
        price:1500
    },
    {
        name: "바나나",
        price:400
    },
];

//기본 애열을 정렬 하고 출력
foo.sort( );
console.log(foo); //문자열정렬
console.log(foo.reverse( ));//문자열로 역순정렬
console.log( );

//객체 내부의 숫자로 정렬하고 출력
bar.sort((foo, bar) => {
    return foo.price - bar.price;
});
console.log(bar);
console.log( );

// 객체 내부의 문자열로 정렬하고 출력
bar.sort((foo, bar) => {
    if (foo.name < bar.name){
        return -1;
    }else if (foo.name > bar.name){
        return 1;
    }else{
        return 0;
    }
});
console.log(bar);
```
#### ECMAScript5에서 추가된 메소드
모질라 Araay  
https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array

|메소드|설명|
|:---|:---|
|forEach( )|배열의 요소를 하나씩 뽑아 반복하여 돌림|
|map( )|콜백 함수에서 리턴하는 것을 기반으로 새로운 배열을 생성|
|filter( )|콜백 함수에서 true를 리턴하는 것으로만 새로운 배열을 만들어 리턴|
위에 3개의 메소드는 가장 사용 빈도가 높다  
콜백 함수를 매개 변수로 받는다
```javascript
//ECMAScript5에서 추가된 Array객체의 메소드 콜백 함수 형태
[52,273,32].forEach((item,index) => {

});
```
```javascript
//배열 선언
let foo=[52,273,32,64,72];
//forEach( )메소드
foo.forEach((item,index) => {
    console.log(`${index} - ${item}`);
});
// map( )메소드
let bar = foo.mpa((item,index) => {
    return item*item;
});
console.log(bar);
//filter( )메소드
console.log( );
let foobar = foo.fiter((item,index) => {
    return item % 2 ==0; //짝수만 return
})
console.log(foobar);
```
### 프로토 타입에 메소드 추가

프로토 타입에 메소드를 추가하면 해당 자료형 전체에 추가 할 수 있다.  
String 생성자 함수의 protype 속성에 contain( ) 메소드를 추가한다.
```javascript
//프로토타입에 메소드 추가
String.protype.contain = function (input){
    return this.indexOf(input) >= -1;
};
//메소드를 활용한다.
console.log('안녕하세요'.contain('안녕'));
console.log('안녕하세요'.contain('데굴데굴'));
```
화살표 함수는 사용할 수 없다.  
익명 함수에서 this는 자기 자신을 나타내지만, 화살표 함수에서 this는 최상위객체를 의미하기 때문

#### underscore.js 라이브러리
```javascript
>npm install underscore underscore라이브러리 설치
```
```html
<script src="http://underscorejs.org/underscore.js"></script> <!--언더 스코어 라이브러리 사용스크립트-->
```
underscore.js 라이브러리를 사용한 정렬 속성 price,name

```html
<!--underscore.js 라이브러리를 사용한 정렬-->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Hello</title>
    <script src="underscore-umd-min.js"></script>
    <script>
        let foo = [
            {
                name: "고구마",
                price:1000
            },
            {
                name: "감자",
                price:1000
            },
            {
                name: "바나나",
                price:1000
            },
        ];
        const bar = _.sortBy(foo,(item)=> item.price);
        console.log(bar);
        const foobar = _.sortBy(foo,(item)=> item.name);
        console.log(foobar);
    </script>
</head>
<body>

</body>
</html>
```
#### json 객체
JSON(JavaScript Object Notation) 자바스크립트 객체를 사용한 데이터 표현 방법
JSON에는 몇 가지 제약이 있다
문자열은 큰따옴표로 만들어야 한다.  
모든 키는 큰따옴표로 감싸야 한다.  
숫자,문자열,불 자료형만 사용이 가능하다.  
```javascript
//기본형태
[
    {
        "name": "고구마",
        "price":1000
    },
    {
        "name": "감자",
        "price":1000
    },
    {
        "name": "바나나",
        "price":1000
    },
];
```
JSON 객체
|메소드|설명|
|:---|:---|
|JSON.stringify(<객체>,<변환 함수>,<공백 개수>)|자바스크립트 객체를 문자로 만듭니다.|
|JSON.parse(<문자열>)|문자열을 자바스크립트 객체로 파싱|
```javascript
//JSON객체 활용
//변수 선언
const foo = [{
    name: '이중곤',
    region:'평택'
},{
    name: '이모씨',
    region: '도쿄'
}];
//JSON.stringfy( )메소드로 자바스크립트 객체를 JSON 문자열로 변경
const outputA= JSON.stringfy(foo);
const outputB= JSON.stringfy(foo,null,2);
console.log(tyoeif(outputA));
console.log(outputA);
console.log(outputB);

//JSON.parse( )메소드로 JSON 문자열을 자바스크립트 객체로 변경
const outputC = JSON.parse((outputB)
console.log(typeof(outputC));
console.log(outputC);
```
JSON.stringify( ) 메소드 사용시 문자열 리턴  
JSON.parse( ) 메소드 사용시 객체를 리턴

## 예외 처리
### 예외와 기본 예외 처리
프로그램을 실행하는 동안 문제가 발생하면 프로그램이 자동으로 중단된다.  
이렇게 발생한 오류를 예외라고 하며,이러한 오류에 대처할 수 있게 하는 것을 예외 처리라고 한다.
```javascript
//예외상황 확인
//TypeError발생
function callThreeTimes(callback){
    for(let i =0; i <3; i++){
        callback( );
    }
}
//정상실행
callThreeTimes(function ( ){console.log ('안녕하세요');});
//예외 발생
callThreeTimes( );
```
기본 예외 처리: 사전에 해당 데이터가 undefined인지 조건문으로 확인
```javascript
//기본 예외 처리
//TypeError를 기본 예외 처리로 처리
function callThreeTimes(callback){
    if(callback){
        for(let i =0; i <3; i++){
            callback( );
        }
    } else {
        console.log('매개 변수 callback이 지정되지 않았습니다.');
    }
}
//정상실행
callThreeTimes(function ( ){console.log ('안녕하세요');});
//예외 발생
callThreeTimes( );
```

### 고급 예외 처리
고급 예외 처리는 try 키워드,catch 키워드,finally 키워드로 예외를 처리하는 방법이다.
```javascript
try{
    //예외 발생시
}catch (exception){
    //처리
}finally{
    //무조건 실행
}
```
catch 구문 또는 finally 구문이 필요가 없다면, 해당 부분을 생략하고 사용    

배열을 생성할 때 길이를 음수로 지정하면 RangeError가 발생한다.
```javascript
try {
    const array = new Array(-2000); //예외 처리 발생
}catch(exception){
    console.log(`$(exception.name)예외가 발생했습니다.`);
}
```
### 예외 객체
예외 발생시 어떤 예외가 발생했는지 정보를 전달하는 기능을 수행하는 객체
```javascript
try{
    
}catch(exception){

}
``` 
```javascript
//ReferenceError를 발생시킨 이후에 예외 객체의 nmae 속성과 message 속성 출력
try{
    error.error.error( );
}cathc(e){
    console.log(e.name);
    console.log(e.message);
}
```
### 예외 강제 발생
throw 키워드는 예외를 강제로 발생시킨다  
throw 키워드 뒤에는 문자열 또는 Error 객체를 입력
```javascript
//예외 객체 생성
const error = new Error('메세지');
error.name = '내 마음대로 오류';
error.message = '오류의 메시지';

//예외 발생
throw error;
```
Error 객체를 사용하면 어떤 파일의 몇 번쨰 줄에서 예외가 발생했는지 확인이 가능하다.
## [5월 4일]

### 프로토타입
생성자 함수로 만든 객체는 프로토타입 공간에 메소드를 지정해서 모든객체가 공유 하도록 한다.  
해당함수를 생성자 함수로 사용했을 때만 의미가 있다.

```javascript
//프로토타입을 사용한 메소드 생성
//생성자 함수
function Prouduct(name,price){
    this.name = name;
    this.price = price;
}
//프로토 타입에 메소드를 선언
Product.prototype.print = fuction ( ){
    consol.log(`${product.name}의 가격은 ${product.price}원입니다.`);
};

// 객체를 생성
let product = new Product("바나나",1200);

//호출
product.print( );
```

#### null값과 자료형

null은변수 처럼 활용할 수 있다.  
변수를 선언하고 값을 넣지 않으면 undefined가 된다. 일반적으로 undefined는 인위적으로 만들 때 사용한다.


0,NaN," "(빈문자열),null,undefined는 false로 변환된다. 이중에서 0,NaN," "(빈문자열)은 값만 false로 변환될 뿐이지 실제로는 값이 들어 있다.  
아예 값이 없는 상태를 구분할때는 null을 사용한다.

### 표준내장객체
참고 사이트 모질라:https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects

#### 기본 자료형과 객체 자료형의 차이

```javascript
// 기본 자료형
let number = 273; //숫자
let string = '안녕하세요'; //문자열
let boolean = true; //불

// 자료형을 출력
console.log(typeof number); //결과값은 number
console.log(typeof string); //결과값은 tring
console.log(typeof boolean);//결과 값은 boolean

//객체 자료형
let number = new Number(273); 
let string = new String('안녕하세요');  
let boolean = new Boolean(true);

//자료형 출력
console.log(typeof number); //결과값은 object
console.log(typeof string); //결과값은 object
console.log(typeof boolean); //결과값은 object
```

기본 자료형과 객체 자료형 모두 속성과 메소드를 사용할 수 있다.  
속성과 메소드는 객체가 가질 수 있는데 숫자,문자열,불 등 기본 자료형도 속성과 메소드를 가지고 있다.  
기본자료형의 속성 또는 메소드를 사용할 때 기본 자료형이 자동으로 객체로 변환되기 때문이다.  


기본 자료형 숫자의 속성이나 메소드를 사용하면, 자동으로 객체 자료형으로 변환되어 속성이나 메소드를 사용할 수 있다.  
따라서 기본 자료형과 객체의 차이점을 찾기가 어렵다. 굳이 차이점을 찾자면 기본 자료형은 객체가 아니므로 속성과 메소드를 추가가 불가능하다.
기본 자료형이 객체로 변활될때는 한번만 사용하고 값이 바로 버려지며 기본자료형의 메소드를 사용한다는 것은 기본 자료형에 일회용 객체를 입히고 
속성 또는 메소드를 사용하는 것이다.

기본 자료형에 속성 또는 메소드를 추가하는 방법은 프로토타입을 이용하여 추가할수있다.

```javascript
// 기본 자로형에 속성 또는 메소드 추가
let foo = 273;
let bar = 513;
//메소드 추가
Number.prototype.method = function () {
    return "hello"; 
}

console.log(foo.method()); //결과값은 hello
console.log(bar.method()); //결과값은 hello
```

### Number 객체

Number 객체는 자바스크립트에서 숫자를 표현할 때 사용한다.
```javascript
//Number 객체 생성
let numberFromLiteral = 273;
let numberFromConstructor = new Number(273);
```

#### Number 메소드

|메소드|설명|  
|:---|:---|
|toExponentia( )|숫자를 지수 표시로 나타낸 문자열을 리턴|  
|toFixed( )|숫자를 고정 소수점 표시로 나타낸 문자열을 리턴|  
|toPrecision( )|숫자를 길이에 따라 지수 표시 또는 고정소수점 표시로 나타낸 문자열을 리턴|  

```javascript
//toFixed ( ) 메소드를 사용한 Number 메소드
let foo = 25.123;

console.log(number.toFixed(1)); //결과값 25.1
console.log(number.toFixed(5)); //결과값 25.12300
```
#### 생성자 함수의 속성
생성자 함수에 속성과 메소드 추가
```javascript
function Construtor( ){ }
Construtor.foo = 273;
Construtor.bar = function ( ) { };

console.log(Construtor.foo); //결과값 273
console.log(Construtor.bar); //결과값 [function(anonymous)]
```

생성자 함수의 속성  
|속성|설명|  
|:---|:---|  
|MAX_VALUE|자바스크립트의 숫자가 나타낼 수 있는 최대 숫자|  
|MIN_VALUE|자바스크립트의 숫자가 나타낼 수 있는 최소 숫자|  
|NaN|자바스크립트의 숫자로 나타낼 수 없는 숫자|  
|POSITIVE_INFINITY|양의 무한대 숫자|  
|NEGATIVE_INFINITY|음의 무한대 숫자|

```javascript
let foo = Number.Max_VALUE;
let bar = Number.Max_VALUE+100;

console.log(foo);
console.log(bar); //값이 foo와 같다 
                 //자바스크립트내에서 오버플로우 되어도 최대값만 출력
```

### String 객체

#### 속성과 메소드

String 객체는 length속성을 가진다
|객체|속성|
|:-----|:----|
|length|문자열의 길이를 나타낸다|

|메소드|설명|
|:----|:----|
|charAt(position)|position에 위치하는 문자리턴|  
|charCodeAt(position)|position에 위치하는 문자의 유니코드 번호를 리턴|  
|concat(args)|매개 변수로 입력한 문자열을 이어 리턴|  
|indexOf(searchString.position)|앞에서부터 일치하는 문자열의 위치를 리턴|  
|lastindexOf(searchString.position)|뒤에서부터 일치하는 문자열의 위치를 리턴|  
|match(regExp)|문자열 안에 regExp가 있는지 확인한다.|  
|replace(regExp,replacement)|regExp를 replacement로 바꾼 후 리턴|  
|search(regExp)|regExp와 일치하는 문자열의 위치를 리턴|  
|slice(start,end)|특정 위치의 문자열을 추출해 리턴|  
|split(separator,limit)|separator로 문자열을 잘라 배열을 리턴|  
|substr(start,count)|start부터 count만큼 문자열을 잘라서 리턴|  
|substring(start,end)|start부터 end까지 문자열을 잘라서 리턴|  
|toLowerCase( )|문자열을 소문자로 리턴|  
|toUpperCase( )|문자열을 대문자로 리턴|  
```javascript
let foo = "abcdefg";
let bar = foo.toUpperCase( );
let foobar = bar.toLowerCase ( );


console.log(foo); //출력값 abcdefg
console.log(bar); //출력값 ABCDEFG
console.log(foobar); //출력값 abcdefg
```
#### 메소드 활용

```javascript
//indexOF( )메소드
//변수선언
let foo ='안녕하세요. 좋은 아침입니다.';

if (foo.indexOf('아침') > = 0) {
    console.log("굿모닝");
}
else{
    console.log("굿나잇");
}
```


## [4월 27일]

### 타이머 함수
setTimeout(함수,시간) 특정 시간 후에 함수를 실행  
setInterval(함수,시간) 특정 시간 마다 함수를 실행  
시간은 밀리초 단위로 지정   
1초=1000밀리초를 입력해야 한다.  

claerInterval( ) 특정 시간마다 실행하던 함수 호출을 정지  
setInterval( ) 함수로 지정한 타이머는 cleaInterval( ) 함수로 끌수있다.  

```javascript
//setTimeout( ) 을 이용한 코드
// 1초마다
let foo = setInterval(function ( )){
    console.log("출력합니다.");
}, 1000);

//3초 후에
setTimeout(function ( )){
    //타이머 제거
    clearInterval(foo);
}
```

### 익명함수와 선억적 함수의 우선순위

```javascript
//변수 덮어쓰기
let foo;
foo = 10;
foo = 20;
foo = "세번째"
console.log(foo); //결과값은 세번째
```


동일한 이름으로 변수를 선언했을경우는 맨마지막에 선언한 변수가 덮어씌어서 변수값이변한다.  
함수 또한 변수와 마찬가지로 동일한 이름으로 함수를 선언했을 경우 맨마지막에 선언한 함수가 덮어씌어서 함수값이 변한다.  

```javascript
//함수 덮어쓰기
let foo;
foo = function ( ) =>{ console.log ("1st"); };
foo = function ( ) =>{ console.log ("2nd"); };

foo( );    //결과값은 2nd
```

1자바스크립트의 경우 위에서부터 한 줄 한 줄 읽어 내려가며 함수를 선언하고 변수에 할당하기 때문에 가능하다  
하지만 선언적 함수의 경우는 조금 다르다  

선언적 함수의 경우 '코드를 실행하기 전'에 생성이 되며 이후에 익명함수를 만든다.  
익명 함수는 선언적함수를 '무조건 적으로' 덮어쓴다
```javascript
//함수 덮어쓰기2
//익명함수를 먼저적고 선언적 함수를 나중에 적고 실행
foo = function ( ) =>{ console.log ("1st"); };
function foo( ) { console.log ("2nd"); };

foo();  //결과값은 1st
```


let 키워드를 사용하면 선언적 함수와 동일한 이름의 변수를 생성x  

### 익명함수와 화살표 함수의 차이
function ( ) { } 형태의 익명함수와 ( ) => { }화살표 함수는 거의 비슷한 기능을 수행하지만 내부에서 this 키워드가 가지는 의미의 차이가 있다  

function ( ) { }의 함수내부의 this는 자바스크립트 최상위 객체 또는 외부에서 강제로 연결한 객체를 나타낸다.  
화살표 함수의 경우 this는 '자기 자신과 관련된 것' 만을 나타냄 

```javascript
let name = "dong"
foo = ( ) => {
    let name = "synn"
    console.log(this.name); //내부 객체와 연결
};

function ( ){
    console.log("this.name"); //상위 객체와 연결
};

foo(); //자세한것은 6장 객체에서 나올 경우 다시 공부
```
  

### 객체

객체는 여러개의 자료형을 한번에 저장하는 자료형 = 배열과 기본뜻은 같다  
배열에는 인덱스와 요소가 있고 인덱스를 사용하여 요소에 접근한다   
객체는 키를 사용하여 객체의 속성에 접근한다

식별자 생성 규칙에 어긋나는 문자를 키로 사용할 때는 반드시 대괄호를 사용해야 객체의 요소에 접근할 수 있다.  
대괄호가 아니라 점을 찍어 사용하면 자바스크립트 문법에 오류가 발생한다.

```javascript
//객체선언
let foo = {
    // 키 :  속성
    제품명: '건조 망고',
    유형: '당절임',
    원산지:'필리핀',
    price:1200;
};

//출력
console.log(foo);
console.log(foo.제품명);
console.log(foo.price);
```

객체의 요소에 접근을 하기위해선 객체 뒤에 대괄호를 사용해 키를 입혁하면 개첵의 속성에 접근이 가능하다.  
```javascript
    foo['제품명'] //'건조 망고'
    foo['유형']  //'당절임'
    foo['원산지']//'필리핀'
    foo['price'] // 1200
```
### 객체와 반복문
```javascript
let foo = {
    제품명: '건조 망고',
    유형: '당절임',
    원산지:'필리핀',
    price:1200;
};

for (let key in foo){
    console.log(`${key}: ${foo[key]}`); //배열에 있는 속성값을 하나씩 출력
}
```
 

### 속성과 메소드
요소: 배열 내부에 있는 값 하나 하나  
속성: 객체 내부에 있는 값 하나 하나  
객체의 다양한 자료형  
배열의 요소처럼 객체의 속성에도 다양한 자료형을 입력할 수 있다.  
메소드:객체의 속성 중 자료형이 함수인 속성  
객체에 있는 속성을 메소드에서 사용하고 싶을 때는 자신이 가지고 있는 속성임을 표시해야한다.  
이때 자신이 가지고 있는 속성이라는 것을 표시할 때는 this키워드를 사용한다.  

```javascript
let foo = {
    제품명: '건조 망고',
    price:1200;
    print: function ( ){
        console.log(`${this.name}`)-`${this.price}`); 
    } //출력값 건조망고 - 1200
};
```

### 생성자 함수와 프로토타입

객체지향 프로그래밍: 현실의 객체를 모방해서 프로그래밍하는 것
```javascript
//함수를 외부로 보낸형태
//객체 배열
let product = [
    {name:'사과',price: 1200},
    {name:'배' ,price:1500},
    {name:'자두' ,price:1000},
    {name:'딸기' ,price:2000},
    {name:'바나나' ,price:1500},
    //function( ) {...}; 펑션을 객체안에 넣어도 가능하나 가독성이 떨어진다
];
function printProduct(bar){
    console.log(`${bar.name}-${bar.price}`);// 네임키의 객체속성출력 - 프라이스키의 객체속성출력
}
for (let foo of product){
    printProduct(foo); 
}
```
객체 지향 프로그래밍관점에서는 책 167p의 6-10코드 처럼 product.print( ) 형태로 코드를 작성해야 한다.  
print( ) 메소드는 product 객체의 '기능'이기때문이다  
### 생성자 함수
생성자 함수(Constrictor)는 '객체를 만드는 함수'
```javascript
//생성자 함수를 사용한 객체 생성
fuction Product(foo,bar){
    this. = foo;
    this.price = bar;
}
//객체 생성
let product = new Product("바나나",200);

//출력
console.log(product);
```
## [4월 13일]

### 익명 함수

```javascript
//함수생성법
let<함수이름> = funtion ( ){};
```
이름을 붙이지 않고 함수 생성시 익명함수 이름을 붙여 함수를 생성하면 선언적 함수  
자바스크립의 함수는 자료형이기 때문에 숫자,문자열,불처럼 변수에 넣어서 사용
```javascript
//code 5-1 익명함수
let foo =function(){
    console.log("첫번째 함수")
    console.log("두번째 함수")
};

foo();
console.log(foo); //출력값 [Function: foo] (함수 자체를 출력)
```
## [4월 06일]

#### 중첩 반복분
4-7-8
```javascript

//예제 4-7
let output = "";

for(let i = 0; i< 10; i++){
    for(let j = 0; j < i+ 1; j++){
        output += '*';
    }
    output += '\n';
}

output +="\n"; //예제 4-8과 분리를 위해 추가
console.log(output);

//예제 4-8
for (let i =0; i<10; i++){
    for(let j = 0; j <10 - i; j++){
        output +=' ';
    }
    for(let j= 0; k <i+1;j++){
        output += '*';
    }
    output +='\n';
}
console.log(output);
//추가 예제 삼각형 만들기
for(let i = 0; i <10; i++){
    for(let j = 0; j <10-i; j++){
        output += " ";
    }
    for(let j = 0; j <i+1; j++){
        output += "*";
    }
    for(let j = 1; j< i+1; j++){
        output += "*";
    }
    output +="\n";
}
console.log(output);
```

#### break키워드

break 키워드는 switch 조건문이나 반복문을 벗어날 때 사용

4-9
```javascript
let i =0;
let foo = [2,3,5,4,10];
;

while (true){
    if (array[i]%2==0){
        bar = foo[i];
        break;
    }
    i = i+1; //i++ ,i+=1;
}
console.log('처음 발견한 짝수는 ${bar}입니다.');
/*
//선언 및 초기화
let foo = new Array();
let bar[];
foo = [1,10,오렌지]
bar = [1,10,오렌지]

//선언과 동시에 초기화
let foo = new Array(1,10,오렌지);
let bar = [1,10,오렌지];

//배열의 길이
console.log(foo.length);
*/

//push 는 배열의 끝에 원하는 값을 추가해주는 함수.

bar = [0];
console.log("\n push");
foo.push("자료구조",1,0.5);
bar.push(1,2,3);
console.log(foo);

//pop은 배열의 마지막 주소에 있는 값을 제거해주는 함수.

console.log("\n pop");
foo.pop();
console.log(foo);

//shift는 배열의 첫번째 주소에 있는 값을 제거한 후에 반환해주는 함수.

console.log("\n pop");
foo.shift();
console.log(foo);
console.log(bar);

//push와 poo를 이용하면 stack으로 이용할 수 있다.
//push와 shift를 이용하면 queue로 이용할 수 있다.

//concat은 두개의 배열을 합쳐주는 함수
console.log("\n concat");
foo=foo.concat(bar);
console.log(foo);
foo=bar.concat(foo);
console.log(foo);

//reverse은 배열을 역순으로 재배치.
console.log("\n reverse");
foo.reverse();
console.log(foo);

//sort는 배열을 정렬.
console.log("\n sort");
foo.sort();
console.log(foo);

//array.slice([시작 인덱스],[마지막 인덱스])
// 정방향 인덱스  0  1  2  3  4  5
//==========================
// 역방향 인덱스 -5 -4 -3 -2 -1
console.log("\n slice");
console.log(foo);
console.log(foo.slice(1,5));

// 인덱스 5은 범위의 마지막이기 때문에 포함되지 않는다.
// 즉 마지막 인덱스1에서 4까지만 반환한다.

//array.splice([begin index],[delete Count],[add Item])
console.log("\n splice");
foo = ["a","b","c","d","e"];
bar = foo.splice(2,2,100,0.5,"문자");//foo의 index 1에서 3개를 잘라내서 bar에 저장.foo에 1과 문자열을 저장
console.log(foo);
console.log(bar);

console.log("\n");

// join은 배열값들 사이에 원하는 문자를 삽입하여 반환.
console.log("\n join");
foo = [0,1,2,3,4,5];
foo = foo.join(",");
console.log(foo);
```

#### continue 키워드
반복문 내에서 현재 반복을 멈추고 다음 반복을 진행함
```javascript
//예제 4-10 continue 키워드
//

for(let i=1; i<10; i++){
    if(i%2 == 0){
        continue;
    }
    console.log(i);
}
//만일 여기에 break를 넣으면 어떻게 되는지
//continue를 사용하지않고 홀수만 출력하게 하려면


```
#### 스코프
변수를 사용할수 있는 범위 
스코프 == 블록 
{사이의 구역}

#### 호이스팅

해당 브록에서 사용할 변수를 미리 확인해서 정리하는 작업

#### var 키워드

let 키워드:자바스크립트
    let키워드로 생성한 변수는 해당 블록 내부에서만 사용
var 키워드:익스플로러
    var 키워드로 생성하는 변수는 모든 곳에서 사용
## [3월 30일]
#### 중첩 조건문

조건문 안에 조건문을 중첩해 사용하는 것을 중첩 조건문이라고 한다.  여러 번 중첩해도 상관없다.  
반복적으로 조건문이 많이 사용되면 알고리즘이 제대로 짜여져있는지 봐야한다   

```javascript
    if(불 표현식){
        if(불 표현식){
            문장;
        }   else{
            문장;
        }
    } else{
        if(불 표현식){
             문장;
        } else {
            문장;
        }
    }  
```
### if else if 조건문

중첩 조건문의 중괄호를 생략했을 때 만든 조건문이 if else if 조건문이다.  
if else if 조건문은 중복되지 않는 세 가지 이상의 조건을 구분할 때 사용한다.  

```javascript
    if(<불 표현식>){

    } else if (<불 표현식>){

    } else if (<불 표현식>){

    } else {

    }  
```
### swithc 조건문

```javascript
    switch (<비교할 값>){
        case <값>:
            <문장>
            break;
        case <값>:
            <문장>
            break;
        default:
            <문장>
            break;
    }
 ```
switch 조건문의 괗로 안에는 비교할 값을 입력한다. 이 때 입력한 값을 기준으로 특정 코드를 실행한다.  
입력한 표현식과 case 키워드 옆에 있는 표현식이 같다면, case 키워드 바로 다음에 오는 문장을 차례대로 실행한다. 별도의 중괄호는 X  
case문의 경우에도 case가 너무 많다면 알고리즘을 다시 체크한다.


break 키워드는 switch 조건문이나 반복문을 빠져 나갈 때 사용한다.  
코드를 읽다가 break키워드를 만나면 break 키워드를 감싸고 있는 switch 조건문이나 반복문을 벗어난다.  

```javascript
    let date = new Date();

    switch  (date.getMonth()+1){
        case 12:
        case 1:
        case 2:
            console.log("겨울입니다.");
            break;
        case 3:
        case 4:
        case 5:
            console.log("봄입니다.");
        case 6:
        case 7:
        case 8:
            console.log("여을");
            break;
        case 9:
        case 10:
        case 11:
            console.log("가을")
            break;
        default:
            break;
    }
```
break문이 사용되지않고 연속적으로 case문이 사용될때에는 switch 조건문을 벗어나지 않은 채 문장을 계속 읽어 내려간다.
### 삼항연산자

if 조건문과 switch 조건문 이외에도 연산자를 이용하여 조건을 구분할 때 사용할 수 있다.  
항이 3개있기 때문에 삼항연산자로 부른다  
삼항 연산자를 사용하면 코드가 복잡해 보이므로 한 줄로 표시할 수 있을 때만 사용하면 좋다.
```javascript
    // 삼항연산자의 기본 형태
    <불표현식> ? <참> : <거짓> 
```
```javascript
    //참과 거짓 위치에 불 자료형
    console.log(number % 2 == 0 ? true : false);

    // 참과 거짓 위치에 문자열 자료형
    console.log(number % 2 == 0 > "짝수" : "홀수");
```
```javascript
    // 변수 선언
    let numberA = 52;
    let numberB = 0;
    let numberC = -23;

    // 조건을 구분한다.
    console.log(`${numberA}은/는 ${numberA > 0 ? "0보다 큰" : "0 또는 0보다 작은"} 숫자입니다.`);
    console.log(`${numberB}은/는 ${numberB > 0 ? "0보다 큰" : "0 또는 0보다 작은"} 숫자입니다.`);
    console.log(`${numberC}은/는 ${numberC > 0 ? "0보다 큰" : "0 또는 0보다 작은"} 숫자입니다.`);
```
### 짧은 초기화 조건문

|| 연산자를 활용하면 삼항 연산자를 사용한 코드를 조금 더 짧게 적을 수 있다.
```javascript
    //변수 선언
    let test;
    //짧은 초기화 조건문1
    test = test || "초기화합니다_1"
    console.log(test);
    //짧은 초기화 조건문2
    test = test || "초기화합니다_2"
    console.log(test);
```
### node.js에서 작동하는 자바스크립트의 입력

```javascript
    //모듈을 추출
    const repl = require('repl');
    //입력을 시작
    repl.start({
        prompt:"숫자 입력> ",
        eval: (command, context, filename, callback) => {
            // 입력(command)을 받았을 때 처리를 수행
            let number = Number(command);

            // 입력이 숫자인지 확인
            if (isNan(number)){
                console.log("숫자가 아닙니다.");
            }   else {
                console.log("숫자입니다");
            }

            //처리완료
            callback();
        }
    });
```

### 배열

여러개의 자료를 한꺼번에 다룰 수 있는 자료형
```javascript
    //배열의 선언 형태
    >let 이름 =[자료,자료,자료,자료,자료]
```
```javascript
    let foo = ["한글","abc",1004,3.141592,true,false]
    console.log(foo);
```

### while 반복문

if 조건문과 형태가 비슷하지만 if 조건문과 달리 불 표현식이 참인 동안에는 중괄호 안의 문장을 계속 실행한다.
```javascript
    while(<불 표현식>){
        //불 표현식이 참인 동안 실행할 문장
    }
```
```javascript
    //변수선언
    let i = 0;
    let array = [52,273,32,65,103];

    // 반복을 수행합니다.
    while (i < array.length){
        // 출력합니다.
        console.log(i+"번째 출력:"+array[i]);
        // 탈출하기위해 변수값을 더함
        i++;
    }
```
### for 반복문

for 반복문은 원하는 횟수만큼 반복하고 싶을 때 사용한다.  
 * for 반복문의 단계
 ```
  1.초기식을 비교
  2.조건식을 비교한다. 조건이 false 이면 반복문을 종료
  3.문장을 실행한다.
  4.종결식을 실행한다.
  5.2단계로 다시 이동
```
```javascript
    //for 반복문의 기본형태
    for(let i = 0; i < <반복 횟수>;i++){

    }
```
for 반복문을 이용한 덧셈
```javascript
    // 변수 선언
    let output = 0;
    // 반복 수행
    for (let i = 0; i <= 100; i++){
        output += i;
    }
    //출력
    console.log(output);
```
### 역 for 반복문
배열 반복을 뒤에서부터 실행해야 할때 사용하는 for문의 형태이다.
```javascript
    //for반복문을 역으로 사용할때의 기본형태
    for (let i = length -1;i >=0; i--){
        
    }
```
### for in 반복문과 for of 반복문
for in 반복문과 for of 반복문은 객체에 쉽게 반복문을 적용할 때 사용한다.  
for in 반복문과 for of 반복문은 사용과 역할이 같다.
```javascript
    for(let 인덱스 in 배열){

    }
    for(let 인덱스 of 배열){

    }
```
배열을 사용한 for in,for of 반복문
```javascript
    //변수 선언
    let array = ["사과","배","포도","딸기","바나나"];
    //반복 수행
    for (let i in array){
        //출력
        console.log(`${i}번째 요소: ${array[i]}`);
    }
    console.log("------ 구분선 -----");
    // 반복 수행
    for (let item of array){
        //출력
        console.log(item);
    }
```
## [3월23일]
## [03월16일]
> 오늘 배운 내용 요약 <br>
> 여러줄 요약 </br>
> 3번

배운내용

자바스크립트 실행 방법
