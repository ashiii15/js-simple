// // // const person1 = {
// // //     fullName : function(){
// // //         return this.firstName + " " + this.lastName;
// // //     }
// // // }
// // // const person2 = {
// // //     firstName : "Ashik",
// // //     lastName : "pa",
// // // }
// // //  let x = person1.fullName.call(person2);
// // //  document.getElementById("demo").innerHTML = x;

// const { log } = require("console");

// const { log } = require("console");

// const prompt = require("prompt")

// // //display content : console.log
// // // console.log(10,typeof(10));
// // // console.log(10.1,typeof(10));
// // // console.log("hello javascript",typeof("hello javascript"));
// // // console.log(true,typeof(true));
// // // console.log(null,typeof(null));
// // // console.log(NaN,typeof(NaN));
// // // console.log("ALMAS" * 10,typeof("ALMAS" * 10));
// // // console.log("ALMAS" + 10,typeof("ALMAS" + 10));
// // // students = "ashik";
// // // console.log(students);
// // // const car = "duster";
// // // console.log(car);
// // // const car = "innova";
// // // console.log(car);
// // // console.log("outside the loop" + i);
// // // var i = 10;
// // //  for (let i = 1; i <= 5; i++){
// // //     console.log("inside the loop" +i);
// // //  }
// // // console.log("outside the loop" +i);


// // // var company = "Luminor technolab";
// // // var address = "kakkanad";
// // // // company is luminor technolab and address is kakkanad
// // // console.log(`company is ${company} and address is ${address}`);
// // // let a = 10;
// // // console.log(a += 10);
// // // let a = 2 ;
// // // let b = 10;
// // // console.log(a || b);
// // //ternary operator
// // // let a = 45;
// // // console.log(a >= 45? "pass":"fail");
// // //
// // let num1 = 10;
// // let num2 = 20;
// // //assign num1 to temp
// // // let temp = 10;
// // // //assign num2 to num1
// // // num1 = num2;
// // // //assign temp to num2
// // // num2 = temp;
// // // //display
// // // console.log(num1 , num2);
// // // console.log(num1,num2);
// // // num1 = num1 + num2;//num1 = 30
// // // num2 = num1 - num2;//num2 = 10
// // // num1 = num1 - num2;
// // // console.log(num1,num2);
// // // age = 26;
// // // if (age > 18){
// // //     console.log(`He is eligible for voting`);
// // // }
// // // else{
// // //     console.log(`He is not eligible for voting`);
// // // }
// // const car = [
// //     ["bmw",10000],
// //     ["benz",9000],
// //     ["audi",6000]
// // ];
// // const myCar = 
// // Object.fromEntries(car);
// // console.log(car);
// const students = {
//     firstName : "Ashik",
//     lastName : "pa",
//     age : 25,
// }
// console.log(students);
// const x = students;
// x.age = 10;
// console.log(students.age);

// let x = 0;
// //checking condition
// console.log(x > 0 ? `It is positive number`:x < 0 ?`it is negative number`:`zero`);

// let x = 100;
// let y = 100;
//checking condition 
// if(x > y){
//     console.log(`x is larger number`);
// }
// else if(y > x){
//     console.log(`y is larger number`);
// }
// else{
//     console.log(`y is larger number`);

// }

// console.log(x > y ? `x is larger number`:y > x `y is larger number`:`equal`);
// import prompt-sync
//  const prompt = require(`prompt-sync`)({sigint:true})
//  const userInput = prompt(`Enter a number: `)
//  //console.log(userInput,typeof(userInput));
// let x = Number(userInput)
// // console.log(x,typeof x);
 
// console.log(x % 15 == 0 ? `fizzbuzz`: x % 5 == 0 ? `buzz`: x % 3 == 0 ? `fizz`: "nothoning to display")
//wap to print second largest number and  among 3 numbers and display them in ascending order//
// const prompt = require(`prompt-sync`)({sigint:true})
// const userInput1 = prompt(`Enter first number : `);
// const userInput2 = prompt(`Enter second number : `);
// const userInput3 = prompt(`Enter third number : `);
//  let num1 = userInput1;//30
//  let num2 = userInput2;//20
//  let num3 = userInput3;//10
// if(num1 > num2 && num1 > num3){
//   // console.log(`num1 is greater`);
// }
//  if(num2 > num3){
//     console.log(`${num2} is the second largest number`);
//     console.log(`${num3},${num2},${num1}`);
// }
// else{
//    // console.log(`${num3} is the  larger number`);
//     console.log(`${num3} is the  second largest number`);
//     console.log(`${num2},${num3},${num1}`);
// }
// //2nd
// if(num2 > num3 && num2 > num1){//10,30,20
//     // console.log(`num1 is greater`);
//   }
//    if(num3 > num1){
//       console.log(`${num3} is the second largest number`);
//       console.log(`${num1},${num3},${num2}`);
//   }
//   else{
//      // console.log(`${num3} is the  larger number`);
//       console.log(`${num1} is the  second largest number`);
//       console.log(`${num3},${num1},${num2}`);
//   }
// //   3rd code
// if(num2 > num3 && num2 > num1){//10,20,30
//     // console.log(`num1 is greater`);
//   }
//    if(num3 > num1){
//       console.log(`${num3} is the second largest number`);
//       console.log(`${num1},${num3},${num2}`);
//   }
//   else{
//      // console.log(`${num3} is the  larger number`);
//       console.log(`${num1} is the  second largest number`);
//       console.log(`${num3},${num1},${num2}`);
//   }
///////////////////////////////////////////////////////////////////////////
// function Person(first, last, age, eye){
//  this.firstName = first;
//  this.lastName = last;
//  this.age = age;
//  this.eyeColor = eye;
// }
//  const dad = new Person("abdul","khader",50,"black");
//  const mom =new Person("Nadeera","nk",43,"brown")
//  console.log(dad.age);
//  console.log(mom.firstName);
// function Person(first, last, age, eye){
//   this.firstName = first;
//   this.lastNmae = last;
//   this.age = age;
//   this.eyeColor = eye;
// }
// Person.prototype.lanuage = "english";
// const father = new Person("Abdul","khader",50,"black");
// const mother = new Person("Nadeera","nk",43,"brown");
// console.log(father.lanuage);
// const site = "w3schools";
// let txt = "";
// for (const x of site){
//   txt += x ;
// }
// console.log(txt);

