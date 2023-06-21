// for(i = 10 ; i >= 1; i--){
//     console.log(i);
// }
// let num = 5;
// fact = 1;
// for(i = num; i > 0; i--){
//     fact *= i;
// }
// console.log(fact);
// prime number or not
//  let num = 5;
//  isPrime = true;
//  for (i = 2; i < num; i++ ){
//    if(num % i == 0) {
//     isPrime = false
//     break
//    }    
//  }
// console.log( isPrime?`${num} is a prime number`: `${num} is not a prime number`);

function formValidation(){
  let x = document.forms["myforms"]["fname"].value;
  if(x == ""){
    alert("Please complete the form"); 
    return false;
  }
}
console.log();