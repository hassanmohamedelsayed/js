let btnopen=document.getElementById(`open`)
let btnclose=document.getElementById(`close`)
let container=document.querySelector(`.container`)

btnclose.onclick=function(){
    container.classList.add(`hide`)
    btnopen.classList.remove(`hide`)
    this.classList.add(`hide`)
    
}
btnopen.onclick=function(){
    container.classList.remove(`hide`)
    btnopen.classList.add(`hide`)
    btnclose.classList.remove(`hide`)
}