// const student = {
//   firstName : "Ashik",
//   lastName : "pa",
//   age : 25,
//   fullName : function(){
//    return this.firstName +  "" + this.lastName;
//   }
// }
//  const student1 = {
//   firstName : "Afsal",
//   lastName : "pa",
// }
// let fullName = student.fullName.call(student1);
// console.log(fullName);
// class car {
//   constructor(name, year){
//     this.name  = name;
//     this.year = year;
//   }

// age(){
//   const date = new date();
//   return date.getfullyear()-this.year;
// }
// }
// const garage = new car("mustang",2018);
// console.log(`my car is ford ${garage.name} `+`and it is ${garage.age} year old`);
// class car{
//   constructor(sport){
//     this.carName = sport;
//   }

// show(){
//   return `i have ${this.carName}`
// }
// }
// console.log(car);
// 
// let i = 1;
// while( i <= 5){
//   console.log(i);
//   i++;
// }
// let i = 10;
// while( i >= 1){
//   console.log(i);
//   i--;
// }
// let i = 1;
// while(i <= 50){
//   i%2==0&&console.log(i);
//   i++;
// }
// let i = 1;
// sum = 0
// while(i <= 10){
//   sum += i
//   i++;
// }
// console.log(sum);
// class car {
//   constructor(name){
//     this.name = name;
//   }
//   static hello(x){
//     return "My car is" + " "+ x.name;
//   }
// }
// const myCar = new car("mustang");
// // console.log(myCar.hello());
// console.log(car.hello(myCar));
// 
// setInterval(myFunction, 1000);
//  function myFunction(){
//   let d = new Date();
//   console.log(
//     d.getHours() + " :"+
//     d.getMinutes() + " :"+
//     d.getSeconds() );
// }
// function myDisplayer(some){
//   console.log(some);
// }
// let myPromise = new Promise(function(myResolve,myReject){
//   let x = 1;
//   // producing code
//   if(x == 0){
//     myResolve("OK");
//   }
//   else{
//     myReject("Error");
//   }
// });
//   // connecting code
// myPromise.then(
//   function(value){
//     myDisplayer(value);},
//     function(error){
//       myDisplayer(error);}
//   );


// palindrome number
// let num = 123;
// console.log(num);
// function reverNum(){
//   return  Number(num.toString().split("").reverse().join(""))
// }

// console.log(reverNum(num)
// input = 321;
// let num = input;
// str = ""
// while(num > 0){
//  lastNum =  num % 10;
//  str += lastNum;
//  num = Math.floor(num / 10)

// }
// // console.log(str);
// console.log(input == str ?`${input} is a palindrome number)
// let num = 2;
// str = "";
//  sum = 0;
// for (i = 0; i < num; i++){
//   str += num;
//   sum += Number(str)
//   console.log(sum);

// }
// Amstrong
// num = 4;
// sum = 0;
// str =""
// for(i = 0; i < num; i++){
//   str += num
//   sum += Number(str)
// }
// console.log(sum);
// async
// function myDisplayer(some){
//   console.log(some);
// }
//  async function myFunction(){
//   return "Hello world";
// }
// myFunction().then(
//   function(value){myDisplayer(value);}
// )
// const prompt = require(`prompt-sync`)({sigint:true})
// const userInput = prompt("Enter yur number")
// let exp = Number(userInput)
// num = 1;
// min = 8;
// up = 36;
// while(num <= up)
// {
//   if(min <= num**exp && num**exp <= up){
//     console.log(num);
//   }
// }
// const para = document.createElement("p");
// const text = document.createTextNode("new paragraph")
// para.appendChild(text);
// const elemt = document.getElementById("id1");
// elemt.appendChild(para);
// for(row = 1; row <= 5; row++){
//     str =""
//     for(col = 5; col >= row; col--){
//         str += "* "
//     }
//     console.log(str);

// }
for(i = 1; i <= 4; i++){
    str ="";
    for(j =1; j<=7; j++){
        if(i==4 || i + j == 5|| j-i ==3){
            str += "*";
        }
        else{
            str += " ";
        }
    }
    console.log(str);
}


