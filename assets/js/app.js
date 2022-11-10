
// if(confirm("Salam ap104") == true){
//     alert('Ok-a clicklendi')
// }
// else{
//     alert('Cancel-a clicklendi')
// }
// prompt("Qrupunuzu daxil edin");

//primitive :

//Number - BigInt
//String
//Boolean
//Undefiend
//Null

// non-primitive :
// Object

// let num = 4.5;
// let bigNum = 39485739457398457398457n;
// let text = 'ap104';
// let isStudent = false;
// let unf = undefined;
// let n = null;

// console.log(typeof num,typeof bigNum,typeof text,typeof isStudent,typeof unf,typeof n);

//1. Object Literal

// let person1 = {
//     name: 'Shahnaz',
//     surname: 'Mammadova',
//     age: 19
// }
// person1.name = 'Şahnaz';
// person1.group = 'AP104';
// console.log(person1);

//2. Object

// let person2 = new Object({
//     name:'Nihat',
//     surname: 'Abdullazada',
//     age:19
// })
// console.log(person2)

//3. Constructor function

// function Person(ad, soyad, yas){
//     this.name = ad;
//     this.surname = soyad;
//     this.age = yas;
// }

// let person3 = new Person('Tarlan','Haydarov',19);
// console.log(person3);

//4. Class

// class Person{
//     isMale = true;
//     group = '';
//     constructor(name='John', surname='Doe', age=10){
//         this.name = name,
//         this.surname = surname,
//         this.age = age
//     }
// }
// let person4 = new Person();
// let person5 = new Person('Vahid','Abbasov',19.9);
// console.log(person4,person5);

// var a = "AP104";
// let b = "AP104";
// const c = "AP104";
// a = "Code";
// b = "Code 1";
// person.age = 19;
// console.log(person);
// console.log('var : '+ a);
// console.log('let : '+ b);
// console.log('const : '+ c);

// let a = 0;

// if(true)
// {
//     let a = 5;
//     for (let i = 0; i < 10; i++) {
//         let a = 0;
//         a++;
//         console.log("inside for : " + a);
//     }
//     console.log("inside if : " + a);
// }

// console.log(a);

//hoisting
// console.log(vara)

// // console.log(leta)
// // console.log(newC)

// var vara = "ap104"
// let leta = "code"
// const newC = "academy"


// function SayHi(name) {
//     console.log("Salam " + name);
// };
// function Multiply(num1,num2) {
//     return num1 * num2;
// }

// let result = Multiply(6,5);

// let Divide = function(num1,num2){
//     if(num1 < num2){
//         return null;
//     }
//     return num1/num2;
// }

// let DivideArr = (x,y) => {
//     if(x < y){
//         console.log(null);
//     }
//     console.log(x/y);
// }

// DivideArr(6,3)

// let Sum = (num1,num2) => num1+num2;
// let Sum = function(num1,num2){
//     return num1+num2;
// }

// console.log(Sum(4,7));

// console.log(Divide(10,2))

// console.log(result/3);

// SayHi();

// let cars = [
//     {
//         name : 'McQueen',
//         photo : 'https://i.ytimg.com/vi/fdGWRq1dVBA/maxresdefault.jpg',
//         color : 'red'
//     },
//     {
//         name : 'Mater',
//         photo : 'https://i.ytimg.com/vi/Z99mQ5jnjsk/maxresdefault.jpg',
//         color : 'brown'
//     },
//     {
//         name : 'King',
//         photo : 'https://i.ytimg.com/vi/63imhylRMes/maxresdefault.jpg',
//         color : 'blue'
//     }
// ];
// let div = document.getElementById("cars-container");
// // let btn = document.getElementById("add-btn");
// let btn = document.querySelector("#add-btn");
// let carName = document.querySelector("#car-name");
// let carPhoto = document.querySelector("#car-photo");
// let carColor = document.querySelector("#car-color");

// btn.onclick = ()=>{
//     let newCar = {
//         name:carName.value,
//         photo:carPhoto.value,
//         color:carColor.value
//     }
//     cars.push(newCar)
//     fillHTML();
// }
// fillHTML();
// function fillHTML() {
//     div.innerHTML = "";
//     for (let i = 0; i < cars.length; i++) {
//         div.innerHTML += `<div class="col-md-4 my-4">
//                             <div class="card" style="width: 18rem;">
//                                 <img src="${cars[i].photo}" class="card-img-top">
//                                 <div class="card-body">
//                                     <h5 class="card-title">${cars[i].name}</h5>
//                                     <p class="card-text">${cars[i].color}</p>
//                                     <a href="${cars[i].photo}" target="_blank" class="btn btn-primary">Download image</a>
//                                 </div>
//                             </div>
//                         </div>`;
//         }
// }


// console.log(div);

// "Salam" + cars[0].name
// `Salam ${cars[0].name}
let ul = document.getElementById("list");
function fillHTML(arr) {
    ul.innerHTML = "";
    for (let i = 0; i < arr.length; i++) {
        ul.innerHTML += `<li>${arr[i].name} - ${arr[i].phone}</li>`;
    }
}
fetch('https://jsonplaceholder.typicode.com/users?s=').then(data=>data.json()).then(json => fillHTML(json)).catch(e=>console.error(e));
