// console.log("global variables");
// function parent(){
//     let parent = a;
//     console.log("inside the parent function");
//     function child(){
//         console.log("inside the child function");
//         let child = b;
//       return b;
//     }
//     child()
// }
// parent()
// let number = "7025893678";
// function checker(){
//     if(number.length == 10){
//         console.log("It is valid number");
//     }
//     else{
//         console.log("It is  not valid number");

//     }
// }
// console.log(checker());
const prompt = require("prompt-sync")({sigint:true})
let useInp = prompt("enter a number")
let b = useInp
function gmailChecker(){
    if(b.endsWith("@gmail.com")){
        console.log("It is a valid gmail address");
    }
        else{
            console.log("It is not a valid gmail address");
    }
}
gmailChecker();