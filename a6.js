// wap to display dupication of the number in an array
// let number = [10,20,30,20,45,60,10,45];
// for (i = 0; i < number.length; i++){
//     for(j = i+1; j < number.length; j++){
//         if(number[i]==number[j]){
//            console.log(number[i]);
//         }
//     }
// }
//wap to print pair sum of 6
// let number = [2,3,4,5]
// for(i = 0; i < number.length; i++){
//     for(j = i+1; j <number.length; j++){
//         if(number[i] + number[j] == 6){
//             console.log(`${number[i]} ${number[j]}`);
//         }
//     }
// }
//wap to print all common number in an array
input1 = [10,11,12,20,30]
input2 = [11,20,21,30,31]
for(i = 0; i < input1.length; i++){
    for(j = 0; j < input2.length; j++){
        if(input1[i]==input2[j]){
            console.log(input1[i]);
            break
        }
    }
}
