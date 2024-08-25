// let cars={
//     title:[`toyto`,`merceds`,`bmw`],
//     color:[`red`,`black`,`white`],
//     model:[2020,2021,2022],
//     hassan:function(){
//         return `hassan`
//     }
// }
// console.log(cars);
// console.log(cars.title);
let x= 25
let users={
//property
firstname:`hassan`,
lastname:`eltaweel`,
age:x,
email:`hassanmohamed@gmail.com`,
skills:[`html`,`css`,`js`],
active:false,
phone:{
    first:`01229197562`,
    last:`01277356086`,
},
adrees:{
    mit:`kafr`,
    mansoura:`mitghmar`,
},
isActive:function(){
    if(users.active===true){
        return `hello`
    }else{
        return `sorry i am busy`
    }
},
getAge:function(){
    if(users.age>=26){
        return `fake`
    }else{
        return `no fake`
    }
}
}
console.log(users.getAge())
console.log(users.skills[0])

let us={}
us.name=`hassan`
console.log(us.name)

users.has =function(){
    return `hassan`
}
console.log(users.has())

let uesr1={
    name:`abdo`,

    getname:function(){
        return `hello ${this.name}`;
    }
}
let uesr2=Object.create(uesr1)
uesr2.name=`sayed`
console.log(uesr2.getname())


let a1={
    num1:1,
    hello:function(){
        return `hassan`
    }
}
let a2={
    num2:2
}
let a3={
    num3:52
}
let a4= Object.assign(a1,a2,a3)
a4.num1=200,
a4.num2=300
console.log(a4)















