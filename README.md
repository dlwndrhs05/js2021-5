# 이중곤 [201930323]
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
## [3월23일]
## [03월16일]
> 오늘 배운 내용 요약 <br>
> 여러줄 요약 </br>
> 3번

배운내용

자바스크립트 실행 방법
