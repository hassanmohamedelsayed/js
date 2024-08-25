let hello=document.getElementById(`hello`)
// hello.onclick=function(){
//     hello.classList.add("name")
// }
// hello.oncontextmenu=function(){
//     hello.classList.remove("name")
// }
hello.oncontextmenu=function(){
    hello.classList.toggle("name")
}