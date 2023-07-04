//wap for fibonaccis series
function fib(n){
    const a = [0,1]
    for(i = 2; i < n; i++){
        a[i] = a[i-1]+a[i-2]
        }
        return a
    }
console.log(fib(7));