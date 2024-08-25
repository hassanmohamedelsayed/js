let after=document.getElementById(`after`)
let before=document.getElementById(`before`)
let append=document.getElementById(`append`)
let content=document.getElementById(`content`)
let container=document.getElementById(`container`)


container.style.backgroundColor=`yellow`
container.style.height=`50px`
after.onclick=function(){
container.after(content)
}
before.onclick=function(){
    container.before(content)
}
append.onclick=function(){
    container.append(content)
    }

