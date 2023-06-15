// // const person1 = {
// //     fullName : function(){
// //         return this.firstName + " " + this.lastName;
// //     }
// // }
// // const person2 = {
// //     firstName : "Ashik",
// //     lastName : "pa",
// // }
// //  let x = person1.fullName.call(person2);
// //  document.getElementById("demo").innerHTML = x;

// //display content : console.log
// // console.log(10,typeof(10));
// // console.log(10.1,typeof(10));
// // console.log("hello javascript",typeof("hello javascript"));
// // console.log(true,typeof(true));
// // console.log(null,typeof(null));
// // console.log(NaN,typeof(NaN));
// // console.log("ALMAS" * 10,typeof("ALMAS" * 10));
// // console.log("ALMAS" + 10,typeof("ALMAS" + 10));
// // students = "ashik";
// // console.log(students);
// // const car = "duster";
// // console.log(car);
// // const car = "innova";
// // console.log(car);
// // console.log("outside the loop" + i);
// // var i = 10;
// //  for (let i = 1; i <= 5; i++){
// //     console.log("inside the loop" +i);
// //  }
// // console.log("outside the loop" +i);


// // var company = "Luminor technolab";
// // var address = "kakkanad";
// // // company is luminor technolab and address is kakkanad
// // console.log(`company is ${company} and address is ${address}`);
// // let a = 10;
// // console.log(a += 10);
// // let a = 2 ;
// // let b = 10;
// // console.log(a || b);
// //ternary operator
// // let a = 45;
// // console.log(a >= 45? "pass":"fail");
// //
// let num1 = 10;
// let num2 = 20;
// //assign num1 to temp
// // let temp = 10;
// // //assign num2 to num1
// // num1 = num2;
// // //assign temp to num2
// // num2 = temp;
// // //display
// // console.log(num1 , num2);
// // console.log(num1,num2);
// // num1 = num1 + num2;//num1 = 30
// // num2 = num1 - num2;//num2 = 10
// // num1 = num1 - num2;
// // console.log(num1,num2);
// // age = 26;
// // if (age > 18){
// //     console.log(`He is eligible for voting`);
// // }
// // else{
// //     console.log(`He is not eligible for voting`);
// // }
// const car = [
//     ["bmw",10000],
//     ["benz",9000],
//     ["audi",6000]
// ];
// const myCar = 
// Object.fromEntries(car);
// console.log(car);
const students = {
    firstName : "Ashik",
    lastName : "pa",
    age : 25,
}
console.log(students);
const x = students;
x.age = 10;
console.log(students.age);

