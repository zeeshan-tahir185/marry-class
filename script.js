// console.log(10)
// let, var const
// const a=200;
// const a=500
// console.log(a);
// var (global scope variable)
// let, const (local scope var)

// {
//     const a=20
// }
// console.log(a);

// var a="zeeeshan"
// a=true
// console.log(typeof(a));
// a = "20";
// if (a < 20) {
//   console.log("the value of a is les than 20");
// } else if (a > 20) {
//   console.log("the value of a is greater than 20");
// } else if (a === 20) {
//   console.log("the value of a is equal to 20");
// } else {
//   console.log("value is something");
// }
// let a=200
// switch(a){
//     case 1: console.log("the value is 1"); break;
//     case 2: console.log("the value is 2"); break;
//     case 20: console.log("the value is 20"); break;
//     default: console.log("Value is something diff");
// }
// for loop, while loop, do while, forEach, ForIn

// for(a=0; a<20; a++){
//     console.log("inside loop");
// }

// let a = 0;
// while(a<20) {
// console.log("inside loop");
// a++;
// }

// do {
//   console.log("inside loop")
//   ++a;
// } while (a > 20);

// array (forEach loop), objects (For In loop)
// let a=[20,30,40,"Zeeshan"]
// let obj={
//     name:"Zeeshan",
//     phy:20,
//     math: 25,
//     com:30
// }
// console.log(obj.name);
//
// function Sum(a, b, c) {
//   let sum = a + b + c;
//   return sum;
// }
// console.log(Sum(20, 300, 40));
// callback function
//  let array=[20,30,40,"Zeeshan"]
//  array.forEach(function(data, index){
//     console.log(index , data);
//  })

// let obj = {
//   name: "Zeeshan",
//   phy: 20,
//   math: 25,
//   com: 30,
// };
// for (data in obj) {
//   console.log(data, obj[data]);
// }
// alert("this is a alert")
// console.log(confirm("Are you sur you have to deleet it "));
// let name=prompt("Please write your name")
// confirm("Are you sure that your name is "+ name)

// Events in js (onclick, onchange, onmouseover, onmouseenter etc), DOM
// function Func1(){
//   console.log("Function called");
// }

// DOM
// let name=document.getElementById("name").value
// let email=document.getElementById("email").value

// console.log(name , email, age);
// map function
// let arr = [20, 30, 40, 50];

// arr.map(function (i, index) {
//   console.log(i);
// });
// ES6 (Advance JS)
// let, var, const , arrow functions , template litterals, arrays destructuring, object destructuring, rest op, spread op, promises, async await
// function Sum(){
//   console.log("function");
// }
// let Sum=(a)=>console.log("function")

// Sum(20,39)

// let arr=[10,20,30]
// arr.forEach(()=>{

// })
// let name="Zeeshan"
// let age=25
// let country="Pakistan"
// console.log("My name is " + name + " and my age is " + age + "and my country is " + country);
// console.log(`My Name is ${name} and my age is ${age} and my country is ${country}`);

// if(age<18){

// }
// else if(age>18){

// }
// age<18? console.log("dkf"): age>18? console.log("dkf"):  console.log("dkf")

// console.log(`${age<18}?age is less then 18: ${age>18}? age is greater then 18: age is equal to 18:`);

// array of objects
// let student = [
//   {
//     name: "Zeeshan",
//     age: 26,
//   },
//   {
//     name: "Zeeshan",
//     age: 26,
//   },
//   {
//     name: "Zeeshan",
//     age: 26,
//   },
// ];

// let backend_data=[10,20,30]
// [phy, maths, comp]=backend_data
// console.log(phy);

// let backend_data=["Zeeshan", 20,30,40]

// let Sum = (name, ...marks) => {
// let sum = phy + eng + comp;
// console.log(`the total number of ${name}: ${sum}`);
//   console.log(marks);

// };

// Sum(...backend_data);

// let arr1=[10,20,30,40]
// let arr2=[50,60,70,80]
// let arr3=[...arr1, ...arr2]
// console.log("concating the array", arr3);

fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then((index) => {
    index
      .json()
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  })
  .catch((err) => {
    console.log(err);
  });

// console.log(data);

// .then(response => response.json())
// .then(json => console.log(json))
// axios

let fetchData = async () => {
  console.log("first");

  await fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then((index) => {
      index
        .json()
        .then((data) => {
          console.log(data);
        })
        .catch((err) => {
          console.log(err);
        });
    })
    .catch((err) => {
      console.log(err);
    });
  console.log("Second");
};



fetchData();
getDatafromAnotherFile()
getDataFromInputOutput()
console.log("JKKJJKksa");

// let Sum=()=>{

// }
