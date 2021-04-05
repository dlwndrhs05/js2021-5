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
```javascript
    <불표현식> ? <참> : <거짓> //삼항연산자의 기본 형태
```
## [3월23일]
## [03월16일]
> 오늘 배운 내용 요약 <br>
> 여러줄 요약 </br>
> 3번

배운내용

자바스크립트 실행 방법
