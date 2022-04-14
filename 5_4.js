function foo(x){
    return x*x;
}
console.log(foo(10));
console.log(foo(20));
//
function foo(x){
    let bar= x*x;
    return bar;
}
let foobar = foo(10);
console.log(foobar);
//5_8
function sum(min,max){
    let output = 0; 
    for (let i=min; i<= max; i++){
        output +=i;
    }
    return output;
}
console.log(sum(1,100));