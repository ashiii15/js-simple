function array(arr,t){
    for(i = 0; i < arr.length; i++){
        if(arr[i] == t){
            return i
        }
        }
        return -1

    }
console.log(array([1,2,3,4,],3));