
let date = new Date()
if (date.getHours()<12){
    console.log("오전입니다.");
}
else
console.log("오후입니다.")

console.log(date.getFullYear());
console.log(date.getMonth());
console.log(date.getTime());
console.log(date.getUTCMinutes());