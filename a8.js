  const num = [1,3,5,64,25,65,33,66,2];
 low = 0;
 up = num.length-1;
 let numb = 20;
 isPresent = false;
 let a = num.sort((a,b)=>a-b)
 while(low<=up){
 mid = Math.floor(low + up / 2)
  if(num[mid] == numb){
    isPresent = true
    break
  }
  else if(numb > num[mid]){
    low = mid +1
  }
  else if(numb < num[mid]){
    up = mid 
  }
 }
 console.log(ispresent?`${numb} is found`:`${numb}is not found`);

