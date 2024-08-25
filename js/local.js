// localStorage.setItem(`name`,`hassan`);
// localStorage.setItem(`age`, JSON.stringify(25))
// localStorage.setItem(`skills`,JSON.stringify([1,2,3]))

// console.log( JSON.parse(localStorage.getItem(`skills`))  )

// console.log(localStorage.key(2))
// localStorage.removeItem(`skills`)

// let txt=document.getElementById(`txt`)
// if(localStorage.length>0){
//     txt.value=localStorage.getItem(`txt`)
// }


// txt.onkeyup=function(){
//     localStorage.setItem(`txt`,txt.value)
// }


if(localStorage.length>0){
    document.body.style.background=localStorage.color
}

function setColor(color){
    localStorage.setItem(`color`,color)
    document.body.style.background=color
}
