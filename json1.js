const a = `{
    "firstName": "Ashik", "lastName": "pa", "age":25, "place": "dubai"
}`
// const b = JSON.parse(a);
// console.log( document.getElementById("demo").innerHTML = b.firstName +" " + b.place);
// weekDays = ["Monday","Tuesday","Wednesday"];
// console.log(weekDays[weekDays.length-1]);
// for(i = 0; i < weekDays.length; i++){
//     console.log(weekDays[i]);
// }
// 
// higest num in the array
// let expense = [10000,2000,23000,40000,50000,54000,70000,65000,36000];
// let highest = 0;
// for(let x of expense){
//     if(x > highest){
//          highest = x
//     }
// }
// console.log(`higest of the array : ${highest}`);

// lowest num in the array
// let expense = [10000,2000,23000,40000,50000,54000,70000,65000,36000];
// let lowest = expense[0];
// for(let x of expense){
//     if(x < lowest){
//          lowest = x
//     }
// }
// console.log(`higest of the array : ${lowest}`);
//total sum of the array
// let expense = [10000,2000,23000,40000,50000,54000,70000,65000,36000];
// let sum = 0;
// for(let x of expense){
//     sum += x;
// }
// console.log(`sum of the array : ${sum}`);
//wap 2 is present in the array
let number = [1,2,3,4,53,55,67];
let check = 20;
isFound = false;
let x;
for(let num of number){
    if(check == num){
         x = (isFound = true ? `number is found`: isFound = false ?`number not found`:`invalid`);
        break;
    }
}
console.log(x);
