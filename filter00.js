a = [10,20,30,5,3,4]

//print all even number
// evenArray = a.filter(num=> num % 2 == 0)
//     console.log(evenArray);
//     //print all number which is greather than 15
//     greater = a.filter(num=> num > 15)
//     console.log(greater);
//wap to check whrther the given no. is a prime or not
// function prime(n){
//     for(i = 2; i < n; i++){
//         if(n % i === 0){
//             return false
//         }
//         else{
//             return true
//         }
//     }
// }
// console.log(prime(2));
//wap to check whether a number which is power of two
// function isPowerofTwo(n){
//     if(n < 1){
//         return false;
//     }
//     while(n > 1){
//         if(n % 2 !== 0){
//             return false;
//         }
//        n = n / 2
//     }
//     return true
// }
// console.log(isPowerofTwo(1));
// console.log(isPowerofTwo(2));
// console.log(isPowerofTwo(5));
//wap to find nth element of fibonacci using recursion 
// function recusiveFibonacci(n){
//     if(n < 2){
//         return n
//     }
//     return recusiveFibonacci(n-1) + recusiveFibonacci(n-2)
// }
// console.log(recusiveFibonacci(1));
// console.log(recusiveFibonacci(6));
// console.log(recusiveFibonacci(7));
//wap to find factorial of a number using recursion method
function recursionFactorial(n){
    if(n === 0){
        return 1
    }
    return n * recursionFactorial(n-1)
}
console.log(recursionFactorial(5));


