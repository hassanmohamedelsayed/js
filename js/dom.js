// let title =document.title;
// console.log(title) 
// console.log(document.getElementById(`name`));
// document.getElementById(`name`);
// let head= document.getElementsByTagName(`h1`)[0];
// head.style.color=`red`;
// console.log(head);
// let images=document.images[0]

// images.src=`uploads/team-2.jpg`

// console.log(images.src)
// let forms =document.forms;
// console.log(forms)

// let imga = document.getElementById(`imga`);


// imga.removeAttribute(`alt`)
// imga.removeAttribute(`id`)
// console.log(imga)

// let container=document.getElementById(`container`)
// container.outerHTML=`<p>hello</p>`
// container.innerHTML=`<h1>hello</h1>`
// // console.log(container)

// let element=document.getElementById(`element`)
// console.log(element.previousElementSibling)
// console.log(element.nextElementSibling)
// console.log(element.parentElement)

// let container=document.getElementById(`container`)
// container.innerText = `hello hassan`
// container.style.backgroundColor=`red`
// container.style.color=`yellow`
// container.style.padding=`10px`
// container.style.borderLeft=`5px solid black`

// container.style.removeProperty(`background`)
// document.body.innerHTML=`
// <h1>hello world</h1>
// <h2>hello world</h2>
// <p>hello world</p`

//انشاء عنصر
let hassan=document.createElement(`div`)
let sayed=document.createElement(`h1`)
let img=document.createElement(`img`)
 

let content=document.createTextNode(`hello dear`)
sayed.appendChild(content)
img.src=`uploads/team-1.jpg`
hassan.appendChild(img)
hassan.appendChild(sayed)

document.body.appendChild(hassan)
console.log(hassan)
hassan.style.backgroundColor=`red`
hassan.style.textAlign=`center`















