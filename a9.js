//display all number which is leass than 30
// input = [
//     [10,20],
//     [30,40],
//     [50,60],
//     [50,50],
// ];
// for(let x of input){
//     for(let y of x){
//         if(y <= 30){
//             console.log(y);
//         }
//         // console.log(y);
//     }

//     // console.log(x);
// }
// wap to find all common numbers given the 2 arrays
inp1 = [10,11,13,12,14,15]
inp1.sort((a,b)=>a-b)
// console.log(sort1);
inp2 = [11,20,21,22,30,31]
inp2.sort((a,b)=>a-b)
// console.log(sort2);
p = 0;
q = 0; 
while(p<inp1.length && q<inp2.length){
    if(inp1[p] == inp2[q]){
    console.log(inp1[p]);
    p++;
    q++;
}
else if(inp1[p] < inp2[q]){
    p++
}
else if(inp1[p] > inp2[q]){
    q++
}
}
