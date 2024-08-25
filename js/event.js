// let btn=document.getElementById(`btn`)
// function hello(){
//     document.body.style.backgroundColor=`red`
// }
// btn.onclick= hello

// btn.addEventListener(`click`,function(){
//     document.body.style.backgroundColor=`yellow`
// })

// btn.addEventListener(`click`,function(){
//     btn.style.backgroundColor=`red`
// })
// btn.addEventListener(`click`,function(){
//     btn.style.color=`blue`
// })
// let inp =document.getElementById(`inp`)
// let i=1;
// inp.onfocus =function(){
//     inp.style.border=`2px solid red`;
// }
let dollar=document.getElementById(`dollar`)
let pound=document.getElementById(`pound`)
dollar.onkeyup=function(){
    pound.value=dollar.value* 50;

}
pound.onkeyup=function(){
    dollar.value=pound.value/50;
}