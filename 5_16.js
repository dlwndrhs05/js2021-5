let foo = setInterval(() =>{
    console.log("인터벌 1초 경과");
},1000)

setTimeout(() =>{
    clearInterval(foo);
},3000)