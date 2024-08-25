let hello=setTimeout(function(){
    console.log(`hello`)
},3000)

clearTimeout(hello)
let o=0;
 let hassan=setInterval(() => {
    console.log(o++)
    if(o==10){
        clearInterval(hassan)
    }
 },1000);
