# 이중곤 [201930323]

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
let bar = Number.Max_VALUE;

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
```javascript
let foo = "abcdefg";
let bar = foo.toUpperCase( );
let foobar = bar.toLowerCase ( );


console.log(foo); //출력값 abcdefg
console.log(bar); //출력값 ABCDEFG
console.log(foobar); //출력값 abcdefg
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
