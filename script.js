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

let obj = {
  name: "Zeeshan",
  phy: 20,
  math: 25,
  com: 30,
};
for (data in obj) {
  console.log(data, obj[data]);
}
