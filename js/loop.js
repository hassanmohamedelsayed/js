// start
//condition
//steps
for(let i=0;i<5;i++){
console.log(`hassan `+ i)
}
for(let i=5;i>0;i--){
console.log(i)
}
 let names=[`hassan`,`mohamed`,`elsayed`,`eltaweel`]
for(let  i = names.length; i >=0 ;i--)
{
    console.log(names[i]);
}
// let names=[`hassan`,`mohamed`,`elsayed`,`eltaweel`]
// for(let i =0 ; i < names.length;i++)
// {
//     console.log(names[i]);
// }
 let cars=[`bmw`,`lancer`,`toyota`]
 let models=[2020,2021,2022]
 let colors=[`red`,`green`,`yellow`]

 for(let i=0; i< cars.length;i++){
    console.log(cars[i])
    for(let x=0; x<models.length;x++){
        console.log(models[x])
        }
    
for(let y=0; y<colors.length;y++){
console.log(colors[y])
}
console.log(`---------------`)
 }
let users=[`hassan`,`youssef`,1,2,3,`mohamed`,`sayed`]
for(let i=0;i<users.length;i++){
    
    if( typeof users[i]==`number`){
        continue;
    }
    if(users[i]==`hassan`){
        continue
    }
    if(users[i]!=`youssef`){
        continue
    }
    if(users[i]==`mohamed`){
        break;
    }
    console.log(users[i])
}