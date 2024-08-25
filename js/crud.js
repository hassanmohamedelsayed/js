//cruds //create  //read //update //delet //search 
//get total 
let title =document.getElementById(`title`)
let price =document.getElementById(`price`)
let taxs =document.getElementById(`taxs`)

let mood =`create`
let tmb;

function gettotal(){
if(price.value !=``){
} 
}


let datapro;
if(localStorage.product !=null){
    datapro = JSON.parse(localStorage.product)
}else{
    datapro=[];
}

hassan.onclick =function(){
    let newpro ={
    title:title.value,
    price:price.value,
    taxs:taxs.value,
    }

    if(mood===`create`){
        if( newpro.count > 0){
            for(let i=0 ;i<newpro.count;i++){
                datapro.push(newpro)
            }
        }else{
            datapro.push(newpro)
        }
    }else{
        datapro[  tmb   ]=newpro;
        mood=`create`
        hassan.innerHTML=`create`
    }
   
    datapro.push(newpro)
    localStorage.setItem(`product`   ,JSON.stringify(datapro))
    cleardata()
    show()
}
//clear
function cleardata(){

    title.value=``;
    price.value=``;
    taxs.value=``;
}

//read
function  show(){
    gettotal()
    let amer= ``;
for(let i=0 ;i < datapro.length; i++){
    amer +=`
    <tr>
    <td>${i}</td>
    <td>${datapro[i].title}</td>
    <td>${datapro[i].price}</td>
    <td>${datapro[i].taxs}</td>
    <td><button onclick="updatedata(${i})" id="update">update</button></td>
    <td><button onclick="deletdata(${i})" id="delet">delet</button></td>
</tr>`
}
document.getElementById(`yass`).innerHTML=amer

if(datapro.length>0){
    btndelet.innerHTML=`
    <button onclick="deleteall()">delet all (${datapro.length})</button>`
}else{
    btndelet.innerHTML=``    
}
}
show()

//delet
function deletdata(i){
datapro.splice(i,1);
localStorage.product=JSON.stringify(datapro)
show()

}

//update
function updatedata(i){
 title.value=datapro[i].title
 price.value=datapro[i].price
 taxs.value=datapro[i].taxs
 gettotal()
 hassan.innerHTML=`update` 
 mood=`update`;
 tmb=i;
 scroll({
    top:0,
    behavior:"smooth"
 })
 
}



