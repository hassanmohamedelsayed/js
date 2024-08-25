let names=[`asmaa`,`doha`,`amani`,`fatma`]
let ages=[`20 yearsold`,`22 yearsold`,`23 yearsold`,`25 yearsold`]
let container=document.createElement(`div`)
document.body.appendChild(container)
container.style.textAlign=`center`
function elements(name,ages){
  //elements
let card =document.createElement(`div`)
let title=document.createElement(`h1`)
let age=document.createElement(`p`)
let img=document.createElement(`img`)
  //content 
let head=document.createTextNode(name)
let ageContent=document.createTextNode(ages)
img.src=`uploads/team-2.jpg`
title.appendChild(head)
age.appendChild(ageContent)
  //style
card.style.width=`200px`
img.style.width=`100%`
card.style.display=`inline-block`
card.style.margin=`2px`
card.style.padding=`5px`
card.style.backgroundColor=`#444`

card.appendChild(title)
card.appendChild(age)
card.appendChild(img)
container.appendChild(card)
}
for(let i=0 ;i<42;i++){
    elements(names[i],ages[i])
}
